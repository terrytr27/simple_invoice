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
  await sleep(5000);
};

describe('Invoice list test case', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await performLogin();
  });

  it('should show invoice list', async () => {
    await expect(element(by.id('IV1743318184694'))).toBeVisible();
  });

  it('should perform search function', async () => {
    await element(by.id('input-iv-id')).typeText('IV1743318184694');
    await element(by.id('search-btn')).tap();
    await sleep(2000);
    await expect(element(by.id('IV1743318184694'))).toBeVisible();
  });

  it('should handle filter by', async () => {
    await element(by.id('filter-by')).tap();
    await element(by.text('Paid orders')).tap();
    await sleep(2000);
    await expect(element(by.text('No invoices found'))).toBeVisible();
  });

  it('should handle order by', async () => {
    await element(by.id('order-by')).tap();
    await element(by.text('Ascending')).tap({x: 0, y: 0});
    await sleep(2000);
    await expect(element(by.text('INV123515'))).toBeVisible();
  });
});
