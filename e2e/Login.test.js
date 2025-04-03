const {device, element, by} = require('detox');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Login test case', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show login screen', async () => {
    for (const testId of [
      'login-heading',
      'login-btn',
      'login-username-input',
      'login-password-input',
    ]) {
      await expect(element(by.id(testId))).toBeVisible();
    }
  });

  it('should show validation error', async () => {
    await element(by.id('login-btn')).tap();
    await sleep(1000);
    await expect(element(by.id('login-username-input-error'))).toBeVisible();
    await expect(element(by.id('login-password-input-error'))).toBeVisible();
  });

  it('should perform login success', async () => {
    await element(by.id('login-username-input')).typeText('94756921275');
    await sleep(1000);
    await element(by.id('login-password-input')).typeText('Password@12345');
    await sleep(1000);
    await element(by.id('login-btn')).tap();
  });
});
