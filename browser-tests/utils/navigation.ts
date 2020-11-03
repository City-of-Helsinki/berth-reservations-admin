import { ClientFunction } from 'testcafe';

export const navigateBack = ClientFunction(() => window.history.back());

export const navigateForward = ClientFunction(() => window.history.forward());

export const navigateBackAndForward = async () => {
  await navigateBack();
  await navigateForward();
};
