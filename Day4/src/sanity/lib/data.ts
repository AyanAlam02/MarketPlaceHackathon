import { client } from "./client"

export interface IProduct {
  _id : string;
    productName: string | null; // Based on your data, it's sometimes null
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    imageUrl: string;
    description: string;
  }
  
 
      
    
    export  const getAllproduct = async () =>{
try


{
const queryAllproduct = `*[_type == "product"]{
_id,
    productName,
    category ,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description
  }`


        const product:IProduct[] = await client.fetch(queryAllproduct)

        return product;
}
catch(error)
{console.log(error)}

      }
      
      

// Products by name 
       
    export  const getproductbyname = async (id:string) =>{

        
        try
        
        
        {
        const queryproduct = `*[_type == "product" && _id == $id][0]{
        _id,
            productName,
            category ,
            price,
            inventory,
            colors,
            status,
            "imageUrl": image.asset->url,
            description
          }`
        
        
                const productO:IProduct = await client.fetch(queryproduct , {id})
        
                return productO ? productO : null
        }
        catch(error)
        {console.log(error)}
        
              }
              
              