const { add } = require('./exercises');

describe("Test", () => {
  it("add 1,2", () => {
    expect(add(1,2)).toEqual(2)
  })
})
