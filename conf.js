exports.config = {

    // Capabilities to be passed to the webdriver instance.
    //capabilities: {
    //seleniumAddress: 'http://192.168.99.100:4444/wd/hub',
    //browserName: 'chrome',
    //shardTestFiles: true,
    //maxInstances: 2
    //},

    seleniumAddress: 'http://192.168.99.100:4444/wd/hub',
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }],


    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',


    specs: ['mytest.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    }
};