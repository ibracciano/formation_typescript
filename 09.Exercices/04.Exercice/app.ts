function calculerDistance(points: [number, number][]): number[] {
  // Calcul de la distance entre chaque point
  const distance = points.map((point) =>
    Math.sqrt(point[0] ** 2 + point[1] ** 2)
  );
  return distance;
}

const tabPoints: [number, number][] = [
  [0, 0],
  [3, 4],
  [6, 8],
];

const distances = calculerDistance(tabPoints);

console.log(distances); // [0, 5, 10]
