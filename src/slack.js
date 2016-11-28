import {
  RtmClient,
  CLIENT_EVENTS,
  RTM_EVENTS,
  //MemoryDataStore,
} from '@slack/client';

import models from '@slack/client/lib/models';

import { Adapter } from '@exoplay/exobot';

const dmName = new models.DM()._modelName;

export const EVENTS = {
  [CLIENT_EVENTS.RTM.CONNECTING]: 'slackConnecting',
  [CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED]: 'slackConnected',
  [CLIENT_EVENTS.RTM.AUTHENTICATED]: 'slackAuthenticated',
  [CLIENT_EVENTS.RTM.DISCONNECT]: 'slackDisconnected',
  [CLIENT_EVENTS.RTM.UNABLE_TO_RTM_START]: 'slackUnableToStart',
  [CLIENT_EVENTS.RTM.ATTEMPTING_RECONNECT]: 'slackReconnecting',
  [RTM_EVENTS.MESSAGE]: 'slackMessage',
};

export class SlackAdapter extends Adapter {
  name = 'Slack';

  constructor ({ token, adapterName}) {
    super(...arguments);
    this.token = token;
    this.name = adapterName || this.name;
  }

  register (bot) {
    super.register(...arguments);
    const { token } = this;

    this.client = new RtmClient(token, { logLevel: bot.logLevel });

    Object.keys(EVENTS).forEach(slackEvent => {
      const mappedFn = this[EVENTS[slackEvent]];
      this.client.on(slackEvent, mappedFn.bind(this));
      this.client.on(slackEvent, (...args) => {
        bot.emitter.emit(`slack-${slackEvent}`, ...args);
      });
    });

    this.client.start();
  }

  send (message) {
    if (message.text) {
      this.bot.log.debug(`Sending ${message.text} to ${message.channel}`);
      this.client.sendMessage(message.text, message.channel);
    }
  }

  slackConnecting () {
    this.bot.log.info('Connecting to Slack.');
    this.status = Adapter.STATUS.CONNECTING;
  }

  slackConnected () {
    this.bot.log.info('Connected to Slack.');
  }

  slackAuthenticated () {
    this.bot.log.notice('Successfully authenticated to Slack.');
    this.status = Adapter.STATUS.CONNECTED;
  }

  slackDisconnected () {
    this.bot.log.critical('Disconnected from Slack.');
    this.status = Adapter.STATUS.DISCONNECTED;
  }

  slackUnableToStart () {
    this.bot.log.critical('Unable to start Slack.');
    this.status = Adapter.STATUS.DISCONNECTED;
  }

  slackReconnecting () {
    this.bot.log.notice('Reconnecting to Slack.');
    this.status = Adapter.STATUS.RECONNECTING;
  }

  getRolesForUser (userId) {
    if (this.adapterUsers && this.roleMapping && this.adapterUsers[userId]) {
      return this.adapterUsers[userId].roles
        .filter(role => this.roleMapping[role])
        .map(role => this.roleMapping[role]);
    }

    return [];
  }

  getRoles(adapterUserId, adapterUser) {
    const roles = [];
    if (adapterUser) {
      if (adapterUser.is_admin) {
        roles.push('admin');
      }

      if (adapterUser.is_owner) {
        roles.push('owner');
      }
      return roles;
    }

    return false;
  }

  async slackMessage (message) {
    let user;
    if (!message.text) { return; }

    const botId = this.client.activeUserId;
    if (message.user === botId) { return; }

    this.bot.log.debug(message.text);
    const slackUser = this.client.dataStore.getUserById(message.user);

    if (slackUser) {
      user = await this.getUser(slackUser.id, slackUser.name, slackUser);
    } else {
      user = await this.getUser(message.user, undefined, slackUser);
    }

    const channel = this.client.dataStore.getChannelGroupOrDMById(message.channel);

    if (message.text) {
      if (channel && channel._modelName === dmName) {
        return super.receiveWhisper({ user, text: message.text, channel: message.channel });
      }

      super.receive({ user, text: message.text, channel: message.channel });
    }
  }

  async getUserIdByUserName (name) {
    const user = this.client.dataStore.getUserByName(name);
    if (user) {
      let botUser;
      try {
        botUser = await this.getUser(user.id, user.name, user);
      } catch (err) {
        this.bot.log.warn(err)
      }

      return botUser.id;
    }

    return;
  }
}
