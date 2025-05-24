# Cappivate Estimator

**Professional quoting, compliance, and job management system for trades.**

---

## Features
- Electron Desktop + Android APK support
- Dark mode UI
- PDF quotes & digital signatures
- Smart templates & AI material estimator
- Risk audit + compliance logs
- Firebase-ready (Firestore, Auth, Storage)

---

## Getting Started

### Desktop (Electron)
```bash
npm install
npm start
```

### Build EXE
```bash
npm run package
```
> Output: `/release-builds/CappivateEstimator-win32-x64`

---

## Android (Capacitor + WebView)

### Setup
```bash
npm install -g @capacitor/cli
npx cap init cappivate-estimator com.cappivate.estimator
cp -r ./dist/* ./public/
npx cap add android
```

### Build APK
1. Open `/android` in Android Studio
2. Run > Build APK or generate signed bundle

---

## Firebase Setup
1. Create Firebase project
2. Enable Firestore, Auth, Storage
3. Paste config in `firebase-config.js`

---

## Permissions (AndroidManifest.xml)
- Internet
- Camera
- Storage Access

---

## License
MIT – Cappivate AI PTY LTD
