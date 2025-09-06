import { useState, type FormEvent } from "react";
import "./App.css";
import ProductCard from "./component/ProductCard";
import { categories, colors, formInputsList, productList } from "./data";
import Model from "./Model";
import Input from "./component/Ui/Input";
import Button from "./component/Ui/Button";
import type { IProduct } from "./interfaces/index";
import { productValidation } from "./Valitation";
import ErrorMassage from "./component/ErrorMassage";
import CircleColor from "./component/CircleColor";
import { v4 as uuid } from "uuid";
import Slected from "./component/Ui/Slected";

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
  const [products, setproducts] = useState<IProduct[]>(productList);
  console.log(products);
  const [Product, setProduct] = useState<IProduct>(defaultProductObject);
  const [error, serError] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [producttoEdit, setproducttoEdit] =
    useState<IProduct>(defaultProductObject);
    console.log(producttoEdit);

  const [tempcolor, setTempcolor] = useState<string[]>([]);
  // console.log(tempcolor);
  const [selected, setSelected] = useState(categories[0]);

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

    serError({
      ...error,
      [name]: "",
    });
  };

  const onsubmithander = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, description, imageURL, price } = Product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrormsag =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    console.log(hasErrormsag);
    if (!hasErrormsag) {
      serError(errors);
      return;
    }
    setproducts((prev) => [
      ...prev,
      { ...Product, id: uuid(), colors: tempcolor, category: selected },
    ]);
    setProduct(defaultProductObject);
    setTempcolor([]);
    closeModal();

    console.log("send this product ");
  };

  // rerender
  const renderptroductList = products.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard product={product} setproducttoEdit={setproducttoEdit} />
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
        <ErrorMassage msg={error[input.name]} />
      </div>
    );
  });

  const renderCirclecolor = colors.map((color) => {
    return (
      <CircleColor
        color={color}
        key={color}
        onClick={() => {
          if (tempcolor.includes(color)) {
            setTempcolor((prev) => prev.filter((item) => item !== color));
            return;
          }
          setTempcolor((prev) => [...prev, color]);
        }}
      />
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
          <div className="flex gap-3 my-2 flex-wrap">
            {tempcolor.map((color) => {
              return (
                <span
                  key={color}
                  className=" p-1 m-1 rounded-lg text-white "
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              );
            })}
          </div>
          <Slected selected={selected} setSelected={setSelected} />

          <div className="flex gap-3 my-2">{renderCirclecolor}</div>

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
