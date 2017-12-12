
const Request = require('./simple');


test('Simple chain of responsability', () => {
    const request = new Request(450);
    
    request.get(100).get(50).get(20).get(5);

    expect(request.amount).toBe(0);
    
})
