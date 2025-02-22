export interface RiderRegistrationData {
  name: string;
  email: string;
  phone: string;
  idNumber: string;
  driversLicense: string;
  vehicleDetails: string;
  baseStation: string;
}

export async function registerRider(data: RiderRegistrationData): Promise<void> {
  console.log('Rider registration submitted:', data);
}