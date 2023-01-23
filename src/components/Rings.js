import * as THREE from "three";

const Rings = () => {
	return (
		<group>
			<mesh>
				<ringGeometry args={[2, 2.1, 30, 1]} />
				<meshPhysicalMaterial
					color={new THREE.Color("#FFCB8E")
						.convertSRGBToLinear()
						.multiplyScalar(200)}
					roughness={0.25}
					envMapIntensity={1.8}
					side={THREE.DoubleSide}
					transparent={true}
					opacity={0.35}
				/>
			</mesh>
			<mesh>
				<ringGeometry args={[2.25, 2.35, 30, 1]} />
				<meshPhysicalMaterial
					color={new THREE.Color("#FFCB8E").convertSRGBToLinear()}
					side={THREE.DoubleSide}
					transparent={true}
					opacity={0.5}
				/>
			</mesh>
			<mesh>
				<ringGeometry args={[2.45, 2.5, 30, 1]} />
				<meshPhysicalMaterial
					color={new THREE.Color("#FFCB8E")
						.convertSRGBToLinear()
						.multiplyScalar(50)}
					side={THREE.DoubleSide}
					transparent={true}
					opacity={0.5}
				/>
			</mesh>
		</group>
	);
};

export default Rings;
