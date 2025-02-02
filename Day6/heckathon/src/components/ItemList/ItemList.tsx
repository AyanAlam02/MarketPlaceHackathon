
import { getAllproduct, IProduct } from "@/sanity/lib/data";
import Link from "next/link";

export default async function ItemList() {
const Products:IProduct[] =  await getAllproduct() || []
console.log(Products) 
return(


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">

{Products.map((product) => (
   <Link
   href={`/Detail/${product._id}`}
   key={product._id}
   className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center"
 >

  <img src={product.imageUrl} alt=""   className="w-full h-40 object-cover rounded-lg"/>
  <div className="mt-4 text-lg font-semibold">{product.productName}</div>
      <h1 className="text-sm text-gray-600">{product.category}</h1>
      <h1 className="text-sm text-gray-500">
        Colors: {product.colors.join(", ")}
      </h1>
      <h1 className="text-sm mt-2 text-gray-700">{product.description}</h1>
      <h1 className="font-bold mt-2">In Stock: {product.inventory}</h1>
      <h1 className="text-lg text-green-600 font-bold">₹{product.price}</h1>
      <h1 className="text-sm text-orange-500 mt-1">{product.status}</h1>
    </Link>
))}




    </div>
)






}