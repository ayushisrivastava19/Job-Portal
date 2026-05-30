// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://ee5d767a20337e412c2df43f798b90d4@o4511462877954048.ingest.us.sentry.io/4511462884376576",
  integrations: [
   Sentry.mongooseIntegration(),
],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});