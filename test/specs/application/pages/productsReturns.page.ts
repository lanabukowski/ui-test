export class ProductReturnsPage {
    open(url: string) {
        browser.url(url)
    };
    private get root(): WebdriverIO.Element {
        return $('#content')
    };
    fillOrderInfo(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        orderId: string,
        orderDate: string
    }) {
        this.root.$('#input-firstname').setValue(data.firstName);
        this.root.$('#input-lastname').setValue(data.lastName);
        this.root.$('#input-email').setValue(data.email);
        this.root.$('#input-telephone').setValue(data.telephone);
        this.root.$('#input-order-id').setValue(data.orderId);
        this.root.$('#input-date-ordered').setValue(data.orderDate);
    };
    fillProductInfo(data: {
        productName: string,
        productCode: string,
        quantity: string,
        faulty: string
    }) {
        this.root.$('#input-product').setValue(data.productName);
        this.root.$('#input-model').setValue(data.productCode);
        this.root.$('#input-quantity').setValue(data.quantity);
        this.root.$('#input-comment').setValue(data.faulty);
    };
    selectReason() {
        const reason = this.root.$('input[value="5"]');
        reason.click();
    };
    isOpen() {
        const open = this.root.$('input[name="opened"][value="1"]');
        open.click();
    };
    submit() {
        const submitButton = this.root.$('input[value="Submit"]');
        submitButton.click();
        expect(browser).toHaveUrlContaining('success');
    };
}
