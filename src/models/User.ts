export type UserRole = 'customer' | 'rider' | 'shopOwner';

export interface BaseUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

/**
 * Interface for Customer user.
 */
export interface Customer extends BaseUser {
  phone: string;
  address: string;
  idNumber: string;
  biometricAuth: boolean;
}

/**
 * Interface for Rider user.
 */
export interface Rider extends BaseUser {
  phone: string;
  idNumber: string;
  driversLicense: string;
  vehicleDetails: string;
  baseStation: string;
}

/**
 * Interface for Shop Owner.
 */
export interface ShopOwner extends BaseUser {
  shopName: string;
  phone: string;
  productCategories: string[];
  shopLocation: string;
  businessLicense: string;
}

/**
 * Validate a user object.
 * @param user - The user object to validate.
 * @returns True if valid, throws error otherwise.
 */
export function validateUser(user: BaseUser): boolean {
  if (!user.email || !user.name || !user.role) {
    throw new Error('Invalid user data');
  }
  return true;
}