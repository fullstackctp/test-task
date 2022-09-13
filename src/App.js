import "./App.css";
import HomeScreen from "./screens";
import { StyleProvider } from "./Context/styleContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <StyleProvider>
          <HomeScreen />
        </StyleProvider>
      </DndProvider>
    </div>
  );
}
export default App;
