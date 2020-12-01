module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        staticDistDir: './',
        //url: ['http://127.0.0.1:5500/']
        url: ['http://127.0.0.1/','http://127.0.0.1:5500/explore.html']
      },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage',
      },
    },
  };