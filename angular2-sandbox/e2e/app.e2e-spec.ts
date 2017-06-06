import { Angular2SandboxPage } from './app.po';

describe('angular2-sandbox App', () => {
  let page: Angular2SandboxPage;

  beforeEach(() => {
    page = new Angular2SandboxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
