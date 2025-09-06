


export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput{

    id: string,
    name:IproductName,
    label: string,
    type: string,

}
export type IproductName="title"|"description" |"imageURL"|"price"

export interface ICategory{
  id?:string,
  name:string,
  imageURL:string
}