// This is the default configuration for the dev mode of the web console.
// A generated version of this config is created at run-time when running
// the web console from the openshift binary.
//
// To change configuration for local development, copy this file to
// assets/app/config.local.js and edit the copy.
window.DEV_SERVER_PORT = 9001;
window.DEV_TOOL_SETTING = 'cheap-eval-source-map';

window.OPENSHIFT_CONFIG = {
  apis: {
    hostPort: "gaozh105:8443",
    prefix: "/apis"
  },
  api: {
    openshift: {
      hostPort: "gaozh105:8443",
      prefix: "/oapi"
    },
    k8s: {
      hostPort: "gaozh105:8443",
      prefix: "/api"
    }
  },
  auth: {
    oauth_authorize_uri: "https://gaozh105:8443/oauth/authorize",
    oauth_redirect_base: "https://localhost:" + window.DEV_SERVER_PORT,
    oauth_client_id: "openshift-web-console",
    logout_uri: ""
  },
  loggingURL: "",
  metricsURL: ""
};

window.OPENSHIFT_VERSION = {
  openshift: "dev-mode",
  kubernetes: "dev-mode"
};

window.OPENSHIFT_CONSOLE_BASE_URL = "https://localhost:9000/dev-console";

// Uncomment to use mock data.
// window.MOCK_ORIGIN_SERVICES = true;
// window.MOCK_SERVICES_DATA = true;

// Uncomment to generate a very large project list for testing when using mock data.
// window.MOCK_LARGE_PROJECT_LIST = true;
if (window && window.localStorage) {
  window.localStorage.setItem('LocalStorageUserStore.user', '{"kind":"User","apiVersion":"user.openshift.io/v1","metadata":{"name":"admin","selfLink":"/apis/user.openshift.io/v1/users/admin","uid":"429e861f-32d7-11ea-8f7c-0050568571d6","resourceVersion":"4452","creationTimestamp":"2020-01-09T11:57:50Z"},"identities":["htpasswd_auth:admin"],"groups":["system:authenticated","system:authenticated:oauth"]}')
  window.localStorage.setItem('LocalStorageUserStore.user.ttl', '1606986575766')
  window.localStorage.setItem('LocalStorageUserStore.token', 'bysgRIxPvLc3R5MDECi14MNcXpj-wt6GLEl9CIfamEY')
  window.localStorage.setItem('LocalStorageUserStore.token.ttl', '1606986575766')
}

