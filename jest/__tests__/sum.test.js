const {sum} = require('../sum');

describe('math tests', ()=> {
    test('sum test', ()=> {
        expect(sum(1,2)).toBe(3)
    });

    test('sum test 2', ()=> {
        expect(sum(10, 20)).toBe(30);
    })
})