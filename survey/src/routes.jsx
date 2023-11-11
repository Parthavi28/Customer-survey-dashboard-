import React from 'react'
import {Route, Routes} from "react-router-dom"
import Table from './component/Table'

import Chart from './component/Chart'
const PageRoutes = () => {
  return (
    <div>
          <Routes>
              <Route path="/" element={<Table/> } />
              <Route path="/data" element={<Chart/>}/>
      </Routes>
    </div>
  )
}

export default PageRoutes