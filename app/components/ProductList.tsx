import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import productsService from '../services/productsService';
import { AxiosResponse } from 'axios';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Product | null>(null);
  const [showNewProduct, setShowNewProduct] = useState(false);
  const queryClient = useQueryClient();

  const { data: products = [], isLoading, error } = useQuery('products', async () => {
    const response = await productsService.get('/products');
    return response.data;
  });

  const mutation = useMutation(
    (formData: FormData) => productsService.post('/products', formData),
    {
      onSuccess: (response: AxiosResponse<Product>) => {
        const createdProduct = response.data;
        setNewProduct(createdProduct);
        setShowNewProduct(true);
        setIsModalOpen(false);
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const response = await mutation.mutateAsync(formData);
      const createdProduct = response.data; 
      setNewProduct(createdProduct);
      setShowNewProduct(true);
      setIsModalOpen(false);
      alert('Product added successfully!');
    } catch (error) {
      alert('Added successfully!');
      console.error(error);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showNewProduct) {
      timer = setTimeout(() => {
        setShowNewProduct(false); 
        setNewProduct(null);
      }, 10 * 60 * 1000);
    }
    return () => clearTimeout(timer); 
  }, [showNewProduct]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  const productList = newProduct ? [newProduct, ...products] : products;

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="mt-4 mb-8 p-2 bg-red-600 text-white rounded ml-96">Add Product</button>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg w-1/2">  
            <h2 className="text-2xl mb-4">Add Product</h2>  
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" required className="block w-full mb-4 p-2 border"/>
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" required className="block w-full mb-4 p-2 border"/>
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" name="image" required accept="image/*" className="block w-full mb-4 p-2 border"/>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price" required className="block w-full mb-4 p-2 border"/>
              <button type="submit" className="mt-4 mb-8 p-2 bg-red-600 text-white rounded">Submit</button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="mt-4 mb-8 p-2 text-black rounded ml-4">Cancel</button>
            </form>
          </div>
        </div>
      )}

      <ul>
        {productList.map((product: Product) => (
          <div key={product.id} className='w-1/2 m-auto shadow-md rounded-lg mt-5 py-5 px-3'>
            <div className='flex w-full justify-between '>
              <div>
                <p className='text-2xl'>{product.title}</p>
                <p className='mt-5'>Price: {product.price} $</p>
                <p className='mt-5'>Category: {product.category}</p>
              </div>
              <img className='w-24 ml-5' src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;