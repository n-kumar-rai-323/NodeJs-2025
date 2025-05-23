import React from "react";

const Register = () => {
  return (
    <>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Roles:
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="admin"
              value="admin"
              className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="admin" className="text-gray-700 text-sm">
              Admin
            </label>
            <input
              type="checkbox"
              id="user"
              value="user"
              className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              defaultChecked
            />
            <label htmlFor="user" className="text-gray-700 text-sm">
              User
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="isActive"
            className="block text-gray-700 text-sm font-bold"
          >
            Is Active:
          </label>
          <input
            type="checkbox"
            id="isActive"
            className="form-checkbox h-5 w-5 text-green-500 focus:ring-green-500 border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="isBlocked"
            className="block text-gray-700 text-sm font-bold"
          >
            Is Blocked:
          </label>
          <input
            type="checkbox"
            id="isBlocked"
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
    </>
  );
};

export default Register;
