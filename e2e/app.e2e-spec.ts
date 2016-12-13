import { FeathersjsAngularChatPage } from './app.po';

describe('feathersjs-angular-chat App', function() {
  let page: FeathersjsAngularChatPage;

  beforeEach(() => {
    page = new FeathersjsAngularChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
