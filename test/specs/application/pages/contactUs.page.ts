export class ContactUsPage {
    open(url: string) {
        browser.url(url)
    };
    private get root(): WebdriverIO.Element {
        return $('#content')
    };
    fillContactForm(data: {
        name: string,
        email: string,
        enquiry: string,
    }) {
        this.root.$('#input-name').setValue(data.name);
        this.root.$('#input-email').setValue(data.email);
        this.root.$('#input-enquiry').setValue(data.enquiry);
    };
    submit() {
        const submitButton = this.root.$('input[value="Submit"]');
        submitButton.click();
        expect(browser).toHaveUrlContaining('success');
    };
}