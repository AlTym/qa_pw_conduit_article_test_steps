import { expect, test } from '@playwright/test';

export class CreateArticlePage {
  constructor(page) {
    this.page = page;
    this.publishArticleButton = page.getByRole('button', {
      name: 'Publish Article',
    });
    this.errorMessage = page.getByRole('list').nth(1);
    this.articleTitleInputField = page.getByPlaceholder('Article Title');
    this.articleDescriptionInputField = 
      page.getByPlaceholder("What's this article about?");
    this.articleBodyInputField = 
      page.getByPlaceholder('Write your article (in markdown)');
    this.articleTagsInputField = page.getByPlaceholder('Enter tags');
    this.commentField = page.getByPlaceholder('Write a comment...');
  }

  async clickPublishArticleButton() {
    await test.step(`Click the 'Publish Article' button`, async () => {
      await this.publishArticleButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await test.step(`Assert the '${messageText}' error is shown`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }

  async fillTitleInputField(messageText) {
    await test.step(`fill Title Input Field`, async () => {
      await this.articleTitleInputField.fill(messageText);
    });
  }

  async fillDescriptionField(messageText) {
    await test.step(`fill Description Input Field`, async () => {
      await this.articleDescriptionInputField.fill(messageText);
    });
  }

  async fillBodyField(messageText) {
    await test.step(`fill Body Input Field`, async () => {
      await this.articleBodyInputField.fill(messageText);
    });
  }

  async fillTagsField(messageText) {
    await test.step(`fill Tags Input Field`, async () => {
      await this.articleTagsInputField.fill(messageText);
      await this.page.keyboard.press('Enter');
    });
  }
}
