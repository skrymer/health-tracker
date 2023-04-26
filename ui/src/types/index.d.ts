export type WeightEntry = {
  weight: number,
  fatPercentage: number,
  unit: WeightUnit
  timestamp: string
  userName: string
}

export type WeightUnit = "KILO_GR" | "LBS"