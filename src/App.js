import { Environment, OrbitControls } from "@react-three/drei";
import Airplane from "./components/Airplane";
import Earth from "./components/Earth";
import Lights from "./components/Lights";
import * as THREE from "three";
import Rings from "./components/Rings";

function App() {
	return (
		<>
			<OrbitControls makeDefault />
			<Lights />
			<Environment preset="sunset" />
			<Earth />
			<Airplane
				yoffset={1.8 + Math.random() * 0.4}
				radius={Math.random() * Math.PI * 0.45 + Math.PI * 0.05}
				randomAxis={new THREE.Vector3(
					Math.random() * 2 - 1,
					Math.random() * 2 - 1,
					Math.random() * 2 - 1
				).normalize()}
				randomAxisRot={Math.random() * Math.PI * 2}
			/>
			<Airplane
				yoffset={1.8 + Math.random() * 0.4}
				radius={Math.random() * Math.PI * 0.45 + Math.PI * 0.05}
				randomAxis={new THREE.Vector3(
					Math.random() * 2 - 1,
					Math.random() * 2 - 1,
					Math.random() * 2 - 1
				).normalize()}
				randomAxisRot={Math.random() * Math.PI * 2}
			/>
			<Airplane
				yoffset={1.8 + Math.random() * 0.4}
				radius={Math.random() * Math.PI * 0.45 + Math.PI * 0.05}
				randomAxis={new THREE.Vector3(
					Math.random() * 2 - 1,
					Math.random() * 2 - 1,
					Math.random() * 2 - 1
				).normalize()}
				randomAxisRot={Math.random() * Math.PI * 2}
			/>
			<Rings />
		</>
	);
}

export default App;
