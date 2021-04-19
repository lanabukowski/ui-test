import {ProductCardComponent} from './components/productCard.component';

export class ProductCategoryPage {

    get products(): ProductCardComponent[] {
        return $$('.product-layout').map(el => {
            return new ProductCardComponent(el)
        })
    }
}