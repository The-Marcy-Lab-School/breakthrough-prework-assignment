const {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
  wordCap,
  processReleaseData,
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths
} = require('./exercises');

describe("Tests for Javascript Prework", () => {
  describe("Is a palindrome?", () => {
    const cases = [
      ['madam', true],
      ['Madam', true],
      ["Madam, I'm Adam", true],
      ['356653', true],
      ['tommy', false],
      ["Eva, can I see bees in a cave?", true],
      ["No lemon, no melon", true],
      ['356a653', true],
      ['123ab321', false],
    ];

    test.each(cases)('%s', (word, expected) => {
      expect(isRealPalindrome(word)).toBe(expected);
    });
  });

  describe('Running Total', () => {
    const cases = [
      [[2, 5, 13], [2, 7, 20]],
      [[14, 11, 7, 15, 20], [14, 25, 32, 47, 67]],
      [[3], [3]],
      [[], []]
    ];

    test.each(cases)('%s', (listOfNumbers, expected) => {
      expect(runningTotal(listOfNumbers)).toStrictEqual(expected);
    });
  });

  describe('Swap', () => {
    const cases = [
      ['a', 'a'],
      ['Abcde', 'ebcdA'],
      ['Oh what a wonderful day it is', 'hO thaw a londerfuw yad ti si']
    ];

    test.each(cases)('%s', (phrase, expected) => {
      expect(swap(phrase)).toBe(expected);
    });
  });

  describe('Word Sizes', () => {
    const cases = [
      ['Four score and seven.', {
        3: 1, 4: 1, 5: 1, 6: 1
      }],
      ['Hey diddle diddle, the cat and the fiddle!', { 3: 5, 6: 1, 7: 2 }],
      ["What's up doc?", { 2: 1, 4: 1, 6: 1 }],
      ['', {}]
    ];

    test.each(cases)('%s', (phrase, expected) => {
      expect(wordSizes(phrase)).toStrictEqual(expected);
    });
  });

  describe('Union', () => {
    const cases = [
      [[1, 3, 5], [3, 6, 9], [1, 3, 5, 6, 9]],
      [[2, 2, 2, 2], [10, 5, 2], [2, 10, 5]]
    ];

    test.each(cases)('%s %s', (arr1, arr2, expected) => {
      expect(union(arr1, arr2)).toStrictEqual(expected);
    });
  });

  describe('First Recurring', () => {
    const cases = [
      ['reuben', 'e'],
      ['anne', 'n'],
      ['restaurant', 'r'],
      ['paul', '']
    ];

    test.each(cases)('%s', (str, expected) => {
      expect(firstRecurring(str)).toBe(expected);
    });
  });

  describe('Multiplicative Average', () => {
    const cases = [
      [[3, 5], "7.500"],
      [[2, 5, 7, 11, 13, 17], "28361.667"]
    ];

    test.each(cases)('%s', (arr, expected) => {
      expect(showMultiplicativeAverage(arr)).toBe(expected);
    });
  });

  describe('Multiply List', () => {
    const cases = [
      [[3, 5, 7], [9, 10, 11], [27, 50, 77]],
      [[5, 10, 15, 20], [1, 2, 3, 4], [5, 20, 45, 80]]
    ];

    test.each(cases)('%s, %s', (arr1, arr2, expected) => {
      expect(multiplyList(arr1, arr2)).toStrictEqual(expected);
    });
  });

  describe('Sequence', () => {
    const cases = [
      [5, [1, 2, 3, 4, 5]],
      [3, [1, 2, 3]],
      [1, [1]]
    ];

    test.each(cases)('%s', (num, expected) => {
      expect(sequence(num)).toStrictEqual(expected);
    });
  });

  describe('Word Cap', () => {
    const cases = [
      ['four score and seven', "Four Score And Seven"],
      ['the javaScript language', "The Javascript Language"],
      ['this is a "quoted" word', 'This Is A "quoted" Word']
    ];

    test.each(cases)('%s', (str, expected) => {
      expect(wordCap(str)).toBe(expected);
    });
  });

  describe('Process Release Data', () => {
    const data = [
      {
        id: 70111470,
        title: 'Die Hard',
        boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 654356453,
        boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
      {
        title: 'The Chamber',
        boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 675465,
        title: 'Fracture',
        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ];

    expect(processReleaseData(data)).toStrictEqual([
      {
        id: 70111470,
        title: 'Die Hard',
      },
      {
        id: 675465,
        title: 'Fracture',
      },
    ]);
  });

  describe('Octal To Decimal', () => {
    const cases = [
      ['1', 1],
      ['10', 8],
      ['130', 88],
      ['17', 15],
      ['2047', 1063],
      ['11', 9],
    ];

    test.each(cases)('%s', (octal, expected) => {
      expect(octalToDecimal(octal)).toBeCloseTo(expected);
    });
  });

  describe('Anagram', () => {
    const cases = [
      ['listen', ['enlists', 'google', 'inlets', 'banana'], ["inlets"]],
      ['listen', ['enlist', 'google', 'inlets', 'banana'], ["enlist", "inlets"]],
    ];

    test.each(cases)('%s', (word, list, expected) => {
      expect(anagram(word, list)).toStrictEqual(expected);
    });
  });

  describe('Triangle', () => {
    const cases = [
      [60, 70, 50, 'acute'],
      [30, 90, 60, 'right'],
      [120, 50, 10, 'obtuse'],
      [0, 90, 90, 'invalid'],
      [50, 50, 50, 'invalid'],
    ];

    test.each(cases)('Angles %s, %s, %s', (a1, a2, a3, expected) => {
      expect(triangle(a1, a2, a3)).toBe(expected);
    });
  });

  describe('Friday The 13ths', () => {
    const cases = [
      [1986, 1],
      [2015, 3],
      [2017, 2]
    ];

    test.each(cases)('%s', (date, expected) => {
      expect(fridayThe13ths(date)).toBe(expected);
    });
  });
});
