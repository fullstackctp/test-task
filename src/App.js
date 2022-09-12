import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens';
import { StyleProvider } from './Context/styleContext';

function App() {
  return (
    <div>
      <StyleProvider>
        <HomeScreen />
      </StyleProvider>
    </div>
  );
}

export default App;
