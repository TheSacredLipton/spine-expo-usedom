'use dom';

import React, { useEffect } from 'react';
import '@esotericsoftware/spine-webcomponents';

export interface SpineViewProps {
    dom?: import('expo/dom').DOMProps;
    /** Path to the skeleton data file (.json or .skel) */
    skeleton: string;
    /** Path to the atlas file (.atlas) */
    atlas: string;
    /** Name of the animation to play */
    animation?: string;
    /** Name of the skin to use */
    skin?: string;
    /** How the skeleton should fit into the viewport */
    fit?: 'cover' | 'contain' | 'loading' | 'none';
    /** Whether to show debug information */
    debug?: boolean;
    /** Whether to preserve the drawing buffer */
    preserveDrawingBuffer?: boolean;
    /** Raw assets data for embedding */
    rawData?: string;
    /** Any other attributes for spine-skeleton */
    [key: string]: any;
}

export default function SpineView({
    dom,
    skeleton,
    atlas,
    skin,
    preserveDrawingBuffer = true,
    ...rest
}: SpineViewProps) {
    // window.location.origin を使って絶対パスを生成
    // process.env.EXPO_BASE_URL が "/" で始まらない場合を考慮してパスを結合
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    // URLが相対パスの場合（/で始まる場合）、originを付与する処理を入れると親切かも
    const getAbsolutePath = (path: string) => {
        if (!path) return path;
        if (path.startsWith('http')) return path;
        if (path.startsWith('/')) return `${origin}${path}`;
        return `${origin}/${path}`;
    };

    const absoluteSkeleton = getAbsolutePath(skeleton);
    const absoluteAtlas = getAbsolutePath(atlas);

    useEffect(() => {
        console.log('Current URL:', window.location.href);
        console.log('Spine assets paths (absolute):', { skeleton: absoluteSkeleton, atlas: absoluteAtlas });
    }, []);

    // skin="default" の場合、Spine Web Components でエラーになる場合があるため除外する
    // また、React 19以降ではCustom Elementのプロパティとして渡される際、文字列のままだと
    // コンポーネント内部で配列として扱われた時に1文字ずつ処理されてしまうため、明示的に配列化する
    const skinProp = (!skin || skin === 'default') ? undefined : skin.split(',');

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            {/* @ts-ignore: Custom element */}
            <spine-skeleton
                skeleton={absoluteSkeleton}
                atlas={absoluteAtlas}
                skin={skinProp}
                preserve-drawing-buffer={preserveDrawingBuffer}
                style={{ width: '100%', height: '100%' }}
                {...rest}
            />
        </div>
    );
}
