import ProductProvider, { ProductContext } from "./providers/auth";
import MainCard from "./components/MainComponent";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <MainCard />
      </div>
    </ProductProvider>
  );
}

export default App;
