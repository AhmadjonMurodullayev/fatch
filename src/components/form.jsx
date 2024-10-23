import React, { useState } from 'react';

export default function Form({ getData }) {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const edite = (e) => {
    e.preventDefault(); 
    fetch(`http://localhost:3600/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData({ title: '', description: '' });
      getData(); 
    });
  };

  return (
    <form onSubmit={edite} className='my-6 mx-auto w-1/2'>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
        <input
          className='border-2 border-black w-full px-3 py-2'
          name='title'
          type='text'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
        <input
          className='border-2 border-black w-full px-3 py-2'
          name='description'
          type='text'
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 border-2 border-black hover:bg-blue-600'
      >
        Add
      </button>
    </form>
  );
}
