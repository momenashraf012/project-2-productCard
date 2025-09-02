export const productValidation=(product:{
    title:string,
    description: string;
  imageURL: string;
  price: string;

})=>{

const errors:{title: string;
  description: string;
  imageURL: string;
  price: string;}={
    title:"",
    description:"",
    imageURL:"",
    price:"",
    };

    
    if(!product.title.trim()  || product.title.length < 10 || product.title.length > 80 )
    {
        errors.title="product title must be between 10 and 80 charactors "

    }
    if(!product.description.trim()  || product.description.length < 10 || product.description.length > 80 )
    {errors.description="product description must be between 10 and 80 charactors "

    }
    
    if (!product.imageURL.trim() || !/^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i.test(product.imageURL)) {
    errors.imageURL = "Product image must be a valid URL (jpg, jpeg, png, webp).";
  }

  if (!product.price.trim() || isNaN(Number(product.price)) || Number(product.price) <= 0) {
    errors.price = "Product price must be a valid positive number.";
  }



    return errors;
    


}