import { AppPage } from './app.po';

<<<<<<< HEAD
describe('angular-tour-of-heroes App', () => {
=======
describe('hello-world App', () => {
>>>>>>> f05f69ae715952a58d94af018f60ca25bd707188
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
