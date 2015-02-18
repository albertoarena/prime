/**
 * Prime number generator
 *
 * @author Alberto Arena <arena.alberto@gmail.com>
 * @licence MIT https://github.com/albertoarena/prime/blob/master/LICENSE-MIT
 *
 */
define([], function () {

    function isPrime(number) {
        var start = 2;
        while (start <= Math.sqrt(number)) {
            if (number % start++ < 1) return false;
        }
        return number > 1;
    }

    /**
     * Get a list of prime numbers
     *
     * @param {number} start                    start, can be negative
     * @param {number} count                    count of primes returned
     * @param {number|undefined} maxPrime       max prime, only if start is positive
     * @returns {Array}
     */
    function getPrimes(start, count, maxPrime) {
        var primes = [];
        var num = start;

        if (start < 0) {
            primes = getPrimes(2, count, Math.abs(start)).map(function (n) {
                return n * -1;
            }).reverse();
            if (primes.length >= count) {
                return primes;
            }
            else {
                num = 2;
            }
        }

        // Remove maxMinPrime if it's negative
        if (maxPrime !== undefined && maxPrime < 0) {
            maxPrime = undefined;
        }

        while (primes.length < count) {
            if (isPrime(num)) {
                if (maxPrime !== undefined && num > maxPrime) {
                    break;
                }
                primes.push(num);
            }
            num++;
        }

        return primes;
    }

    return getPrimes;
});
