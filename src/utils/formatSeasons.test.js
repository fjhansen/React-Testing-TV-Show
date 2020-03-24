
import data from './dummydata'

import formatSeasons from "./formatSeasons"

test.skip("skip test", () => {
  expect(1 + 1).toEqual(2)
})



// test("Async Await", async () => {

//   const spy = jest.fn()
//   const theFN = formatSeasons(spy) //creates promise


//   const result = await theFN //resolve promise
//   result.debug()
//   // expect(result).toBe("hurray")
//   // expect(spy).toHaveBeenCalledWith("hurray")
//   expect(spy).toHaveBeenCalledTimes(1)
// })

// // jest.mock("./formatSeasons.js", () => {
// //   const myMock = jest.fn()
// //   return {
// //     myMock(() => Promise.resolve({
      
// //     }))
// //   }
// // })