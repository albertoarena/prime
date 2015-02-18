# prime
This Javascript library is designed to generate a list of prime numbers.

It supports also negative prime numbers, that strictly speaking shouldn't exist but that are often needed in some
applications.

## How to use it

    /**
     * Get a list of prime numbers
     *
     * @param {number} start                    start, can be negative
     * @param {number} count                    count of primes returned
     * @param {number|undefined} maxPrime       max prime, only if start is positive
     * @returns {Array}
     */

Create a list of prime numbers

    # First 10 prime numbers from 0
    prime(0, 10)
    # ==> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

    # First 10 prime numbers from 2
    prime(0, 10)
    # ==> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

    # First 5 prime numbers from -10
    prime(-10, 5)
    # ==> [-7, -5, -3, -2, 2]

You can specify the maximum prime number allowed:

    # First 10 prime numbers from 0, but not greater than 20
    prime(0, 10, 20)
    # ==> [2, 3, 5, 7, 11, 13, 17, 19]

If the maximum prime is negative, it will be ignored.

**Working sample on [JSFiddle](http://jsfiddle.net/albertoarena/j1g1L3kk/4/).**