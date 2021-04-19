export class RegisterAccountPage {
    open(url: string) {
        browser.url(url);
    };
    private get root(): WebdriverIO.Element {
        return $('#content')
    };
    fillPersonalDetails(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
    }) {
        this.root.$('#input-firstname').setValue(data.firstName);
        this.root.$('#input-lastname').setValue(data.lastName);
        this.root.$('#input-email').setValue(data.email);
        this.root.$('#input-telephone').setValue(data.telephone);
    };
    fillPassword(data: {
        password: string,
        confirm: string
    }) {
        this.root.$('#input-password').setValue(data.password);
        this.root.$('#input-confirm').setValue(data.confirm);
    };
    agreePrivacyPolicy() {
        const checkbox = this.root.$('input[value="1"][name="agree"]');
        checkbox.click()
    };
    continue() {
        const continueButton = this.root.$('input[value="Continue"]');
        continueButton.click()
        expect(this.root.$('h1')).toHaveText('Your Account Has Been Created!');
    };
}