import NavbarMenu from './components/NavbarMenu';
import Introduction from "./components/Introduction";
import Services from './components/Services';
import DynamicForm from './components/DynamicForm/DynamicForm';

function App() {
  return (
    <div>
      <NavbarMenu />
      <Introduction />
      <Services />
      <DynamicForm />

    </div>
  );
}

export default App;
