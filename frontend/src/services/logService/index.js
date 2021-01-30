import { init, captureMessage } from "@sentry/browser";

const init = () => {
  init({
    dsn: "__DSN__",
    // ...
  });
};

const log = (message) => {
  captureMessage(message);
};

export default {
  init,
  log,
};
