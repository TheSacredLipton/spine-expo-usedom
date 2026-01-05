# spine-expo-usedom

Run **Spine Web Components** in React Native (iOS/Android) using Expo's **DOM Components** (`'use dom'`).

> ⚠️ **Note**: This package relies on Expo DOM Components, so it only supports **iOS** and **Android**. Web (react-native-web) is not supported.
> Requires **Expo SDK 52** or higher.

## 🚀 Features

- **Expo DOM Components**: Seamlessly use Web technologies (WebGL, etc.) within native apps.
- **Spine Web Components**: Play Spine animations using the official web components.

## 📦 Installation

### 1. Install dependencies

```bash
npm install spine-expo-usedom @esotericsoftware/spine-webcomponents
```

### 2. Configure `postinstall` script

Add a `postinstall` script to your `package.json` to copy the Spine Web Components library to your `public` folder. This is required for the component to load the necessary scripts dynamically.

```json
{
  "scripts": {
    "postinstall": "mkdir -p public/spine && cp node_modules/@esotericsoftware/spine-webcomponents/dist/iife/spine-webcomponents.min.js public/spine/"
  }
}
```

Run the script manually to copy the file:

```bash
npm run postinstall
```

### 3. Update `.gitignore`

Add the copied spine script to your `.gitignore` to avoid committing it.

```
public/spine/spine-webcomponents.min.js
```

## 💻 Usage

### 1. Place Spine Assets
Place your Spine assets (`.json` or `.skel`, `.atlas`, `.png`) in the `public` folder of your Expo project.

Example structure:
```
my-app/
├── public/
│   └── spineboy/
│       ├── spineboy-pro.json
│       ├── spineboy.atlas
│       └── spineboy.png
├── App.tsx
└── ...
```

### 2. Use the Component

```tsx
import SpineView from 'spine-expo-usedom';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SpineView
        skeleton="/spineboy/spineboy-pro.json"
        atlas="/spineboy/spineboy.atlas"
        animation="run"
        skin="default"
        fit="contain"
        dom={{ style: { width: '100%', height: '100%' } }}
      />
    </View>
  );
}
```

## 🔧 Props

| Prop                    | Type                                          | Default      | Description                                                  |
| ----------------------- | --------------------------------------------- | ------------ | ------------------------------------------------------------ |
| `skeleton`              | `string`                                      | **Required** | Path to the skeleton data file (`.json` or `.skel`).         |
| `atlas`                 | `string`                                      | **Required** | Path to the atlas file (`.atlas`).                           |
| `animation`             | `string`                                      | `undefined`  | Name of the animation to play.                               |
| `skin`                  | `string`                                      | `undefined`  | Name of the skin to use.                                     |
| `fit`                   | `'cover' \| 'contain' \| 'loading' \| 'none'` | `undefined`  | How the skeleton should fit into the viewport.               |
| `debug`                 | `boolean`                                     | `false`      | Whether to show debug information (bones, regions, etc.).    |
| `preserveDrawingBuffer` | `boolean`                                     | `true`       | Whether to preserve the drawing buffer.                      |
| `dom`                   | `DOMProps`                                    | `undefined`  | Props passed to the underlying Expo DOM Component container. |

## 📝 License

This project is licensed under the MIT License.
