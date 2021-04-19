export class GiftCertificatePage {
    open(url: string) {
        browser.url(url);
    };
    private get root(): WebdriverIO.Element {
        return $('#content')
    };
    fillCertificateInfo(data: {
        recipientName: string,
        recipientEmail: string,
        yourName: string,
        yourEmail: string,
        message: string,
        amount: string
    }) {
        this.root.$('#input-to-name').setValue(data.recipientName);
        this.root.$('#input-to-email').setValue(data.recipientEmail);
        this.root.$('#input-from-name').setValue(data.yourName);
        this.root.$('#input-from-email').setValue(data.yourEmail);
        this.root.$('#input-message').setValue(data.message);
        this.root.$('#input-amount').setValue(data.amount);
    };
    selectTheme() {
        const theme = this.root.$('input[name="voucher_theme_id"][value="7"]');
        theme.click();
    };
    agreePrivacyPolicy() {
        const checkbox = this.root.$('input[value="1"][name="agree"]');
        checkbox.click();
    };
    continue() {
        const continueButton = this.root.$('input[value="Continue"]');
        continueButton.click();
        expect(browser).toHaveUrlContaining('success');
    };
}