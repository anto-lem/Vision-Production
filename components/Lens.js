"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  Sparkles,
  Float,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";

const STAGE_COUNT = 3;

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

export default function Lens() {
  const rig = useRef();
  const ring = useRef();
  const ringMat = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    const p = scroll.offset; // 0 -> 1 across the whole scrollable page

    // Continuous ambient spin so the object never feels static
    rig.current.rotation.z += delta * 0.12;

    // Scroll-tied transform: opens up, rotates and pulls the camera in
    rig.current.rotation.y = p * Math.PI * 2.6;
    rig.current.rotation.x = 0.3 + Math.sin(p * Math.PI) * 0.15;

    const targetZ = 9 - p * 3.2;
    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      targetZ,
      4,
      delta
    );
    state.camera.lookAt(0, 0, 0);

    const pulse = 1 + Math.sin(p * Math.PI) * 0.12;
    ring.current.scale.setScalar(pulse);
    if (ringMat.current) {
      ringMat.current.emissiveIntensity = 0.3 + p * 0.9;
    }
  });

  return (
    <group ref={rig}>
      {/* Outer aperture ring — glass / transmission material for real refraction */}
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

      {/* Thin secondary ring for parallax depth */}
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 8, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      {/* Organic distorted core — only achievable via real-time shader uniforms */}
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

export { STAGE_COUNT };
