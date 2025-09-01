import Image from "./Image";
import Button from "./Ui/Button";
import { Slicer } from "../SlicerDescrption/function";

interface Iprops {
  product: {
    title: string;
    price: string;
    description: string;
    imageURL: string;
  };
}

const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, price } = product;
  return (
    <>
      <div className="border border-black p-2 rounded-md flex flex-col max-w-sm mx-auto md:max-w-lg  md:mx-0  ">
        <Image src={imageURL} alt={product.title} />

        <h3>{title}</h3>
        {/* <p>{description}</p> */}
        <p>{Slicer(description)}</p>

        <div className="flex gap-3 my-2">
          <span className="w-5 h-5 bg-red-600 rounded-full"></span>
          <span className="w-5 h-5 bg-red-600 rounded-full"></span>
          <span className="w-5 h-5 bg-red-600 rounded-full"></span>
        </div>

        <div className="flex items-center justify-between">
          <span>{price}</span>

          <Image
            className="w-10 h-10 rounded-full object-cover"
            src={imageURL}
            alt={product.title}
          />
        </div>
        <div className="flex my-2  gap-3">
          <Button
            onClick={() => {
              console.log("dmdmdmmd");
            }}
            className="w-full bg-red-600"
          >
            {"Edit"}
          </Button>
          <Button className="w-full bg-green-500">{"Cancel"}</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
