import React, { useState } from 'react';
import { CustomerRegistrationData } from './RegistrationCustomer.types';

function RegistrationCustomerForm(): JSX.Element {
  const [formData, setFormData] = useState<CustomerRegistrationData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    idNumber: '',
    biometricAuth: false,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('Customer registration submitted:', formData);
      // API call to register customer would be here
    } catch (error) {
      console.error('Error during customer registration:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Customer Registration</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <textarea
          name="address"
          placeholder="Apartment Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={formData.idNumber}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="biometricAuth"
            checked={formData.biometricAuth}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="biometricAuth">Enable Biometric Authorization</label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default RegistrationCustomerForm;