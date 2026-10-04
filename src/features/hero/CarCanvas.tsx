import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei";
import { AnimationMixer, MathUtils } from "three";

const TURN_DEGREES = 350;
const ANIMATION_SPEED = 1.5;

function Mercedes({ progress, isMobile }: { progress: number; isMobile: boolean }) {
  const { scene, animations } = useGLTF("/mercedes_e_class_w212_webp.glb");

  const doors = animations.find((clip) => clip.name === "model_open_all");

  const mixer = useMemo(() => new AnimationMixer(scene), [scene]);

  useEffect(() => {
    if (!doors) return;

    const action = mixer.clipAction(doors);
    action.play();

    return () => {
      action.stop();
      mixer.stopAllAction();
    };
  }, [doors, mixer]);

  // Scrub the opening portion of the animation directly from scroll position.
  useEffect(() => {
    if (!doors) return;

    const animationProgress = Math.min(1, progress * 3);

    mixer.setTime(animationProgress === 0 ? 0 : 2 + animationProgress * 1.8);
  }, [doors, mixer, progress]);

  return (
    <group
      scale={isMobile ? 1.9 : 2.0}
      rotation-y={MathUtils.degToRad(-Math.min(1, progress * ANIMATION_SPEED) * TURN_DEGREES)}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function CarCanvas({ progress }: { progress: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <Canvas
      camera={{
        position: isMobile ? [11.5, 3.2, 0] : [9, 3.2, 0],
        fov: isMobile ? 45 : 38,
        near: 0.1,
        far: 100,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      frameloop="demand"
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight position={[4, 8, 5]} intensity={3} />

      <directionalLight position={[-5, 5, -4]} intensity={2} />

      <Environment preset="city" environmentIntensity={0.8} />

      <Mercedes progress={progress} isMobile={isMobile} />

      <ContactShadows
        position={[0, -0.03, 0]}
        opacity={0.32}
        scale={7}
        blur={2.4}
        far={3}
        frames={1}
      />
    </Canvas>
  );
}
