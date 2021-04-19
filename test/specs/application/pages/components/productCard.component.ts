export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {
    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"]');
        expect(addToCartButton).toBeVisible({message: 'Expected add to cart button to be visible'});
        addToCartButton.click();
        const success = $('.alert-success');
        expect(success).toBeVisible({message: 'Expected success to be visible'});
    }

    addToWishList() {
        const addToWishlistButton = this.root.$('button[onclick*="wishlist.add"]');
        expect(addToWishlistButton).toBeVisible({message: 'Expected add to wishlist button to be visible'});
        addToWishlistButton.click();
        const success = $('.alert-success');
        expect(success).toBeVisible({message: 'Expected success to be visible'});
    }

    compareThisProduct() {
        const compareThisProductButton = this.root.$('button[onclick*="compare.add"]');
        expect(compareThisProductButton).toBeVisible({message: 'Expected compare this product button to be visible'});
        compareThisProductButton.click();
        const success = $('.alert-success');
        expect(success).toBeVisible({message: 'Expected success to be visible'});
    }
}