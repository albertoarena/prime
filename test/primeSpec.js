define(['prime'], function (getPrimes) {

    describe('Prime number generator', function () {

        it('should create a list of positive prime numbers', function () {
            var list = getPrimes(0, 10);
            expect(list).toBeDefined();
            expect(typeof list).toEqual('object');
            expect(list.length).toEqual(10);
            expect(list).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        });

        it('should create a list of positive prime numbers limited by a positive max', function () {
            var list = getPrimes(5, 10, 15);
            expect(list).toBeDefined();
            expect(typeof list).toEqual('object');
            expect(list.length).toEqual(4);
            expect(list).toEqual([5, 7, 11, 13]);
        });

        it('should create a list of positive prime numbers limited by a negative max', function () {
            var list = getPrimes(5, 10, -5);
            expect(list).toBeDefined();
            expect(typeof list).toEqual('object');
            expect(list.length).toEqual(10);
            expect(list).toEqual([5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        });

        it('should create a list of negative prime numbers', function () {
            var list = getPrimes(-10, 10);
            expect(list).toBeDefined();
            expect(typeof list).toEqual('object');
            expect(list.length).toEqual(10);
            expect(list).toEqual([-7, -5, -3, -2, 2, 3, 5, 7, 11, 13]);
        });

        it('should create a list of negative prime numbers limited by a positive max', function () {
            var list = getPrimes(-10, 10, 5);
            expect(list).toBeDefined();
            expect(typeof list).toEqual('object');
            expect(list.length).toEqual(7);
            expect(list).toEqual([-7, -5, -3, -2, 2, 3, 5]);
        });

        it('should create a list of negative prime numbers limited by a negative max', function () {
            var list = getPrimes(-10, 10, -5);
            expect(list).toBeDefined();
            expect(typeof list).toEqual('object');
            expect(list.length).toEqual(10);
            expect(list).toEqual([-7, -5, -3, -2, 2, 3, 5, 7, 11, 13]);
        });
    });

});