import React, { useState } from 'react';
const EditModal = ({ product, onClose, onSave }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product, name, price });
  };
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Product Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Product Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const modalContentStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '5px',
  width: '300px',
  position: 'relative'
};
export default EditModal;