import Footer from "./components/layout/footer/Footer.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  let nombre = "Viu";

  return (
    <div>
      <Navbar />
      <ItemListContainer
        bienvenida={"Bienvenida al ecommerce de Viu Bikinis"}
      />

      <Footer />
    </div>
  );
}

export default App;
