const {filterName}  = require('../input')

describe('Validate the input field', () => {
    test('check if name is empty', ()=> {
        expect(filterName()).toBe('unknown');
    })
});