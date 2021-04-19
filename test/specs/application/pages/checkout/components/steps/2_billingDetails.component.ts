
export class BillingDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement()
    }

    fillBillingDetails(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        this.root.$('#input-payment-firstname').setValue(data.firstName)
        this.root.$('#input-payment-lastname').setValue(data.lastName)
        this.root.$('#input-payment-email').setValue(data.email)
        this.root.$('#input-payment-telephone').setValue(data.telephone)
        this.root.$('#input-payment-address-1').setValue(data.address1)
        this.root.$('#input-payment-city').setValue(data.city)
        this.root.$('#input-payment-postcode').setValue(data.postCode)
        this.root.$('#input-payment-country').selectByVisibleText(data.country)
        this.root.$('#input-payment-zone').selectByVisibleText(data.region)
        browser.pause(1000);
    }

    fillPassword(data: {
        password: string,
        confirm: string
    }) {
        this.root.$('#input-payment-password').setValue(data.password);
        this.root.$('#input-payment-confirm').setValue(data.confirm);
    }

    notSameAdress() {
            const shippingAdress = $('input[name="shipping_address"]');
            shippingAdress.click(); 
    }; 

    agreePrivacyPolicy() {
        const checkbox = this.root.$('input[value="1"][name="agree"]');
        checkbox.click();
    };

    continue() {
        const continueButton = this.root.$('input[value="Continue"]')
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}