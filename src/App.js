import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Characters } from './components/Characters';
import { CharacterProvider } from './contexts/charactersContext';
import { Pagination } from './components/Pagination';
import { Buttons } from './components/Buttons';

function App() {
  return (
    <div className="App">
      <h2 className='alert alert-success text-center'>Rick and Morty</h2>
      
      <CharacterProvider>
        <Pagination />
        <Characters />
        <Buttons />
      </CharacterProvider>
    </div>
  );
}

export default App;
