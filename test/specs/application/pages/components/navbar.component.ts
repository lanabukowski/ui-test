export class Navbar {
    private get root(): WebdriverIO.Element {
        return $('.navbar-nav');
    }
    openCategory(categoryName: string) {
        $(`a=${categoryName}`).click();
        
        const viewAllFromCategory = $('.dropdown.open .see-all')
        expect(viewAllFromCategory).toBeVisible()
        viewAllFromCategory.click()
    }
}