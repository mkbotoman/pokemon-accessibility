var selenium = require('selenium-webdriver'),
    AxeBuilder = require('axe-webdriverjs'),
    chromedriver = require('chromedriver')
    Key = selenium.Key;

var util = require('util');

var driver;

describe('Pokemon demo', function() {
    beforeEach(function(done) {
        driver = new selenium.Builder()
            .forBrowser('chrome')
            .build();

        driver.get('http://localhost:3000/')
            .then(function () {
                done();
            });
    });

    afterEach(function(done) {
        driver.quit().then(function () {
            done();
        });
    });

    it('should fetch the app and analyze it', function (done) {
        driver.findElement(selenium.By.css('#root'))
            .then(function () {
                AxeBuilder(driver)
                    .analyze(function(results) {
                        console.log('Accessibility Violations: ', results.violations.length);
                        if (results.violations.length > 0) {
                            results.violations.map(function(violation) {
                              console.log(violation)
                            })
                        }
                        expect(results.violations.length).toBe(0);
                        done();
                    })
            });
    });
});
