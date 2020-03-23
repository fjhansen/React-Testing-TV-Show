import axios from 'axios'
import React from 'react'


import * as rtl from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// jest.mock("axios", () => {
//   return {
//     get: jest.fn(() => Promise.resolve({
//       data: {
//         message: ["test"]
//       }
//     }))
//   }
// })

afterEach(rtl.cleanup);

test("<App/> Snapshot of Fetching data", async () => {
const wrapper = rtl.render(<App/>)
await wrapper.findAllByText(/fetching/i)

expect(wrapper.asFragment()).toMatchSnapshot()
})

test("<App/> Snapshot Full", async () => {
  const wrapper = rtl.render(<App/>)
  await wrapper.findAllByText(/stranger/i)
  
  expect(wrapper.asFragment()).toMatchSnapshot()
  })