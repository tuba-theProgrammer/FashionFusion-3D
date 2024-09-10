import { useSnapshot } from "valtio";
import state from "@/_config/store";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

// Define the type for the GLTF result
type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
};

// Define the type for your state
interface State {
  color: THREE.Color | string | number;
  logoDecal: string;
  fullDecal: string;
  isFullTexture: boolean;
  isLogoTexture: boolean;
}

const Shirt: React.FC<GroupProps> = () => {
  const snap = useSnapshot<State>(state); // Type the snapshot according to your state structure
  const { nodes, materials } = useGLTF("/assets/3dModel/shirt_baked.glb") as GLTFResult;

  // State to track texture loading
  const [texturesLoaded, setTexturesLoaded] = useState({
    logoTexture: undefined as THREE.Texture | undefined,
    fullTexture: undefined as THREE.Texture | undefined,
  });

  // Load textures and manage their state
  useEffect(() => {
    const loadTextures = async () => {
      try {
        const logo = await useTexture(snap.logoDecal || "");
        const full = await useTexture(snap.fullDecal || "");
        setTexturesLoaded({ logoTexture: logo, fullTexture: full });
      } catch (error) {
        console.error("Error loading textures:", error);
      }
    };

    loadTextures();
  }, [snap.logoDecal, snap.fullDecal]);

  useFrame((_, delta) => {
    const color = typeof snap.color === "string" ? new THREE.Color(snap.color) : snap.color;
    if (materials.lambert1) {
      materials.lambert1.color.lerp(color as THREE.Color, delta * 0.25);
    }
  });

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && texturesLoaded.fullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={texturesLoaded.fullTexture}
          />
        )}

        {snap.isLogoTexture && texturesLoaded.logoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={texturesLoaded.logoTexture}
            // Access anisotropy safely and use a fallback
            map-anisotropy={texturesLoaded.logoTexture?.anisotropy ?? 1}
            depthTest={false}
            
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
