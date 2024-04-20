function nilaiRandom(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 50) + 1);
  }
  return arr;
}

function pisahArr(arr) {
  const genap = [];
  const ganjil = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      genap.push(arr[i]);
    } else {
      ganjil.push(arr[i]);
    }
  }
  return [genap, ganjil];
}

function nilaiMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function nilaiMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function totalArr(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function ratarata(arr) {
  return totalArr(arr) / arr.length;
}

function banding(arr1, arr2) {
  const hasil = {
    min:
      nilaiMin(arr1) > nilaiMin(arr2)
        ? "Array genap lebih besar"
        : "Array ganjil lebih besar",
    max:
      nilaiMax(arr1) > nilaiMax(arr2)
        ? "Array genap lebih besar"
        : "Array ganjil lebih besar",
    total:
      totalArr(arr1) === totalArr(arr2)
        ? "Total memiliki nilai sama"
        : "Total memiliki nilai berbeda",
    average:
      ratarata(arr1) > ratarata(arr2)
        ? "Rata-rata lebih besar array genap"
        : "Rata-rata lebih besar array ganjil",
  };
  return hasil;
}

const mainArray = nilaiRandom(100);

const [genap, ganjil] = pisahArr(mainArray);

console.log("Array dengan jumlah index 100: ", mainArray);
console.log("Array genap dengan jumlah index 50: ", genap);
console.log("Array ganjil dengan jumlah index 50: ", ganjil);
console.log(
  "Min, Max, Total, Rata rata pada array genap: ",
  nilaiMin(genap),
  nilaiMax(genap),
  totalArr(genap),
  ratarata(genap)
);
console.log(
  "Min, Max, Total, Rata rata pada array ganjil: ",
  nilaiMin(ganjil),
  nilaiMax(ganjil),
  totalArr(ganjil),
  ratarata(ganjil)
);
console.log(
  "Perbandingan nilai min, max, total, dan rata rata antara array genap dan ganjil: ",
  banding(genap, ganjil)
);
