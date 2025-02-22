import React from 'react';

interface RegistrationFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    idNumber: string;
    driversLicense: string;
    vehicleDetails: string;
    baseStation: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

function RegistrationForm({
  formData,
  handleChange,
  handleSubmit,
  loading,
}: RegistrationFormProps): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Rider Registration</h2>
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
        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={formData.idNumber}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <input
          type="text"
          name="driversLicense"
          placeholder="Driver's License Number"
          value={formData.driversLicense}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <input
          type="text"
          name="vehicleDetails"
          placeholder="Vehicle Details"
          value={formData.vehicleDetails}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <input
          type="text"
          name="baseStation"
          placeholder="Base Station Location"
          value={formData.baseStation}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded box-border"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;