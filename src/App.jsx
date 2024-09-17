import { useState } from 'react';
import { BeenAddItem } from './components/BeenAddItem.jsx'
import { BeenList } from './components/BeenList.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      {currentPage === 'add' && <BeenAddItem goBack={() => handlePageChange('home')} />}
      {currentPage === 'list' && <BeenList goBack={() => handlePageChange('home')} />}
      {currentPage === 'home' && (
        <>
          <h1>Been To list</h1>
          <button onClick={() => handlePageChange('add')} className="btn-add-places">Agregar Lugares</button>
          <button onClick={() => handlePageChange('list')} className="btn-show-places">Mostrar Lista</button>
          <footer> By Mikel Cruz</footer>
        </>
      )}
    </main>
  );
}

export default App;
