import { DemoAdminPage } from './app.po';

describe('demo-admin App', function() {
  let page: DemoAdminPage;

  beforeEach(() => {
    page = new DemoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
