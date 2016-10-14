import { WptestprojectPage } from './app.po';

describe('wptestproject App', function() {
  let page: WptestprojectPage;

  beforeEach(() => {
    page = new WptestprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
