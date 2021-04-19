import { RegisterAccountPage } from "./pages/registerAccount.page";
import { ProductReturnsPage } from "./pages/productsReturns.page";
import { GiftCertificatePage } from "./pages/giftCertificate.page";
import { ContactUsPage } from "./pages/contactUs.page";
import { ProductCategoryPage } from "./pages/productCategory.page";
import { CheckoutPage } from "./pages/checkout/index";
import {Navbar} from './pages/components/navbar.component';


export class App {
    registration: RegisterAccountPage
    return: ProductReturnsPage
    certificate: GiftCertificatePage
    contact: ContactUsPage
    category: ProductCategoryPage
    checkout: CheckoutPage
    navbar: Navbar

    constructor() {
        this.registration = new RegisterAccountPage()
        this.return = new ProductReturnsPage()
        this.certificate = new GiftCertificatePage()
        this.contact = new ContactUsPage()
        this.category = new ProductCategoryPage()
        this.checkout = new CheckoutPage()
        this.navbar = new Navbar()
    }
}