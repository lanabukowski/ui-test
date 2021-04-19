import {App} from './application/application';

const app = new App();
const path = require('path');

describe('Add several products to the cart', function () {
    it('purchase of goods with a choice of options', function () {
        browser.url('/');
        app.navbar.openCategory('Laptops & Notebooks');
        const addToCartButton = $$('button[onclick*="cart.add"]')[0];
        addToCartButton.click();
        const options = $('#product');
        expect(options).toBeVisible({message: "Expected optipns to be visible"});
        const deliveryDate = $('#input-option225');
        deliveryDate.setValue('2011-04-30');
        const quantity = $('#input-quantity');
        quantity.setValue('2');
        const buttonAddToCart = $('#button-cart');
        buttonAddToCart.click();
        const success = $('.alert-success');
        expect(success).toBeVisible({message: 'Expected success to be visible'});
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToCart();
        const cart = $('#cart');
        cart.click();
        const tbody = $('.table-striped > tbody');
        expect(tbody).toBeVisible({message: 'Expected tbody to be visible'});
        expect(tbody).toHaveChildren(2);
    }); 
    it('product with file upload option', function () {
        browser.url('/');
        app.navbar.openCategory('Components');
        const link = $('*=Monitors (2)');
        expect(link).toBeVisible({message: 'Expected link to be visible'});
        link.click();
        const addToCartButton = $$('button[onclick*="cart.add"]')[0];
        addToCartButton.click();
        const options = $('#product');
        expect(options).toBeVisible({message: "Expected optipns to be visible"});
        const radioSmall = $('input[name="option[218]"][value="5"]');
        radioSmall.click();
        const checkboxFirst = $('input[name="option[223][]"][value="8"]');
        checkboxFirst.click();
        const text = $('#input-option208');
        text.setValue('some text');
        const select = $('#input-option217');
        select.click();
        const option = $('option[value="3"]');
        option.click();
        const textarea = $('#input-option209');
        textarea.setValue('some text');
        const date = $('#input-option219');
        date.setValue('2011-02-10');
        const time = $('#input-option221');
        time.setValue('21:26');
        const datetime = $('#input-option220');
        datetime.setValue('2011-02-10 21:26');
        const quantity = $('#input-quantity');
        quantity.setValue('3');
        const submit = $('button#button-cart');
        submit.click();
        const success = $('.alert-success');
        expect(success).toBeVisible({message: 'Expected success to be visible'});
    })
});