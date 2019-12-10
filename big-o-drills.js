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


/*
