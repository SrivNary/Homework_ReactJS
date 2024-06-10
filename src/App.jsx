import NavbarComponent from "./components/NavbarComponent";
import { FooterComponent } from "./components/FooterComponent";
import { ProductComponent } from "./components/ProductCard";
import MainComponent from "./components/MainComponent";

function App() {
  

  return (
    <>
      <NavbarComponent/>
      <div className="my-6">
          <MainComponent/>
      </div>
      
      <FooterComponent/>
    </>
  )
}

export default App
