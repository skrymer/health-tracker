import { WeightMeasurement } from "@/types";

export const lastSevenMeasurements = (measurements: WeightMeasurement[]) =>
  measurements.slice(measurements.length - 7, measurements.length);

export const medianWeight = (measurements: WeightMeasurement[]) =>
  measurements
    .map((entry) => entry.weight)
    .sort((a, b) => a - b)
    .splice(measurements.length, measurements.length)[0];
