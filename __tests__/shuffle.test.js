const shuffle = require("../src/shuffle");
console.log(shuffle)

describe("shuffle should...", () => {
  test("check that shuffle returns an array", async () => { 
    const result = shuffle([1,2,3,4,5,6,7])
    expect(Array.isArray(result)).toBe(true)
  })
  test("check array is same length as input array", async () => {
    const result = shuffle([1,2,3,4,5,6,7])
    expect(result.length).toBe(7)
  })
});
