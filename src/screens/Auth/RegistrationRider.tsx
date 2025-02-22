import React, { useState } from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { registerRider } from '../../../api/registrationApi';

export interface RiderRegistrationData {
  name: string;
  email: string;
  phone: string;
  idNumber: string;
  driversLicense: string;
  vehicleDetails: string;
  baseStation: string;
}

function RegistrationRider(): JSX.Element {
  const [formData, setFormData] = useState<RiderRegistrationData>({
    name: '',
    email: '',
    phone: '',
    idNumber: '',
    driversLicense: '',
    vehicleDetails: '',
    baseStation: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerRider(formData);
    } catch (error) {
      console.error('Error during rider registration:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegistrationForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
}

export default RegistrationRider;