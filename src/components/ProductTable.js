import React, { useState } from 'react';
import EditModal from './EditModal';
import CheckboxComp from './CheckboxComp';
import MyForm from './MyForm';
import HoverComponent from './HoverComponent';
import TooltipButton from './ToolTipButton';
import Counter from './Counter';
const ProductTable = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999.99' },
    { id: 2, name: 'Smartphone', price: '$499.99' },
    { id: 3, name: 'Tablet', price: '$299.99' }
  ]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const deleteRow = (productId) => {
    setProducts(products.filter(product => product.id !== productId));

    setProducts(prevProducts =>
      prevProducts.map((product, index) => ({ ...product, id: index + 1 }))
    );
  };
  const openEditModal = (product) => {
    setEditingProduct(product);
  };
  const handleEdit = (updatedProduct) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) {
      alert('Please fill out both fields.');
      return;
    }
    const newProductId = products.length ? products[products.length - 1].id + 1 : 1;
    const newProductObject = { id: newProductId, ...newProduct };
    setProducts([...products, newProductObject]);
    setNewProduct({ name: '', price: '' });
  };
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };
  return (
    <div className='top-section'>
      <table id="productTable">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => openEditModal(product)}>Edit</button>
                <button onClick={() => deleteRow(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleNewProductChange}
            required
          />
        </label>
        <br />
        <label>
          Product Price:
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleNewProductChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
      {editingProduct && (
        <EditModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleEdit}
        />
      )}
      <div style={{marginTop:'30px'}}>
       <CheckboxComp />
      </div>
      <div style={{marginTop:'30px'}}>
       <MyForm />
      </div>
      <div style={{marginTop:'30px'}}>
       <HoverComponent />
      </div>
      <div style={{marginTop:'60px'}}>
       <TooltipButton />
      </div>
      <div style={{marginTop:'30px'}}>
       <Counter />
      </div>
    </div>
  );
};
export default ProductTable;