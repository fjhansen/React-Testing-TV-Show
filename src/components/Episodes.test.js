import axios from 'axios'
import React from 'react'


import * as rtl from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Episodes from "./Episodes"

test("<Episodes/> Snapshot Full", async () => {
  const wrapper = rtl.render(<Episodes episodes={[]}/>)
  await wrapper.findAllByTestId(/episodes/i)
  

  expect(wrapper.asFragment()).toMatchSnapshot()
  })