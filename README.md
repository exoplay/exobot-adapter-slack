# exobot-adapter-slack

## Installation

* `npm install --save @exoplay/exobot/exobot-adapter-slack`

## A Setup Example

```javascript
import Exobot from '@exoplay/exobot';
import Slack from '@exoplay/exobot-adapter-slack';

const Bot = new Exobot(BOT_NAME, {
  // ...,
  adapters: [
    new Slack({
      token: process.env.SLACK_TOKEN,
    })
  ],
});
```

## Setup Notes

Visit https://api.slack.com/bot-users to set up a bot user.

## License

MIT licensed. Copyright 2016 Exoplay, LLC. See LICENSE file for more details.
