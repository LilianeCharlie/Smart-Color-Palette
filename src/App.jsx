import './styles/App.css';  
import ColorPicker from './components/ColorPicker';
import ColorDisplay from './components/ColorDisplay';
import ContrastBox from './components/ContrastBox';
import ThemeToggle from './components/ThemeToggle';
import CopyButton from './components/CopyButton';

function App() {
  return (
    <div className='App'>
      <h1>Smart Color Palette</h1>
      <ColorPicker />
      <ColorDisplay />
      <ContrastBox />
      <ThemeToggle />
      <CopyButton />
    </div>
  );
}

export default App;