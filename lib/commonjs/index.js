"use strict";
'use dom';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpineView;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function SpineView({
  dom,
  skeleton,
  atlas,
  skin,
  preserveDrawingBuffer = true,
  spineWebComponentSrc = '/spine-webcomponents.min.js',
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
  const absoluteSpineWebComponentSrc = getAbsolutePath(spineWebComponentSrc);
  (0, _react.useEffect)(() => {
    console.log('Current URL:', window.location.href);
    console.log('Spine assets paths (absolute):', {
      skeleton: absoluteSkeleton,
      atlas: absoluteAtlas
    });
    if (window.spine) return;

    // Prevent duplicate script loading
    if (document.querySelector(`script[src="${absoluteSpineWebComponentSrc}"]`)) return;
    const script = document.createElement('script');
    script.src = absoluteSpineWebComponentSrc;
    script.async = true;
    script.onload = () => {
      console.log('Spine Web Components loaded');
    };
    script.onerror = e => console.error('Failed to load Spine script', e);
    document.head.appendChild(script);
  }, [absoluteSpineWebComponentSrc]);

  // skin="default" の場合、Spine Web Components でエラーになる場合があるため除外する
  // また、React 19以降ではCustom Elementのプロパティとして渡される際、文字列のままだと
  // コンポーネント内部で配列として扱われた時に1文字ずつ処理されてしまうため、明示的に配列化する
  const skinProp = !skin || skin === 'default' ? undefined : skin.split(',');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("spine-skeleton", {
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