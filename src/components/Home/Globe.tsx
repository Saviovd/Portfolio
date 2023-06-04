import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';


const Globe = () => {
   const { scene, animations } = useGLTF('assets/a_windy_day/scene.gltf') as GLTF;
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { actions } = useAnimations(animations, scene);
   // actions.walk.play();

   return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
};

useGLTF.preload('assets/a_windy_day/scene.gltf');

const GlobeComponent = () => {

   return (
      <Canvas>
         <OrbitControls autoRotate={true} enableZoom={false} />
         <ambientLight intensity={1} />
         <directionalLight intensity={0.5} position={[5, 10, 5]} />
         <spotLight intensity={0.8} position={[30, 30, 50]} angle={3} penumbra={1} />
         <Globe />
         <OrbitControls />
      </Canvas>
   );
};


export default GlobeComponent;
