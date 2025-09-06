import Image from "./Image";
import Button from "./Ui/Button";
import { Slicer } from "../SlicerDescrption/function";
import type { IProduct } from "../interfaces";
import CircleColor from "./CircleColor";

interface Iprops {
  product: IProduct;
  setproducttoEdit:(product:IProduct)=> void
  openModalToEdit:()=>void

}

const ProductCard = ({ product,setproducttoEdit,openModalToEdit }: Iprops) => {
  const { title, description, imageURL, price, colors,category } = product;
  //render

  const renderCirclecolor = colors.map((color) => {
    return <CircleColor color={color} key={color} />;
  });

  //handler 
  const onEditproduct=()=>{
    setproducttoEdit(product);
    openModalToEdit();
   
   

  }





  return (
    <>
      <div className="border border-black p-2 rounded-md flex flex-col max-w-sm mx-auto md:max-w-lg  md:mx-0  ">
        <Image src={imageURL} alt={product.title} />

        <h3>{title}</h3>
        {/* <p>{description}</p> */}
        <p>{Slicer(description)}</p>

        <div className="flex gap-2 my-2">{renderCirclecolor}</div>

        <div className="flex items-center justify-between">
          <span>{price}</span>

          <Image
            className="w-10 h-10 rounded-full object-cover"
            src={category.imageURL}
            alt={product.title}
          />
        </div>
        <div className="flex my-2  gap-3">
          <Button
            onClick={() => {
         onEditproduct()
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
