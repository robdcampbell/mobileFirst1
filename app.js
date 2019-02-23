const arr = ['snake', 'lizard', 'elephant', 'ant', 'aardvark'];
const arr2 = [12,3435,66,78,9,99999,865,4];

// SORT

// alphabetic - by default, the .sort() will arrange items alphabetically by their UTF-16 code unit value
const alphabetic = arr.sort();
console.log(alphabetic);

// chronological:
const chronological = arr2.sort((a,b)=> {
  return b-a;
});
console.log(chronological);


// concat two arrays together
  // 1) using an alogrithm

  const arrOriginal = ['a','b','c'];
  const arrStart = ['start'];
  const arrEnd = ["end"];
  const combined1 = arrStart.concat(arrOriginal.concat(arrEnd));
  const combinedArr = [...arrStart,...arrOriginal,...arrEnd];

  console.log(combined1);
  console.log(combinedArr);



// Find the max number in an array
const arrOfNums = [3,24,124234,5];

function findMax(arr){
  return Math.max(...arr)
};

console.log(findMax(arrOfNums));

