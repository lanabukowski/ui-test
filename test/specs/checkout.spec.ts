import {App} from './application/application';

const app = new App();

describe("Checkout by Guest", function() {
    before(function () {
        browser.url('/');
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToCart();
    });
    it("Fill form checkout by guest", function() {
        app.checkout.open();
        app.checkout.checkoutOptions.selectGuestCheckout()
        app.checkout.checkoutOptions.continue();
        
        app.checkout.billingDetails.fillBillingDetails({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
            address1: 'test',
            city: 'test',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        });

        app.checkout.billingDetails.continue();
                
        app.checkout.deliveryMethod.continue();

        app.checkout.paymentMethod.acceptTermsAndConditions();
        app.checkout.paymentMethod.continue();

        app.checkout.confirmOrder.continue();
        expect(browser).toHaveUrlContaining('success');
    });
});

describe("Checkout by register account", function() {
    before(function () {
        browser.url('/');
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToCart();
    });
    it("Fill form checkout", function() {
        app.checkout.open();
        app.checkout.checkoutOptions.selectRegisterAccount();
        app.checkout.checkoutOptions.continue();
       
        app.checkout.billingDetails.fillBillingDetails({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
            address1: 'test',
            city: 'test',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        });
        app.checkout.billingDetails.fillPassword({
            password: '1234',
            confirm: '1234',
        });
        app.checkout.billingDetails.notSameAdress();
        app.checkout.billingDetails.agreePrivacyPolicy();
        app.checkout.billingDetails.continue();

        app.checkout.deliveryDetails.selectNewAddress();
        app.checkout.deliveryDetails.fillDeliveryDetails({
            firstName: 'test',
            lastName: 'test',
            address1: 'test',
            city: 'test',
            postCode: '123123',
            country: 'Ukraine',
            region: 'Kyiv'
        });
        app.checkout.deliveryDetails.continue();

        app.checkout.deliveryMethod.continue();

        app.checkout.paymentMethod.acceptTermsAndConditions();
        app.checkout.paymentMethod.continue();

        app.checkout.confirmOrder.continue();
        expect(browser).toHaveUrlContaining('success');
    });
});

