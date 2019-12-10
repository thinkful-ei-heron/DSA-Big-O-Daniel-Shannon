/* 1. What is the Big O for this? 
    
    1. For this algorithm, you are asking a group of people all at the same time
    to see who has the same dog. Since the question is being asked to the group all
    at once regardless of the size of the group, the Big O would be constant O(1) as
    it will always take the same amount of time to get an answer back from the group.

    2. For this algorithm, you are asking each person in a group the same question, however,
    now you are asking one at a time. Therefore, for 15 people, you will ask your question 15 times.
    So as the size of the group grows, the number of times the question will be asked will grow.
    That makes the Big O of this algorithm linear O(n). This is a less efficient way to ask your question
    to the group.

2. Even or Odd
  function isEven(value) {
      if (value % 2 == 0) {
          return true;
      }
      else
          return false;
      }
  }

  This algorithm's Big O would be constant O(1) because the algorithm is accepting one argument.
  A basic math operation is performed on the one argument and a true or false value is returned. 
  The length of time to complete the algorithm will not change. 

3. Are you here?
  function areYouHere(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
          const el1 = arr1[i];
          for (let j = 0; j < arr2.length; j++) {
              const el2 = arr2[j];
              if (el1 === el2) return true;
          }
      }
      return false;
  }

  This algorithm's Big O would be O(n^2) because in the worst case the array1 and array2 would be equal.
  Effectivly n*n

4. Doubler
  function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
  }

  This algorithm Big O would be O(n) because it is looping through an array and multiplying each index by 2.

  5. Naive search
  function naiveSearch(array, item) {
      for (let i = 0; i < array.length; i++) {
          if (array[i] === item) {
              return i;
          }
      }
  }
  
  This algorithm's Big O would be O(n) because it is looping through an array and comparing the index with an
  item and returning the item.


  6. Creating pairs: 
  function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

This algorithm would be Big O polynomial O(n^2) because the array is being looped over
twice. Therefore the complexity of the algorithm is directly related to the size of the array times
itself.

7. Compute the sequence
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

The alogorithm above recevies a number as an input. It then loops through based on the
size of the number that was passed in, then pushes values into an array based on the value
of i. This essentially is creating the fibonnaci sequence by using a for loop. The complexity
of the algorithm is directly related to the size of the value of the number passed in. Therefore
the Big O is Linear O(n). 


8. An efficient search
  The Big O of this algorithm is Logarithmic O(log(n)). This is because the algorithm
  uses a while loop that decreases the size of the array by half every time through the loop.
  This is significant because even as the size of the array increases there is not a large increase
  in the run time of the algorithm. 

9. Random Element
  This Big O of this algorithm is Constant O(1). This algorithm accepts an array as input.
  Regardless of the size of that array it will generate a random number index based on the length of the array
  and will return a random item from the array at that index number.

10. What Am I?
  function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

This algorithm takes a number as an input. It first assesses to see if the number
is less than two or if the number is not a whole number then it will return false.
So if n is greater than or equal to 2 and a whole number we move on to the for loop.
The for loop will loop through based on the size of the value of n. The loop will determine if
the number that is passed in is a prime number. It does this by repeating the modulus operation
on the number with an incrementing i value. The Big O for this algorithm is linear O(n) because as 
the value of the number increases, so does the complexity/number of loops.

11. Tower of Hanoi
The runtime of the algorithm is Big O polynomial time O(n^2) because
the algorithm iterates over the num based on the value passed in twice (happening in the else statement).
So when the algorithm is run with 5 disks, there are 31 steps needed to complete it.
When run with 7 disks there are 127 steps needed to complete it.   
*/

function TOH(num, source, dest, temp) {

  if (num <= 1) {
    return print(source, dest);
  }
  else {
    TOH(num - 1, source, temp, dest);
    print(source, dest);
    TOH(num - 1, temp, dest, source);
  }
}

// 12. Iterative version

function print(source, dest) {
  console.log(`Moving from ${source} to ${dest}`);
}

// TOH(5, 'A', 'C', 'B');


function sheep(n) {
  for (let i = n; i >= 0; i--) {
    if (i === 0) {
      console.log('All sheep jumped over the fence.');
    }
    else {
      console.log(`${i}: Another sheep jumps over the fence.`);
    }

  }
}
// sheep(4);

function powerCalculator(int, exp) {
  let result = 1;
  while (exp > 0) {
    result *= int;
    exp--;
  }
  return result;
}

// console.log(powerCalculator(10,3));

function stringReverser(string) {
  let result = '';
  for (let i = string.length; i >= 0; i--) {
    result += string.charAt(i);
  }
  return result;
}

// console.log(stringReverser('hello'));

function nthTriangular(num) {
  let result = 0;
  for (let i = num; i >= 0; i--) {
    result += i;
  }
  return result;
}

// console.log(nthTriangular(3));

function stringSplitter(string) {
  let result = [];
  let newString = '';
  for (let i = 0; i <= string.length; i++) {
    if (string[i] !== '/' && string[i] !== undefined) {
      newString += string[i];
      // console.log(newString);
    }
    else {

      result.push(newString);
      newString = '';
    }
  }
  return result;
}

// console.log(stringSplitter('02/20/2020/hi'));

function fibIt(num){
  result = []
  for(let i = 1; i <= num; i++){
    if(i === 1 ){
      result.push(1)
    }
    else if(i === 2){
      result.push(1)
    }
    else{
      result.push(result[i-2] + result[i-3])
    }
  }
  return result
}

console.log(fibIt(7))
