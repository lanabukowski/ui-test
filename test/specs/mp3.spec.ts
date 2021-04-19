import {App} from './application/application';
import {ApiClient} from './application/api/apiClient';

const app = new App();

describe('Functions of the guest', function () {
    it('can be selected for comparison by guest', function () {
        browser.url('/');
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.compareThisProduct();
    });
    
    it('can be added to cart by guest', function () {
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToCart();
    });
});

describe('Functions of the registered user', function () {
    before(function() {
        browser.url('index.php?route=account/login');
        const user = new ApiClient().createNewUser();
        const email = $('#input-email');
        email.setValue(user.email);
        const password = $('#input-password');
        password.setValue(user.password);
        const submit = $('input[value="Login"]');
        submit.click();
    });
    it('can be added to wishlist', function () {
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToWishList();
    });
    it('can be selected for comparison by registered user', function () {
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.compareThisProduct();
    });
    it('can be added to cart by registered user', function () {
        app.navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToCart();
    });
});

