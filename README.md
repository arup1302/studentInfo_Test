# StudentAcademics 🎓

A React Native application that lets students explore top universities around the world. Browse a list of universities, search by name or country, and view detailed information including programs, tuition, and rankings.

---

## Features

- **Home Screen** — Scrollable list of universities with name, country flag, and short description
- **Search** — Filter universities by name or country in real time
- **Details Screen** — Full university profile with description, programs, tuition, and ranking
- **Responsive layout** — Adapts to all screen sizes using `Dimensions` and `SafeAreaInsets`
- **Clean navigation** — Stack-based navigation using React Navigation

## Tech Stack

- React Native 0.84 (CLI)
- React Navigation (Native Stack)
- react-native-safe-area-context
- react-native-screens
- Static JSON data
- react-native-vector-icons
- Node.js >= 18

---

# StudentAcademics — Setup & Run

Minimal setup and run instructions for the project.

Prerequisites

Install dependencies

cd StudentAcademics
npm install

```

Run from GitHub

- Clone the repo from github


git clone git@github.com:<your-username>/StudentAcademics.git
```

- Download ZIP from the repository page and extract locally.

After obtaining the code, run:

```
cd StudentAcademics
npm install
```

If you plan to run on iOS, also run `cd ios && pod install` before building.

iOS only — install CocoaPods

```
cd ios
bundle install   # optional if using Bundler
pod install

```

Start Metro

```
npm start
```

Run on Android

````
npm run android
```Run on iOS

```
npm run ios
````

- If native fonts (icons) don't appear after installing `react-native-vector-icons`, rebuild the native app and run `cd ios && pod install`.

That's it — these steps are sufficient to set up and run the app locally.

```

```
