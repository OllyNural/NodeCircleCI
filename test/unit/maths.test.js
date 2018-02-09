const maths = require('../../src/maths')

// Why, what better way to test that a random number is random
// Than to generate another random one and check equality is the same!
describe('Retrieves random number correctly', () => {
    it('Should return 4 as random number', () => {
        expect(maths.randomNumber()).toBe(4)
    })
})