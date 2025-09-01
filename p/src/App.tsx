import { useState, type FormEvent } from "react";
import "./App.css";
import ProductCard from "./component/ProductCard";
import { formInputsList, productList } from "./data";
import Model from "./Model";

import Input from "./component/Ui/Input";
import Button from "./component/Ui/Button";
import type { IProduct } from "./interfaces/index";

function App() {
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // state
  const [Product, setProduct] = useState<IProduct>(defaultProductObject);

  const [isOpen, setIsOpen] = useState(false);

  // handler
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const oncancel = () => {
    setProduct(defaultProductObject);
    closeModal();
  };

  const onchangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    // console.log(value);
    // console.log(name);
    // console.log([name], value);
    // console.log(Product);

    setProduct({
      ...Product,
      [name]: value,
    });
  };

  const onsubmithander = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(Product);
  };

  // rerender
  const renderptroductList = productList.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    );
  });
  const renderformInputsList = formInputsList.map((input) => {
    return (
      <div className="flex flex-col " key={input.id}>
        <label htmlFor="">{input.label}</label>
        <Input
          name={input.name}
          value={Product[input.name]}
          onChange={onchangehandler}
        />
      </div>
    );
  });

  return (
    <main className="container mx-auto">
      <Button
        onClick={() => {
          openModal();
        }}
        className="w-full bg-red-600 p-2 my-3 rounded-sm"
      >
        {"ADD product "}
      </Button>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-3 p-3 rounded-md  container ">
        {renderptroductList}
      </div>

      <Model closeModal={closeModal} isOpen={isOpen} title="Please Add product">
        <form onSubmit={onsubmithander}>
          {renderformInputsList}
          <div className="flex my-2  gap-3">
            <Button
              className="w-full bg-red-600 p-2 my-3 rounded-md"
              type="submit"
            >
              {"ADD "}
            </Button>
            <Button
              className="w-full bg-green-600 p-2 my-3 rounded-md"
              onClick={oncancel}
            >
              {"Cancel "}
            </Button>
          </div>
        </form>
      </Model>
    </main>
  );
}

export default App;
