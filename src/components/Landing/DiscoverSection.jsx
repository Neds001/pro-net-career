import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows} from '@react-three/drei';
import Earth from '../../../public/Earth';
import '../../components/Landing/DiscoverSection.css';
import { Link } from 'react-router-dom';


function DiscoverSection() {
    return (
        <>
            <section className='discoverSection'>
                <div className='discoverContainer'>
                    <h2 className='discover'>Discover Careers</h2>
                    <p>Explore a range of tools for networking and career development</p>
                    <Link to='/explore'><button className='btn'>Explore</button></Link>
                </div>
                <div className='threeContainer'>
                    {/* Display 3D earch from @react-three/drei library */}
                    <Canvas>
                        <ambientLight intensity={1}/>
                        <OrbitControls enableZoom={false}/>
                        <Environment preset='sunset'/>
                        <ContactShadows position= {[0, -3, 0]} opacity={.5} scale={20} blur={2} far={20} resolution={256} color="#000000" />
                        <Suspense fallback={null}>
                            <Earth className='earth'/>
                        </Suspense>
                    </Canvas>
                </div>
            </section>
        </>
    )
}

export default DiscoverSection