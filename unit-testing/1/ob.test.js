const addObjProps = require('./ob');

test('object test', ()=> {
    expect(addObjProps('two', 2)).toEqual({one: 1, two:2});
})