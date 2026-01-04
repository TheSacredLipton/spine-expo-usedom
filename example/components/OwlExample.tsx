'use dom';

import React, { useEffect } from 'react';
import '@esotericsoftware/spine-webcomponents';
import { Vector2 } from '@esotericsoftware/spine-webgl';

export default function OwlExample({
    dom
}: {
    dom?: import('expo/dom').DOMProps;
}) {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const absoluteSkeleton = `${origin}/owl/owl-pro.skel`;
    const absoluteAtlas = `${origin}/owl/owl-pma.atlas`;

    const skeletonRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        const el = skeletonRef.current;
        if (!el) return;

        // Set animations attribute manually to ensure it is parsed correctly by the web component
        // when passed as a property in React/DOM environment, it might not trigger the string parser correctly
        el.setAttribute('animations', '[0, idle, true][1, blink, true]');

        // @ts-ignore
        if (el.whenReady) {
            // @ts-ignore
            el.whenReady.then(() => {
                const wc = el as any;
                const controlBone = wc.skeleton.findBone("control");
                const tempVector = new Vector2();

                wc.afterUpdateWorldTransforms = () => {
                    // Use pointerWorldX/Y directly as per user example
                    // Note: spine-webcomponents manages pointerWorldX/Y internally based on mouse/touch events
                    if (wc.pointerWorldX === undefined) return;

                    controlBone.parent.worldToLocal(tempVector.set(wc.pointerWorldX, wc.pointerWorldY));
                    controlBone.x = controlBone.data.x + tempVector.x / wc.overlay.canvas.width * 30;
                    controlBone.y = controlBone.data.y + tempVector.y / wc.overlay.canvas.height * 30;
                }
            });
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            {/* @ts-ignore: Custom element */}
            <spine-skeleton
                ref={skeletonRef}
                skeleton={absoluteSkeleton}
                atlas={absoluteAtlas}
                style={{ width: '100%', height: '100%' }}
                debug={true}
            />
        </div>
    );
}
