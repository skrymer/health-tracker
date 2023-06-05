import { WeightMeasurement, WeightUnit } from "@/types";
import { lastSevenMeasurements, medianWeight } from "./WeightUtils";

describe("Weight utils", () => {
  describe("Calculate median weight", () => {
    it('calculate median weight for an even array of measurements', () => {
      const measurements = [
        create(100, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(101, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(102, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(103, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(104, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(106, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(107, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
      ];

      expect(medianWeight(measurements)).toEqual(103.5)
    })

    it('calculate median weight for an uneven array of measurements', () => {
      const measurements = [
        create(100, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(101, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(102, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(103, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(104, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(106, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
      ];

      expect(medianWeight(measurements)).toEqual(103)
    })
  })

  describe("Get last seven measurements", () => {
    it("should return last seven measurements", () => {
      const measurements = [
        create(100, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(101, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(102, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(103, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(104, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(105, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(106, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
        create(107, 12.5, "KILO_GRAM", "01-01-2022T00:00:00", "skrymer"),
      ];

      const actual = lastSevenMeasurements(measurements);
      const expected = [
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 101,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 102,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 103,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 104,
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
          weight: 106,
        },
        {
          fatPercentage: 12.5,
          timestamp: "01-01-2022T00:00:00",
          unit: "KILO_GRAM",
          userName: "skrymer",
          weight: 107,
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
