//-------------------------------homework   1-----------------------------------------------
// var arr = [10, "salom", 21, 4, 1, 12, true];
// var summa = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     summa += arr[i];
//   }
// }

// console.log(summa);
//----------------------------------------2---------------------------------------------------
// function findClosestNumber(arr, R) {
//   var closestNum = arr[0];
//   var diff = Math.abs(R - arr[0]);

//   for (var i = 1; i < arr.length; i++) {
//     var currentDiff = Math.abs(R - arr[i]);

//     if (currentDiff < diff) {
//       diff = currentDiff;
//       closestNum = arr[i];
//     }
//   }

//   return closestNum;
// }

// var arr = [1, 23, 42, 14, 21, 22];
// var R = 16;

// var closestNumber = findClosestNumber(arr, R);
// console.log(closestNumber);
//----------------------------------------3---------------------------------------------------
// function sumEvenIndexedElements(arr) {
//   var sum = 0;

//   for (var i = 0; i < arr.length; i += 2) {
//     if (typeof arr[i] === "number") {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// var arr = [10, "salom", 21, 4, 1, 12, true];
// var result = sumEvenIndexedElements(arr);
// console.log(result);
//----------------------------------------4---------------------------------------------------
// function topSameElementsIndices(arr) {
//   var indekslar = {};

//   for (var i = 0; i < arr.length; i++) {
//     var element = arr[i];
//     if (indekslar[element] !== undefined) {
//       indekslar[element].push(i);
//     } else {
//       indekslar[element] = [i];
//     }
//   }

//   var birXilQiymatliIndekslar = [];

//   for (var key in indekslar) {
//     if (indekslar[key].length === 2) {
//       birXilQiymatliIndekslar.push(indekslar[key].join(","));
//     }
//   }

//   return birXilQiymatliIndekslar;
// }

// var arr = [10, 21, 4, 1, 12, 21];
// var result = topSameElementsIndices(arr);
// console.log(result);
//----------------------------------------5---------------------------------------------------
// function toqSonlarSoni(arr) {
//   var sonlarSoni = 0;

//   for (var i = 1; i < arr.length; i += 2) {
//     if (typeof arr[i] === "number") {
//       sonlarSoni++;
//     }
//   }

//   return sonlarSoni;
// }

// var arr = [1, 23, 42, 14, 21, 22];
// var natija = toqSonlarSoni(arr);
// console.log(natija);
//----------------------------------------6---------------------------------------------------
// function elementlarniOrttir(arr, k) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] *= k;
//   }
//   return arr;
// }

// var arr = [10, 2, 34, 5, 13, 63, 16];
// var k = 3;

// var natija = elementlarniOrttir(arr, k);
// console.log(natija);
//-------------------------------------------------7---------------------------------------------

// function kichikKattaOzgarish(arr) {
//   var engKichik = arr[0];
//   var engKatta = arr[0];

//   // Eng kichik va eng katta elementlarni topish
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < engKichik) {
//       engKichik = arr[i];
//     }
//     if (arr[i] > engKatta) {
//       engKatta = arr[i];
//     }
//   }

//   // Eng kichik va eng katta elementlari orasidagilarini nolga almashtirish
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > engKichik && arr[i] < engKatta) {
//       arr[i] = 0;
//     }
//   }

//   return arr;
// }

// var arr = [10, 2, 34, 5, 13, 63, 16];

// var natija = kichikKattaOzgarish(arr);
// console.log(natija);
//---------------------------------------------8-------------------------------------------------
// function qoshniOchir(arr) {
//   var qoshnilar = {};

//   // Massiv elementlarini tekshirish va qoshnilar to'plamini yaratish
//   for (var i = 0; i < arr.length; i++) {
//     var element = arr[i];
//     if (qoshnilar[element] !== undefined) {
//       qoshnilar[element]++;
//     } else {
//       qoshnilar[element] = 1;
//     }
//   }

//   // Massivdan bir xil qo'shnilarning birini o'chirish
//   for (var i = 0; i < arr.length; i++) {
//     var element = arr[i];
//     if (qoshnilar[element] > 1) {
//       qoshnilar[element]--;
//     } else {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

//   return arr;
// }

// var arr = [10, 2, 34, 2, 2, 5, 13, 63, 63, 16, 5];

// var natija = qoshniOchir(arr);
// console.log(natija);
//----------------------------------------------9-------------------------------------------------
// function juftToqChiqar(arr) {
//   var juftlar = [];
//   var toqlar = [];

//   // Massiv elementlarini juftlar va toqlar to'plamlariga ajratish
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       juftlar.push(arr[i]);
//     } else {
//       toqlar.push(arr[i]);
//     }
//   }

//   // Juft elementlarni o'sish tartibida chiqarish
//   for (var i = 0; i < juftlar.length; i++) {
//     console.log(juftlar[i]);
//   }

//   // Toq elementlarni indekslari kamayish tartibida chiqarish
//   for (var i = toqlar.length - 1; i >= 0; i--) {
//     console.log(toqlar[i]);
//   }
// }

// var arr = [4, 5, 7, 8, 6, 9];
// juftToqChiqar(arr);
//----------------------------------------------10-------------------------------------------------
function kattaKichikAlmashtir(arr) {
  var engKichik = arr[0];
  var engKatta = arr[0];
  var engKichikIndex = 0;
  var engKattaIndex = 0;

  // Eng kichik va eng katta elementlarni topish
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < engKichik) {
      engKichik = arr[i];
      engKichikIndex = i;
    }
    if (arr[i] > engKatta) {
      engKatta = arr[i];
      engKattaIndex = i;
    }
  }

  // Elementlarning o'rni almashtirish
  var temp = arr[engKichikIndex];
  arr[engKichikIndex] = arr[engKattaIndex];
  arr[engKattaIndex] = temp;

  return {
    min: engKichik,
    max: engKatta,
    updatedArray: arr,
  };
}

var arr = [7, 4, 9, 2, 3, 1, 5];

var natija = kattaKichikAlmashtir(arr);
console.log(
  "(Max:",
  natija.max + ", Min:",
  natija.min + ")",
  natija.updatedArray
);
