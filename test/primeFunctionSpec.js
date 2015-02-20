define(['prime'], function (prime) {

    describe('Prime number generator', function () {

        var p;

        beforeEach(function () {
            p = new prime();
        })

        it('should create a prime generator', function () {
            expect(p).toBeDefined();
        });

        it('should configure the direction', function () {
            expect(p.settings().direction).toBe(1);
            p.direction(-1);
            expect(p.settings().direction).toBe(-1);
            p.direction(1);
            expect(p.settings().direction).toBe(1);
        });

        it('should reject invalid directions', function () {
            p.direction(null);
            expect(p.settings().direction).toBe(1);
            p.direction(undefined);
            expect(p.settings().direction).toBe(1);
            p.direction('abc');
            expect(p.settings().direction).toBe(1);
            p.direction([1, 2]);
            expect(p.settings().direction).toBe(1);
            p.direction({a: 1});
            expect(p.settings().direction).toBe(1);
            p.direction(false);
            expect(p.settings().direction).toBe(1);
        });

        it('should configure the start number', function () {
            expect(p.settings().start).toBe(2);
            p.start(10);
            expect(p.settings().start).toBe(10);
            p.start(-10);
            expect(p.settings().start).toBe(-10);
        });

        it('should reject invalid starting numbers', function () {
            p.start(null);
            expect(p.settings().start).toBe(2);
            p.start(undefined);
            expect(p.settings().start).toBe(2);
            p.start('abc');
            expect(p.settings().start).toBe(2);
            p.start([1, 2]);
            expect(p.settings().start).toBe(2);
            p.start({a: 1});
            expect(p.settings().start).toBe(2);
            p.start(false);
            expect(p.settings().start).toBe(2);
            p.start(true);
            expect(p.settings().start).toBe(2);
        });

        it('should configure the count', function () {
            expect(p.settings().count).toBe(10);
            p.count(100);
            expect(p.settings().count).toBe(100);
        });

        it('should reject invalid counts', function () {
            expect(p.settings().count).toBe(10);
            p.count(0);
            expect(p.settings().count).toBe(10);
            p.count(-100);
            expect(p.settings().count).toBe(10);
            p.count(null);
            expect(p.settings().count).toBe(10);
            p.count(undefined);
            expect(p.settings().count).toBe(10);
            p.count('abc');
            expect(p.settings().count).toBe(10);
            p.count([1, 2]);
            expect(p.settings().count).toBe(10);
            p.count({a: 1});
            expect(p.settings().count).toBe(10);
            p.count(false);
            expect(p.settings().count).toBe(10);
            p.count(true);
            expect(p.settings().count).toBe(10);
        });

        it('should configure the max number', function () {
            expect(p.settings().max).toBeNull();
            p.max(10);
            expect(p.settings().max).toBe(10);
            p.max(-10);
            expect(p.settings().max).toBe(-10);
            p.max(0);
            expect(p.settings().max).toBe(0);
            p.max(null);
            expect(p.settings().max).toBeNull();
        });

        it('should reject invalid max numbers', function () {
            expect(p.settings().max).toBeNull();
            p.max(undefined);
            expect(p.settings().max).toBeNull();
            p.max('abc');
            expect(p.settings().max).toBeNull();
            p.max([1, 2]);
            expect(p.settings().max).toBeNull();
            p.max({a: 1});
            expect(p.settings().max).toBeNull();
            p.max(false);
            expect(p.settings().max).toBeNull();
            p.max(true);
            expect(p.settings().max).toBeNull();
        });

        it('should configure the min number', function () {
            expect(p.settings().min).toBeNull();
            p.min(10);
            expect(p.settings().min).toBe(10);
            p.min(-10);
            expect(p.settings().min).toBe(-10);
            p.min(0);
            expect(p.settings().min).toBe(0);
            p.min(null);
            expect(p.settings().min).toBeNull();
        });

        it('should reject invalid min numbers', function () {
            expect(p.settings().min).toBeNull();
            p.min(undefined);
            expect(p.settings().min).toBeNull();
            p.min('abc');
            expect(p.settings().min).toBeNull();
            p.min([1, 2]);
            expect(p.settings().min).toBeNull();
            p.min({a: 1});
            expect(p.settings().min).toBeNull();
            p.min(false);
            expect(p.settings().min).toBeNull();
            p.min(true);
            expect(p.settings().min).toBeNull();
        });

        it('should return the correct settings', function () {
            expect(p.settings().direction).toBe(1);
            expect(p.settings().start).toBe(2);
            expect(p.settings().count).toBe(10);
            expect(p.settings().max).toBeNull();
            expect(p.settings().min).toBeNull();

            p.direction(-1).start(-3).count(100).max(300).min(-300);
            expect(p.settings().direction).toBe(-1);
            expect(p.settings().start).toBe(-3);
            expect(p.settings().count).toBe(100);
            expect(p.settings().max).toBe(300);
            expect(p.settings().min).toBe(-300);
        });

        it('should generate the prime numbers, start 2, count 10, direction 1', function() {
            var list = p.direction(1).start(2).count(10).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(10);
            expect(list).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        });

        it('should generate the prime numbers, start 2, count 10, direction 1, max 20', function() {
            var list = p.direction(1).start(2).count(10).max(20).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(8);
            expect(list).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
        });

        it('should generate the prime numbers, start -50, count 10, direction 1', function() {
            var list = p.direction(1).start(-50).count(10).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(10);
            expect(list).toEqual([-47, -43, -41, -37, -31, -29, -23, -19, -17, -13]);
        });

        it('should generate the prime numbers, start -50, count 10, direction 1, max -18', function() {
            var list = p.direction(1).start(-50).count(10).max(-18).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(8);
            expect(list).toEqual([-47, -43, -41, -37, -31, -29, -23, -19]);
        });

        it('should generate the prime numbers, start 2, count 10, direction -1', function() {
            var list = p.direction(-1).start(2).count(10).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(10);
            expect(list).toEqual([2, -2, -3, -5, -7, -11, -13, -17, -19, -23]);
        });

        it('should generate the prime numbers, start 2, count 10, direction -1, max -20', function() {
            var list = p.direction(-1).start(2).count(10).min(-20).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(9);
            expect(list).toEqual([2, -2, -3, -5, -7, -11, -13, -17, -19]);
        });

        it('should generate the prime numbers, start -50, count 10, direction -1', function() {
            var list = p.direction(-1).start(-50).count(10).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(10);
            expect(list).toEqual([-53, -59, -61, -67, -71, -73, -79, -83, -89, -97]);
        });

        it('should generate the prime numbers, start -50, count 10, direction -1, min -70', function() {
            var list = p.direction(-1).start(-50).count(10).min(-70).get();
            expect(list).toBeDefined();
            expect(typeof list).toBe('object');
            expect(list.length).toBeDefined();
            expect(list.length).toBe(4);
            expect(list).toEqual([-53, -59, -61, -67]);
        });

    });

});