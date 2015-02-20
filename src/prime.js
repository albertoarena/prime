/**
 * Prime number generator object
 *
 * @author Alberto Arena <arena.alberto@gmail.com>
 * @licence MIT https://github.com/albertoarena/prime/blob/master/LICENSE-MIT
 *
 */
define([], function () {

    return function () {

        /**
         * Internal object
         * @type {*}
         */
        var settings = {
            start: 2,
            direction: 1,
            count: 10,
            max: null,
            min: null,
            validate: function () {
                return !(isNaN(this.start) || isNaN(this.count) || (this.direction !== 1 && this.direction !== -1));
            },
            isPrime: function (number) {
                number = Math.abs(number);
                if (number >= 0 && number <= 1) {
                    return false;
                }
                var start = 2;
                while (start <= Math.sqrt(number)) {
                    if (number % start++ < 1) return false;
                }
                return number > 1;
            },
            getPrimes: function () {
                var primes = [];
                var num = this.start;
                var maxPrime = this.max;
                var minPrime = this.min;
                while (primes.length < this.count) {
                    if (this.isPrime(num)) {
                        if (this.direction == 1 && maxPrime !== null && num >= maxPrime) {
                            break;
                        }
                        else if (this.direction == -1 && minPrime !== null && num <= minPrime) {
                            break;
                        }
                        primes.push(num);
                    }
                    num += this.direction;
                }
                return primes;
            }
        };

        return {
            /**
             * Set direction (1 = forwards, -1 = backwards; default 1)
             * @param {number} v            Direction, only -1 or 1
             * @returns {this}
             */
            direction: function (v) {
                if (v === -1 || v === 1) {
                    settings.direction = v;
                }
                return this;
            },
            /**
             * Set starting number (default 2)
             * @param {number} v            Starting number, only numbers
             * @returns {this}
             */
            start: function (v) {
                if (typeof v !== 'object' && !isNaN(v = parseInt(v, 10))) {
                    settings.start = v;
                }
                return this;
            },
            /**
             * Set count of prime numbers returned (default 10)
             * @param {number} v            Count, only positive numbers >= 1
             * @returns {this}
             */
            count: function (v) {
                if (typeof v !== 'object' && !isNaN(v = parseInt(v, 10)) && v >= 1) {
                    settings.count = parseInt(v, 10);
                }
                return this;
            },
            /**
             * Set max prime number when direction is forwards (1), default null
             * @param {number|null} v       Max, null or number
             * @returns {this}
             */
            max: function (v) {
                if (v === null) {
                    settings.max = null;
                }
                else if (typeof v !== 'object' && !isNaN(v = parseInt(v, 10))) {
                    settings.max = v;
                }
                return this;
            },
            /**
             * Set min prime number when direction is backwards (-1), default null
             * @param {number|value} v      Min, null or number
             * @returns {this}
             */
            min: function (v) {
                if (v === null) {
                    settings.min = null;
                }
                else if (typeof v !== 'object' && !isNaN(v = parseInt(v, 10))) {
                    settings.min = v;
                }
                return this;
            },
            /**
             * Return current settings
             * @returns {*}
             */
            settings: function () {
                return {
                    direction: settings.direction,
                    count: settings.count,
                    max: settings.max,
                    min: settings.min,
                    start: settings.start
                };
            },
            /**
             * Get a list of prime numbers, based on the object settings
             * @returns []
             */
            get: function () {
                if (settings.validate()) {
                    return settings.getPrimes();
                }
                return [];
            }
        };

    };

});