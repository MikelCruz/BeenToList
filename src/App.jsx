import { useEffect, useState } from 'react';
import { BeenItem } from './components/BeenItem.jsx'
import './App.css'

function App() {

  const [beenAddPage, setBeenAddPage] = useState(false);

  useEffect(() => {
    
  },[])

  return (
    <main>
      {beenAddPage && <BeenItem />}
      
      {!beenAddPage && 
      <>
        <h1>Been To list</h1>

        <button onClick={()=> ( setBeenAddPage(true))} className="btn-add-places"> Agregar Lugares </button>
        
        <button className="btn-show-places"> Mostrar Lista</button>

        <footer> By Mikel Cruz</footer>
      </>
      }
    </main>
  )
}

export default App
