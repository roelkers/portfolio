'use strict';
const axios = require('axios')

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    afterCreate: async entry => {
      axios
        .post(strapi.config.custom.staticWebsiteBuildURL, {})
        .catch(() => {
          // Ignore
        });
    },
    // After updating a value.
    // Fired after an `update` query.
    // afterUpdate: async (model, attrs, options) => {
    afterUpdate: async entry => {
      axios
        .post(strapi.config.custom.staticWebsiteBuildURL, {})
        .catch(() => {
          // Ignore
        });
    },
  }
};
