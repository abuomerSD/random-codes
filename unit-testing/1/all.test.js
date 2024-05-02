const returnVariable = require('./all');

test('null check', ()=> {
    let x = null;

    expect(x).toBeNull();
});

test('undefined test', ()=> {
    expect(returnVariable()).toBeUndefined();
});

test('true test', ()=> {
    expect(returnVariable(true)).toBeTruthy();
});

test('false test', ()=> {
    expect(returnVariable(false)).toBeFalsy();
});