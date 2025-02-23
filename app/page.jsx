import NavBar from "./components/navbar";
import MenuBar from "./components/menubar";
import ProductGridPages from "./components/ProductGridPages";

export default function Home() {
  return (
    <div>
      <NavBar /> {/* Navbar Component */}
      
      
      <main>
        <ProductGridPages />
      </main>
    </div>
  );
}
