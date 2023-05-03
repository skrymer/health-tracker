import { WeightMeasurement, WeightUnit } from "@/types";
import { lastSevenMeasurements, medianWeight } from "./WeightUtils";

describe("Weight utils", () => {
  describe("Get last seven measurements", () => {
    it("should return last seven measurements", () => {
      const measurements = [
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
      ];

      const actual = lastSevenMeasurements(measurements);
      const expected = [
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 105,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 105,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 105,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 105,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 105,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 105,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 105,
        },
      ];
      
      expect(actual.length).toEqual(7);
      expect(actual).toEqual(expected);
    });
  });
});

const create = (
  weight: number,
  fatPercentage: number,
  unit: WeightUnit,
  timestamp: string,
  userName: string
): WeightMeasurement => {
  return {
    weight,
    fatPercentage,
    unit,
    timestamp,
    userName,
  };
};
