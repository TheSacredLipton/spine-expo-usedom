import React from 'react';
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
    /** Path to the spine-webcomponents.min.js file */
    spineWebComponentSrc?: string;
    /** Any other attributes for spine-skeleton */
    [key: string]: any;
}
export default function SpineView({ dom, skeleton, atlas, skin, preserveDrawingBuffer, spineWebComponentSrc, ...rest }: SpineViewProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map