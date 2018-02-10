const maths = require('./maths')

test('Should return 4 as random number', () => {
    expect(maths.randomNumber()).toBe(4)
})