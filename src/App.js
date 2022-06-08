import { Button } from 'react-bootstrap';
import NavbarMenu from './components/NavbarMenu';
import Introduction from "./components/Introduction";
import Services from './components/Services';
function App() {
  return (
    <div>
      <NavbarMenu />
      <Introduction />
      <Services />

    </div>
  );
}

export default App;
