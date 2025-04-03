const {device, element, by} = require('detox');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const performLogin = async () => {
  await element(by.id('login-username-input')).typeText('94756921275');
  await sleep(1000);
  await element(by.id('login-password-input')).typeText('Password@12345');
  await sleep(1000);
  await element(by.id('login-btn')).tap();
  await sleep(3000);
};

const goToCreateInvoice = async () => {
  await element(by.id('fab')).tap();
  await sleep(3000);
};

describe('Create invoice test case', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await performLogin();
    await goToCreateInvoice();
  });

  it('should handle create invoice', async () => {
    await expect(element(by.id('reference'))).typeText('123456');
    await expect(element(by.id('reference'))).typeText('2023-01-01');
    await expect(element(by.id('amount'))).typeText('100');
    await expect(element(by.id('description'))).typeText('Description');
    await expect(element(by.id('create-invoice'))).tap();
    await sleep(3000);
    await expect(element(by.id('123456'))).toBeVisible();
  });
});
