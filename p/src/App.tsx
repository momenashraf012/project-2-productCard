import { useState, type FormEvent } from "react";
import "./App.css";
import ProductCard from "./component/ProductCard";
import { categories, colors, formInputsList, productList } from "./data";
import Model from "./Model";
import Input from "./component/Ui/Input";
import Button from "./component/Ui/Button";
import type { IProduct, IproductName } from "./interfaces/index";
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
  const [productToEditIndex,setProductToEditIndex]=useState < number> (0);
  console.log(productToEditIndex);

  const [tempcolor, setTempcolor] = useState<string[]>([]);
  // console.log(tempcolor);
  const [selected, setSelected] = useState(categories[0]);

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenToEdit, setIsOpenToEdit] = useState(false);

  // handler
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModalToEdit() {
    setIsOpenToEdit(false);
  }
  function openModalToEdit() {
    setIsOpenToEdit(true);
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

  const onchangeEdithandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    // console.log(value);
    // console.log(name);
    // console.log([name], value);
    // console.log(Product);

    setproducttoEdit({
      ...producttoEdit,
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

  const onsubmitEdithander = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, description, imageURL, price } = producttoEdit;

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
    const updatedproducts=[...products];
    updatedproducts[productToEditIndex]=producttoEdit;
    setproducts(updatedproducts);

 
    setproducttoEdit(defaultProductObject);
    setTempcolor([]);
    closeModalToEdit();

    console.log("send this product ");
  };

  // rerender
  const renderptroductList = products.map((product,index) => {
    return (
      <div key={product.id}>
        {index}
        <ProductCard
          product={product}
          setproducttoEdit={setproducttoEdit}
          openModalToEdit={openModalToEdit}
          index={index}
          setProductToEditIndex={setProductToEditIndex}
        />
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
  const renderprojectEditwithErrormg = (
    id: string,
    Label: string,
    name: IproductName
  ) => {
    return (
      <div className="flex flex-col ">
        <label htmlFor={id}>{Label} </label>
        <Input
          id={id}
          name={name}
          value={producttoEdit[name]}
          onChange={onchangeEdithandler}
        />
        <ErrorMassage msg={error[name]} />
      </div>
    );
  };

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

      {/* // Add product  */}
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

      {/* // Edit product  */}
      <Model
        closeModal={closeModalToEdit}
        isOpen={isOpenToEdit}
        title="Edit product"
      >
        <form onSubmit={onsubmitEdithander}>
          {renderprojectEditwithErrormg("title", "title", "title")}
          {renderprojectEditwithErrormg(
            "description",
            "Product Description",
            "description"
          )}
          {renderprojectEditwithErrormg(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderprojectEditwithErrormg("price", "Product Price", "price")}

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
