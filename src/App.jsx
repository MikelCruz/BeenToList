import { useState } from 'react';
import { BeenAddItem } from './components/BeenAddItem.jsx'
import { BeenList} from './components/BeenList.jsx'
import './App.css'

function App() {

  const [beenAddPage,   setBeenAddPage]   = useState(false);
  const [beenListPage,  setBeenListPage]  = useState(false);


  return (
    <main>
      {beenAddPage  && <BeenAddItem  goBack={() => setBeenAddPage(false)} />}

      {beenListPage && <BeenList  goBack={() => setBeenListPage(false)} />}
      
      {!beenAddPage && !beenListPage && 
      <>
        <h1>Been To list</h1>

        <button onClick={()=> ( setBeenAddPage(true))} className="btn-add-places"> Agregar Lugares </button>
        
        <button onClick={()=> ( setBeenListPage(true))} className="btn-show-places"> Mostrar Lista</button>

        <footer> By Mikel Cruz</footer>
      </>
      }
    </main>
  )
}

export default App
