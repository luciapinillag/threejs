import React from 'react'
// importar three.js al componente
import * as THREE from "three";
import './text.css'

// importar las dependencias 
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";


function Text() {
  return (
    <div id='info'>
        <h1>hola hola hola desde three.js</h1>

    </div>
  )
}

export default Text