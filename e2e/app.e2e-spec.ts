import { MessyMotorcycleMaintenancePage } from './app.po';

describe('messy-motorcycle-maintenance App', () => {
  let page: MessyMotorcycleMaintenancePage;

  beforeEach(() => {
    page = new MessyMotorcycleMaintenancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
