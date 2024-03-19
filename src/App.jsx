import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";

function App() {
  let nombre = "Emita";

  return (
    <div>
      <Home />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
