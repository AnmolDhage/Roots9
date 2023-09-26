import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cake3D.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={10}>
          <mesh geometry={nodes.Object_5.geometry} material={materials['tabakKare_object.015_material']} position={[-0.001, -0.006, -0.001]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['24_object.017_material']} position={[-0.001, -0.006, -0.001]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['KaseKucuk_Cylinder.007_material']} position={[-0.001, -0.006, -0.001]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cake3D.gltf')
