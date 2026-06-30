"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  Sparkles,
  Float,
} from "@react-three/drei";
import * as THREE from "three";

function Chips({ count = 10 }) {
  const group = useRef();
  const items = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => {
      const a = (i / count) * Math.PI * 2;
      return {
        pos: [Math.cos(a) * 3.0, Math.sin(a) * 3.0, 0],
        accent: i % 3 === 0,
        speed: 0.4 + Math.random() * 0.6,
      };
    });
  }, [count]);

  useFrame((_, delta) => {
    group.current.children.forEach((c, i) => {
      c.rotation.z += delta * (items[i].speed * (i % 2 === 0 ? 1 : -1));
    });
  });

  return (
    <group ref={group}>
      {items.map((it, i) => (
        <mesh key={i} position={it.pos}>
          <boxGeometry args={[0.22, 0.14, 0.02]} />
          <meshStandardMaterial
            color={it.accent ? "#E31C3D" : "#55555a"}
            emissive={it.accent ? "#E31C3D" : "#000000"}
            emissiveIntensity={it.accent ? 1.4 : 0}
            roughness={0.4}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// Tracks how far the viewport has scrolled past a given hero element,
// expressed as 0 -> 1 over one viewport height. Avoids hijacking the
// page's native scroll (unlike drei's ScrollControls) so it plays nicely
// with a normal multi-section marketing page.
function useHeroScrollProgress(heroRef) {
  const progress = useRef(0);

  useEffect(() => {
    function onScroll() {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height || window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      progress.current = passed / total;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [heroRef]);

  return progress;
}

export default function Lens({ heroRef }) {
  const rig = useRef();
  const ring = useRef();
  const ringMat = useRef();
  const progress = useHeroScrollProgress(heroRef);

  useFrame((state, delta) => {
    const p = progress.current; // 0 -> 1 across the hero's own height only

    rig.current.rotation.z += delta * 0.12;
    rig.current.rotation.y = p * Math.PI * 1.4;
    rig.current.rotation.x = 0.3 + Math.sin(p * Math.PI) * 0.15;

    const targetZ = 9 - p * 2.2;
    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      targetZ,
      4,
      delta
    );
    state.camera.lookAt(0, 0, 0);

    const pulse = 1 + Math.sin(p * Math.PI) * 0.1;
    ring.current.scale.setScalar(pulse);
    if (ringMat.current) {
      ringMat.current.emissiveIntensity = 0.3 + p * 0.7;
    }
  });

  return (
    <group ref={rig}>
      <mesh ref={ring}>
        <torusGeometry args={[2.1, 0.16, 32, 128]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.6}
          chromaticAberration={0.04}
          anisotropy={0.3}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.1}
          roughness={0.05}
          ior={1.3}
          color="#E31C3D"
        />
      </mesh>

      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 8, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh>
          <icosahedronGeometry args={[0.85, 6]} />
          <MeshDistortMaterial
            color="#101012"
            roughness={0.2}
            metalness={0.7}
            distort={0.35}
            speed={1.8}
          />
        </mesh>
      </Float>

      <Chips count={10} />

      <Sparkles count={60} scale={6} size={2} speed={0.3} color="#E31C3D" opacity={0.4} />
    </group>
  );
}
