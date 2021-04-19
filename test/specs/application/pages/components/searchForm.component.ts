export class SearchFormComponent {
    private get root(): WebdriverIO.Element {
        return $('#search');
    }
    fillSearchField(item: string) {
        const searchField = this.root.$('input[placeholder="Search"]');
        expect(searchField).toBeVisible({message: 'Expected search field to be visible'});
        searchField.setValue(item);
        browser.keys('Enter');
    }
}