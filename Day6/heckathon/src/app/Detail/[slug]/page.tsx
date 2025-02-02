import { getproductbyname } from '@/sanity/lib/data';

export default async function Detailpage({ params }: { params: { slug: string } }) {
  const { slug } =  params;
  const product= await getproductbyname(slug);

  // If product not found, show a message
  if (!product) {
    return (
      <div>
        <p>No product found</p>
      </div>
    );
  }

  return (
    <div>
    <h1>Product Detail</h1>
    <div>
  
  
  <img 
    src={product?.imageUrl} 
    alt={product?.productName || "Product image"}  
    className="w-[500px] h-80 object-cover rounded-lg mb-4" 
  />
  
  <p><strong>Name:</strong> {product?.productName}</p>
  <p><strong>Category:</strong> {product?.category}</p>
  
  <p><strong>Description:</strong> {product?.description}</p>
  <p><strong>Inventory:</strong> {product?.inventory}</p>
  <p><strong>Price:</strong> ₹{product?.price}</p>
  <p><strong>Status:</strong> {product?.status}</p>
</div>

  </div>
  
  );
}
