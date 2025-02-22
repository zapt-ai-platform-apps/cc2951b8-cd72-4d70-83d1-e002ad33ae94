import React, { useState } from 'react';
import { ShopRegistrationData } from './RegistrationShop.types';

function RegistrationShopForm(): JSX.Element {
  const [formData, setFormData] = useState<ShopRegistrationData>({
    shopName: '',
    email: '',
    phone: '',
    productCategories: '',
    shopLocation: '',
    businessLicense: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('Shop registration submitted:', formData);
      // API call to register shop owner would be here
    } catch (error) {
      console.error('Error during shop registration:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Shop Owner Registration</h2>
        <input
          type="text"
          name="shopName"
          placeholder="Shop Name"
          value={formData.shopName}
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
          name="productCategories"
          placeholder="Product Categories (comma separated)"
          value={formData.productCategories}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <textarea
          name="shopLocation"
          placeholder="Shop Location Address"
          value={formData.shopLocation}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <input
          type="text"
          name="businessLicense"
          placeholder="Business License Number"
          value={formData.businessLicense}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default RegistrationShopForm;