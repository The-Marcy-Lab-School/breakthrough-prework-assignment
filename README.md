# Prework
## Javascript

### Directions
2. From your project's root folder, run `npm install` to load project dependencies.

3. Your coding files are: 
    * `exercises.js` Where you will code your solutions.
    * `exercises.test.js` Your test cases.
    * `index.html` You can optionally open this file in the browser to run your code.

4. Test your code often by running `npm test`. 

6. Push your final commits and submit your URL through Canvas.

### Coding Problems

**1. Question**

# Breakthrough Fellowship - JavaScript Pre-Work
## Code Fluency and Structured Problem Solving

1. Write another function that returns `true` if the string passed as an argument is a palindrome, or `false` otherwise. your function should be case-insensitive, and should ignore all non-alphanumeric characters.
      ```javascript
      isRealPalindrome('madam');               // true
      isRealPalindrome('Madam');               // true (case does not matter)
      isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
      isRealPalindrome('356653');              // true
      isRealPalindrome('356a653');             // true
      isRealPalindrome('123ab321');            // false
      ```

2. Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.
      ```javascript
      runningTotal([2, 5, 13]);             // [2, 7, 20]
      runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
      runningTotal([3]);                    // [3]
      runningTotal([]);                     // []
      ```

3. Given a string of words separated by spaces, write a function that swaps the first and last letters of every word. You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
      ```javascript
      swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
      swap('Abcde');                          // "ebcdA"
      swap('a');                              // "a"
      ```

4. Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes. Words consist of any sequence of non-space characters.
      ```javascript
      wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
      wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
      wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
      wordSizes('');                                            // {}
      ```

5. Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
      ```javascript
      union([1, 3, 5], [3, 6, 9]);     // [1, 3, 5, 6, 9]
      union([2, 2, 2, 2], [10, 5, 2]); // [2, 10, 5]
      ```

6. Find the [first recurring character](https://www.youtube.com/watch?v=GJdiM-muYqc) in a string. If a string does not have a recurring character, return an empty string.
      ```javascript
      firstRecurring('reuben');           // "e"
      firstRecurring('anne');             // "n"
      firstRecurring('restaurant');       // "r"
      firstRecurring('paul');             // ""
      ```

7. Write a _multiplicative average_ function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.
      ```javascript
      showMultiplicativeAverage([3, 5]);                   // "7.500"
      showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
      ```

8. Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
      ```javascript
      multiplyList([3, 5, 7], [9, 10, 11]);  // [27, 50, 77]
      multiplyLIst([5, 10, 15, 20], [1, 2, 3, 4]);  // [5, 20, 45, 80]
      ```

9. Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order. You may assume that the argument will always be a positive integer.
      ```javascript
      sequence(5);    // [1, 2, 3, 4, 5]
      sequence(3);    // [1, 2, 3]
      sequence(1);    // [1]
      ```

10. Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase. You may assume that a word is any sequence of non-whitespace characters.
      ```javascript
      wordCap('four score and seven');       // "Four Score And Seven"
      wordCap('the javaScript language');    // "The Javascript Language"
      wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
      ```
11. Write a Function named `processReleaseData` that processes the following movie release data:

      ```javascript
      const newReleases = [
        {
          'id': 70111470,
          'title': 'Die Hard',
          'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [4.0],
          'bookmark': [],
        },
        {
          'id': 654356453,
          'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [5.0],
          'bookmark': [{ id:432534, time:65876586 }],
        },
        {
          'title': 'The Chamber',
          'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [4.0],
          'bookmark': [],
        },
        {
          'id': 675465,
          'title': 'Fracture',
          'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [5.0],
          'bookmark': [{ id:432534, time:65876586 }],
        },
      ];
      ```
    The Function should generate an Array of Objects that contain only the `id` and `title` key/value pairs. You may assume that `id`, when existing, is an integer greater than 0. Here are the rules:

    Keep only releases that have both `id` and `title` data present.
    Keep only the `id` and `title` data for each release.

      ```javascript
      processReleaseData(newReleases); // [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
      ```

12. Write a Function named `octalToDecimal` that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you. Check out [this video](https://www.youtube.com/watch?v=YCM2JReWS10)

      Examples:
      ```javascript
      octalToDecimal('1');           // 1
      octalToDecimal('10');          // 8
      octalToDecimal('130');         // 88
      octalToDecimal('17');          // 15
      octalToDecimal('2047');        // 1063
      octalToDecimal('11');         // 9
      ```

13. Write a Function named `anagram` that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".

      Examples:
      ```javascript
      anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
      anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
      ```

14. Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'. (**Note:** Valid triangles have three angles that sum to 180 degrees.) You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

      Examples:
      ```javascript
      triangle(60, 70, 50);       // "acute"
      triangle(30, 90, 60);       // "right"
      triangle(120, 50, 10);      // "obtuse"
      triangle(0, 90, 90);        // "invalid"
      triangle(50, 50, 50);       // "invalid"
      ```

15. Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future. **Note:** You may need to review [this article](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript) on the `Date` object from [Lesson 2.6](https://github.com/The-Marcy-Lab-School/se-unit-2/tree/master/lesson-6-objects)

      Examples:
      ```javascript
      fridayThe13ths(1986);      // 1
      fridayThe13ths(2015);      // 3
      fridayThe13ths(2017);      // 2
      ```
