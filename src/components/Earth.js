import { useTexture } from "@react-three/drei";

const Earth = (props) => {
	const earthTextureMap = useTexture("./assets/earth/earthmap.jpg");
	const earthTextureBump = useTexture("./assets/earth/earthbump.jpg");
	const earthTextureSpec = useTexture("./assets/earth/earthspec.jpg");

	return (
		<>
			<mesh receiveShadow scale={1.8}>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhysicalMaterial
					map={earthTextureMap}
					roughnessMap={earthTextureSpec}
					bumpMap={earthTextureBump}
					bumpScale={0.05}
					sheen={0.35}
					sheenRoughness={0.75}
					sheenColor={"#ff8a00"}
					clearcoat={0.5}
					envMapIntensity={0.4}
				/>
			</mesh>
		</>
	);
};

export default Earth;
