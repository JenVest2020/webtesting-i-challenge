const { repair } = require('./enhancer.js');
const enhancer = require('./enhancer.js');

describe('enhancer methods', () => {
    describe('repair helper', () => {
        it('should return a new item with durability of 100', () => {
            expect(enhancer.repair({
                name: 'repair',
                durability: 75,
                enhancement: 30,
            })).toEqual({
                name: 'repair',
                durability: 100,
                enhancement: 30
            });
        })
    })

    describe('success helper', () => {
        it('should increase durability by 1', () => {
            expect(enhancer.success({
                name: 'success',
                durability: 100,
                enhancement: 18
            })).toEqual({
                name: 'success',
                durability: 100,
                enhancement: 19
            });
        })
    })

    describe('fail helper', () => {
        it('should decrease durability according to  enhancement level', () => {
            expect(enhancer.fail({
                name: 'fail',
                durability: 100,
                enhancement: 14
            })).toEqual({
                name: 'fail',
                durability: 95,
                enhancement: 14
            });

            expect(enhancer.fail({
                name: 'fail',
                durability:100,
                enhancement: 16
            })).toEqual({
                name:'fail',
                durability: 90,
                enhancement: 16
            });
        })

        it('should decrease enhancement according to the previous enhancement level', () => {
            expect(enhancer.fail({
                name: 'fail',
                durability: 100,
                enhancement: 17
            })).toEqual({
                name: 'fail',
                durability: 90,
                enhancement: 16
            })
        })
    })
})
