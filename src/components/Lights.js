export default function Lights() {
	return (
		<>
			<directionalLight
				castShadow
				color={"#ffffff"}
				position={[10, 20, 10]}
				intensity={3.5}
				shadow-mapSize={[512, 512]}
				shadow-camera-near={0.5}
				shadow-camera-far={100}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
			/>
			<directionalLight
				castShadow
				color={"#77ccff"}
				position={[-10, 20, 10]}
				intensity={0}
				shadow-mapSize={[512, 512]}
				shadow-camera-near={0.5}
				shadow-camera-far={100}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
			/>
			{/* <ambientLight intensity={0.5} /> */}
		</>
	);
}
