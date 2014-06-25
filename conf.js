module.exports = {
  // port to listen on
  port: process.env.PORT,
  hostname: process.env.HOSTNAME,

  proxyTo: {
    host: process.env.PROXY_HOST,
    port: process.env.PROXY_PORT
  },

  sessionSecret: 'AeV8Thaieel0Oor6shainu6OUfoh3ohwZaemohC0Ahn3guowieth2eiCkohhohG4', // change me

  modules: {
    // Register a new oauth app on Google Apps at
    // https://code.google.com/apis/console
    google: {
      appId: process.env.GOOGLE_APP_ID,
      appSecret: process.env.GOOGLE_APP_SECRET,
      requiredDomain: 'jbotelho.com'
    }
  }
};
