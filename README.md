# Spine Expo ('use dom')

*この README は生成 AI によって作成されました。*

Expo の **DOM Components (`'use dom'`)** 機能を使用して、React Native アプリ（iOS/Android）内で **Spine Web Components** を動作させるパッケージです。

> ⚠️ **注意**: 本パッケージは Expo DOM Components を使用しているため、**iOS** および **Android** 専用です。Web (react-native-web) はサポートしていません。

## 🚀 特徴

- **Expo DOM Components**: ネイティブアプリ内でWeb技術（WebGLなど）をシームレスに利用。
- **Spine Web Components**: 公式のWebコンポーネントを使用してSpineアニメーションを再生。

## 📦 インストール

```bash
npm install spine-expo-usedom
```

## 💻 使い方

1. **Spineアセットの配置**
   Expoプロジェクトの `public` フォルダ内に、Spineのアセット（.json, .atlas, .png）を配置します。

2. **コンポーネントの使用**

```tsx
import SpineView from 'spine-expo-usedom';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SpineView
        skeleton="/spineboy/export/spineboy-pro.json"
        atlas="/spineboy/export/spineboy.atlas"
        animation="run"
        dom={{ style: { width: '100%', height: '100%' } }}
      />
    </View>
  );
}
```


## 📝 License

This project is licensed under the MIT License.
