"use strict";
'use dom';

import React, { useEffect } from 'react';
import '@esotericsoftware/spine-webcomponents';
import { jsx as _jsx } from "react/jsx-runtime";
export default function SpineView({
  dom,
  skeleton,
  atlas,
  skin,
  preserveDrawingBuffer = true,
  ...rest
}) {
  // window.location.origin を使って絶対パスを生成
  // process.env.EXPO_BASE_URL が "/" で始まらない場合を考慮してパスを結合
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  // URLが相対パスの場合（/で始まる場合）、originを付与する処理を入れると親切かも
  const getAbsolutePath = path => {
    if (!path) return path;
    if (path.startsWith('http')) return path;
    if (path.startsWith('/')) return `${origin}${path}`;
    return `${origin}/${path}`;
  };
  const absoluteSkeleton = getAbsolutePath(skeleton);
  const absoluteAtlas = getAbsolutePath(atlas);
  useEffect(() => {
    console.log('Current URL:', window.location.href);
    console.log('Spine assets paths (absolute):', {
      skeleton: absoluteSkeleton,
      atlas: absoluteAtlas
    });
  }, []);

  // skin="default" の場合、Spine Web Components でエラーになる場合があるため除外する
  // また、React 19以降ではCustom Elementのプロパティとして渡される際、文字列のままだと
  // コンポーネント内部で配列として扱われた時に1文字ずつ処理されてしまうため、明示的に配列化する
  const skinProp = !skin || skin === 'default' ? undefined : skin.split(',');
  return /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    children: /*#__PURE__*/_jsx("spine-skeleton", {
      skeleton: absoluteSkeleton,
      atlas: absoluteAtlas,
      skin: skinProp,
      "preserve-drawing-buffer": preserveDrawingBuffer,
      style: {
        width: '100%',
        height: '100%'
      },
      ...rest
    })
  });
}
//# sourceMappingURL=index.js.map