import "./App.css";
import ProductCard from "./component/ProductCard";
import { productList } from "./data";

function App() {
  // rerender
  const renderptroductList = productList.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    );
  });

  return (
    <main className="container mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-3 p-3 rounded-md  container ">
        {renderptroductList}
      </div>
    </main>
  );
}

export default App;
