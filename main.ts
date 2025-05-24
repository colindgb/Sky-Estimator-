// File: main.ts
import { registerPlugin } from '@capacitor/core';

const SplashScreen = registerPlugin('SplashScreen');

window.addEventListener('DOMContentLoaded', async () => {
  await SplashScreen.hide();
});
