import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Airplane = ({ yoffset, radius, randomAxis, randomAxisRot }) => {
	let rotateY = 0;
	const airplaneTrailTexture = useTexture("./assets/airplane/mask.png");
	const { nodes, materials } = useGLTF("./assets/airplane/airplane.glb");
	const planeRef = useRef();

	useFrame((state, delta) => {
		if (!planeRef.current) {
			return;
		}
		planeRef.current.position.set(0, 0, 0);
		planeRef.current.rotation.set(0, 0, 0);
		rotateY += delta * 0.25;
		//rotate on axis rotates wrt to scene instead of wrt obj that's how we are able to get the effect of movement here
		planeRef.current.rotateOnAxis(randomAxis, randomAxisRot); // random axis
		planeRef.current.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateY); // y-axis rotation
		planeRef.current.rotateOnAxis(new THREE.Vector3(0, 0, 1), radius); // z-axis radius
		planeRef.current.translateY(yoffset); //translate doesn't change origin of object ie origin is still at (0,0,0)
		planeRef.current.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI * 0.5); // model is bent 90deg by default
	});

	return (
		<>
			<group ref={planeRef}>
				<group scale={0.0002}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube_2_2_Body_0_1.geometry}
						material={materials.Body}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube_2_2_Body_0_2.geometry}
						material={materials.material}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube_2_2_Body_0_3.geometry}
						material={materials.Glass}
					/>
				</group>
				<group scale={0.1}>
					<mesh rotation-x={Math.PI} position={[0, -1, 0]}>
						<planeGeometry args={[1, 2]} />
						<meshPhysicalMaterial
							alphaMap={airplaneTrailTexture}
							roughness={0.4}
							metalness={0}
							transmission={1}
							transparent={true}
							opacity={1}
							envMapIntensity={3}
						/>
					</mesh>
				</group>
			</group>
		</>
	);
};

export default Airplane;
