import { ssoLogin } from '../pages/ssoLogin';
import { login as loginPage } from '../pages/login';
import { testUsername, testUserPassword } from './settings';
import { navigation } from '../pages/navigation';

export const login = async (t: TestController) => {
  await t
    .click(loginPage.loginButton)
    .click(ssoLogin.loginLink)
    .typeText(ssoLogin.username, testUsername())
    .typeText(ssoLogin.password, testUserPassword())
    .click(ssoLogin.loginButton);

  try {
    if (await ssoLogin.permissionRequestHeading.exists) {
      await t.click(ssoLogin.allowButton);
    }
  } catch {
    // all is well, do nothing
  }

  await t.expect(navigation.sidebarContainer.exists).ok({ timeout: 20000 });
};
