export class DeliveryMethodComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-method').parentElement()
    };

    continue() {
        const continueButton = this.root.$('input#button-shipping-method');
        expect(continueButton).toBeClickable({message: 'Expected Continue button to be visible'});
        continueButton.click();
    };
};