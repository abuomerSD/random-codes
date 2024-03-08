const { printName } = require('../../test1');

test.only('print test', ()=> {
    expect(printName('eltayeb')).toBe('eltayeb');
})