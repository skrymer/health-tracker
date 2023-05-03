export type WeightUnit = "KILO_GRAM" | "LBS";

export type HeightUnit = "CENTIMETERS" | "INCHES";

export type WeightMeasurement = {
  weight: number;
  fatPercentage: number;
  unit: WeightUnit;
  timestamp: string;
  userName: string;
};

export type User = {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  height: number;
  heightUnit: HeightUnit;
  preferredWeightUnit: WeightUnit;
};
