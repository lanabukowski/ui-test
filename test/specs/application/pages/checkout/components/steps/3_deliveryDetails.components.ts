export class DeliveryDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-address').parentElement()
    }
    selectNewAddress() {
        const newAddressCheckbox = $('input[name="shipping_address"][value="new"]');
        newAddressCheckbox.click();
    }

    fillDeliveryDetails(data: {
        firstName: string,
        lastName: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        this.root.$('#input-shipping-firstname').setValue(data.firstName)
        this.root.$('#input-shipping-lastname').setValue(data.lastName)
        this.root.$('#input-shipping-address-1').setValue(data.address1)
        this.root.$('#input-shipping-city').setValue(data.city)
        this.root.$('#input-shipping-postcode').setValue(data.postCode)
        this.root.$('#input-shipping-country').selectByVisibleText(data.country)
        this.root.$('#input-shipping-zone').selectByVisibleText(data.region)
        browser.pause(1000);
    }

    continue() {
        const continueButton = this.root.$('input#button-shipping-address')
        expect(continueButton).toBeClickable({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}