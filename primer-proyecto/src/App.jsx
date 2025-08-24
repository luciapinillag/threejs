import ThreeScene from './components/ThreeScene'
import './App.css'
//import Text from './components/Text'
//import Scena2 from './components/Scena2'


function App() {


  return (
    <>
      aprendieno three.js
      <div className="primera-scena">

        <ThreeScene />
      </div>



      <div className='segunda-scena'>
        <Scena2 />
      </div>

      <div className='texto-descripcion'>

        <Text />

      </div>



    </>
  )
}

export default App
