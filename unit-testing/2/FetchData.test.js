const fetchData = require('./FetchData');

test('fetch data test', async()=> {
    const data = await fetchData();
    expect(data).toBe('test');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        const data = await fetchData();
        expect(data).toBe('test');
    } catch (error) {
        expect(error).toMatch('error');
    }
})