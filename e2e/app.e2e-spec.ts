import { HibaGewurzePage } from './app.po';

describe('hiba-gewurze App', () => {
  let page: HibaGewurzePage;

  beforeEach(() => {
    page = new HibaGewurzePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
