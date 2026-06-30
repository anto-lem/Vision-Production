"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment, Preload } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import Lens from "./Lens";
import Overlay from "./Overlay";

export default function Scene() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsMobile(window.matchMedia("(max-width: 760px)").matches);
  }, []);

  if (reduceMotion) {
    // Accessible fallback: static layout, no WebGL, no forced scroll hijacking.
    return (
      <div style={{ position: "relative" }}>
        <Overlay static />
      </div>
    );
  }

  return (
    <Canvas
      dpr={[1, isMobile ? 1.3 : 2]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 8, 18]} />

      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={8} color="#E31C3D" distance={30} />
      <pointLight position={[-4, -2, 3]} intensity={3} color="#ffffff" distance={30} />

      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.4} />

        <ScrollControls pages={4} damping={0.25}>
          <Lens />
          <Scroll html style={{ width: "100%" }}>
            <Overlay />
          </Scroll>
        </ScrollControls>

        <Preload all />
      </Suspense>

      {!isMobile && (
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.7}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.3}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.15} darkness={0.6} />
        </EffectComposer>
      )}
    </Canvas>
  );
}
