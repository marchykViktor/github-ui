import { MlsTestPage } from './app.po';

describe('mls-test App', () => {
  let page: MlsTestPage;

  beforeEach(() => {
    page = new MlsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
