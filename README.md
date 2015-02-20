# prime
This Javascript library is designed to generate a list of prime numbers.

It supports also negative prime numbers, that strictly speaking shouldn't exist but that are often needed in some
applications.

## How to use it

The object created contains some methods to configure the prime generator, and a method `get` to generate the number
list.

### Method `direction`

It configures the direction of the list of prime numbers generated. 1 means forwards, -1 backwards.

Default: **1**

    /**
     * Set direction (1 = forwards, -1 = backwards; default 1)
     * @param {number} value
     * @returns {Prime}
     */
    direction(value)

### Method `start`

It configures the starting number of the list of prime numbers generated. It may be positive or negative.

Default: **2**

    /**
     * Set starting number (default 2)
     * @param {number} value
     * @returns {Prime}
     */
    start(value)

### Method `count`

It configures the count of prime numbers to generate.

Default: **10**

    /**
     * Set count of prime numbers returned (default 10)
     * @param {number} value
     * @returns {Prime}
     */
    count(value)

### Method `max`

It configures the maximum prime number accepted, when the direction is forwards. To disable it, set it to null.

Default: **null**

    /**
     * Set max prime number when direction is forwards (1), default null
     * @param {number|null} value
     * @returns {Prime}
     */
    max(value)

### Method `min`

It configures the minimum prime number accepted, when the direction is backwards. To disable it, set it to null.

Default: **null**

    /**
     * Set min prime number when direction is backwards (-1), default null
     * @param {number|null} value
     * @returns {Prime}
     */
    min(value)

### Method `settings`

Returns the current settings as an object.

    /**
     * Return current settings
     * @returns {*}
     */
    settings()

### Method `get`

Generate the list of prime numbers, based on the settings, and return it.

    /**
     * Get a list of prime numbers, based on the object settings
     * @returns []
     */
    get()

## Samples

Create a list of prime numbers

    # First 10 prime numbers from 0
    new prime().start(0).count(10).get()
    # ==> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

    # First 5 prime numbers from 200
    new prime().start(200).count(5).get()
    # ==> [211, 223, 227, 229, 233]

    # First 10 prime numbers from -50
    new prime().start(-50).count(10).get()
    # ==> [-53, -59, -61, -67, -71, -73, -79, -83, -89, -97]

You can specify the direction of prime numbers (1 = forwards, -1 = backwards, default forwards):

    # First 10 prime numbers from 0, backwards
    new prime().direction(-1).start(0).count(10).get()
    # ==> [-2, -3, -5, -7, -11, -13, -17, -19, -23, -29]

You can specify the maximum/minimum prime number allowed:

    # First 10 prime numbers from 5, but not greater than 20
    new prime().start(5).count(10).max(20).get()
    # ==> [5, 7, 11, 13, 17, 19]

    # First 10 prime numbers from -50, backwards, but not lower than -70
    new prime().direction(-1).start(-50).count(10).min(-70).get()
    # ==> [-53, -59, -61, -67]

**Working sample on [JSFiddle](http://jsfiddle.net/albertoarena/2jxcckzk/).**