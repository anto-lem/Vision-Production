"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import Lens from "./Lens";

export default function Hero3D({ heroRef }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsMobile(window.matchMedia("(max-width: 760px)").matches);
  }, []);

  if (!mounted || reduceMotion) return null;

  return (
    <Canvas
      dpr={[1, isMobile ? 1.3 : 2]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={8} color="#E31C3D" distance={30} />
      <pointLight position={[-4, -2, 3]} intensity={3} color="#ffffff" distance={30} />

      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.35} />
        <Lens heroRef={heroRef} />
        <Preload all />
      </Suspense>

      {!isMobile && (
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.7} luminanceThreshold={0.25} luminanceSmoothing={0.3} mipmapBlur />
          <Vignette eskil={false} offset={0.15} darkness={0.55} />
        </EffectComposer>
      )}
    </Canvas>
  );
}
