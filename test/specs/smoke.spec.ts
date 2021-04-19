import {App} from './application/application';
import {SearchFormComponent} from './application/pages/components/searchForm.component';

const app = new App();
const search = new SearchFormComponent();

describe('Website', function() {
    it('Should be alive', function() {
        browser.url('/');
        expect($('#logo')).toBeDisplayed();
    });
    it('should allow user to register', function() {
        app.registration.open('index.php?route=account/register');
        app.registration.fillPersonalDetails({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
        });
        app.registration.fillPassword({
            password: '123678',
            confirm: '123678',
        });
        app.registration.agreePrivacyPolicy();
        app.registration.continue();
    });
});

describe("products return", function(){
    it("can be submited", function() {
        app.return.open('index.php?route=account/return/add');
        app.return.fillOrderInfo({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
            orderId: '1111',
            orderDate: '2021-02-27'
        });
        app.return.fillProductInfo({
            productName: 'Apple Cinema 30"',
            productCode: 'Product 15',
            quantity: '3',
            faulty: 'test'
        });
        app.return.selectReason();
        app.return.isOpen();
        app.return.submit();
    });
});

describe("Gift Certificate", function() {
    it("can be purchased", function() {
        app.certificate.open('index.php?route=account/voucher');
        app.certificate.fillCertificateInfo({
            recipientName: 'recipient',
            recipientEmail: `test=+${Date.now()}@test.com`,
            yourName: 'name',
            yourEmail: `test=+${Date.now()}@test.com`,
            message: 'text',
            amount: '5'
        });
        app.certificate.selectTheme();
        app.certificate.agreePrivacyPolicy();
        app.certificate.continue();
    });
});

describe("Contact us form", function() {
    it("must send messages to shop administration", () => {
        app.contact.open('index.php?route=information/contact');
        app.contact.fillContactForm({
            name: 'Test',
            email: `test=+${Date.now()}@test.com`,
            enquiry: 'testtesttest',
        });
        app.contact.submit();
    });
});

describe("Items search", function() {
    it("should show results in case multiple items matches", () => {
        browser.url('index.php?route=common/home');
        search.fillSearchField('Imac');
        const item = $('.product-thumb');
        expect(item).toBeVisible();
    });
  
    it("should redirect to 'no matching results' in case no items matched", () => {
        browser.url('index.php?route=common/home');
        search.fillSearchField('text');
        const message = $('h2+p');
        expect(message).toHaveText('There is no product that matches the search criteria.');
    });
});



