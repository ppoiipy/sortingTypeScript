export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Sort collection_2 (MAX to MIN)
  const col2Asc = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    col2Asc.push(collection_2[i]);
  }

  function mergeTwoArrays(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i++]);
      } else {
        result.push(arr2[j++]);
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i++]);
    }
    while (j < arr2.length) {
      result.push(arr2[j++]);
    }
    return result;
  }

  const merged12 = mergeTwoArrays(collection_1, col2Asc); // Merge 1 & 2
  return mergeTwoArrays(merged12, collection_3); // Merge (1,2) & 3
}

// Output
if (require.main === module) {
  const c1 = [1, 4, 7];
  const c2 = [6, 3, 2];
  const c3 = [5, 8, 10];
  const merged = merge(c1, c2, c3);
  console.log("Merged array:", merged.join(", "));
}