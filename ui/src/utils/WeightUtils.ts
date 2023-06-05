import { WeightMeasurement } from "@/types";

export const first = (measurements?: WeightMeasurement[]) => measurements ? measurements[0] : undefined

export const last = (measurements?: WeightMeasurement[]) => {
  if(measurements?.length === 1) {
    return measurements[0]
  }  
  
  return measurements ? measurements[measurements.length - 1] : undefined
}

export const lastSevenMeasurements = (measurements?: WeightMeasurement[]) =>
  measurements
    ? measurements.slice(measurements.length - 7, measurements.length)
    : [];

export const medianWeight = (measurements: WeightMeasurement[]) => {
  const sortedWeight = measurements
    .map((entry) => entry.weight)
    .sort((a, b) => a - b);

  const lenght = sortedWeight.length;

  if (lenght % 2 === 0) {
    const middleArray = sortedWeight.slice(
      Math.round(lenght / 2) - 1,
      Math.round(lenght / 2) + 1
    );

    return (middleArray[0] + middleArray[1]) / 2;
  } else {
    return sortedWeight[Math.round(lenght / 2) - 1];
  }
};
