import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    image: null,
    roles: {
      admin: false,
      user: true, // User role is checked by default
    },
    isActive: false,
    isBlocked: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (id === 'admin' || id === 'user') {
        setFormData(prevData => ({
          ...prevData,
          roles: {
            ...prevData.roles,
            [id]: checked,
          },
        }));
      } else {
        setFormData(prevData => ({
          ...prevData,
          [id]: checked,
        }));
      }
    } else if (type === 'file') {
        if (e.target.files && e.target.files.length > 0) {
            setFormData(prevData => ({
                ...prevData,
                image: e.target.files[0],
            }));
        }
    }
    else {
      setFormData(prevData => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    // Basic client-side validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return; // Stop submission if there are errors
    }

    // Simulate sending data to a server (replace with your actual API call)
    try {
      // Convert image to base64 string
      let base64Image = '';
      if (formData.image) {
        const reader = new FileReader();
        const promise = new Promise<string>((resolve, reject) => {
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
        });
        reader.readAsDataURL(formData.image);
        base64Image = await promise;
      }
      const dataToSend = {
        ...formData,
        image: base64Image, // Send the base64 string
        roles: Object.entries(formData.roles)
            .filter(([, value]) => value)
            .map(([key]) => key), // Convert roles object to array
      };

      console.log('Form Data:', dataToSend);  // Log the data
      // Simulate an asynchronous operation (e.g., sending data to a server)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset the form on successful submission
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        image: null,
        roles: {
          admin: false,
          user: true,
        },
        isActive: false,
        isBlocked: false,
      });
      setErrors({}); // Clear errors
      alert('Registration successful!'); // Basic feedback

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            required
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image:
          </label>
          <input
            type="file"
            id="image"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
          />
           {formData.image && (
            <div className="mt-2">
              <p className="text-gray-700 text-sm">Selected File: {formData.image.name}</p>
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Roles:</label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="admin"
              value="admin"
              checked={formData.roles.admin}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="admin" className="text-gray-700 text-sm">
              Admin
            </label>
            <input
              type="checkbox"
              id="user"
              value="user"
              checked={formData.roles.user}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="user" className="text-gray-700 text-sm">
              User
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="isActive" className="block text-gray-700 text-sm font-bold">
            Is Active:
          </label>
          <input
            type="checkbox"
            id="isActive"
            checked={formData.isActive}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-green-500 focus:ring-green-500 border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="isBlocked" className="block text-gray-700 text-sm font-bold">
            Is Blocked:
          </label>
          <input
            type="checkbox"
            id="isBlocked"
            checked={formData.isBlocked}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-red-500 focus:ring-red-500 border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
