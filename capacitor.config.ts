// File: capacitor.config.ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cappivate.estimator',
  appName: 'Cappivate Estimator',
  webDir: 'public',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true
    }
  }
};

export default config;
