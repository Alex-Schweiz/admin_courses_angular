import { EnglishCoursesPage } from './app.po';

describe('english-courses App', () => {
  let page: EnglishCoursesPage;

  beforeEach(() => {
    page = new EnglishCoursesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
