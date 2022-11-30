import './App.css';
import { DogFacts } from './components/DogFacts';
import Heading from './components/ui/Heading';

function App() {
  return (
    <div className="App">
      <Heading />
      <div>
        <DogFacts />
      </div>
    </div>
  );
}

export default App;
