import CardPage from "./components/CardPage";
import InputPage from "./components/InputPage";
import ButtonPage from "./components/ButtonPage";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlasmicCanvasHost } from "@plasmicapp/react-web/lib/host";
import { PlasmicRootProvider } from "@plasmicapp/react-web";

import { registerButtonComponent } from "./patterns/Button/Button.editor";
import { registerInputComponent } from "./patterns/Input/Input.editor";
import { registerCardComponent } from "./patterns/Card/Card.editor";

registerButtonComponent();
registerInputComponent();
registerCardComponent();

function App() {
  return (
    <PlasmicRootProvider>
      <Router>
        <Routes>
          <Route path="/plasmic-host" element={<PlasmicCanvasHost />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/button-page" element={<ButtonPage />}></Route>
          <Route path="/input-page" element={<InputPage />}></Route>
          <Route path="/card-page" element={<CardPage />}></Route>
        </Routes>
      </Router>
    </PlasmicRootProvider>
  );
}

export default App;
