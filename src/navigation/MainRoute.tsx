import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePageAsync } from '../pages/HomePage/HomePage.async'
import { NewsPageAsync } from '../pages/NewsPage/NewsPage.async'

import Spinner from '../components/Spinner/Spinner'

function MainRoute() {
  return (
    <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route path={"/"} element={<HomePageAsync />} />
      <Route path={"/news/:id"} element={<NewsPageAsync />} />
    </Routes>
  </Suspense>
  )
}

export default MainRoute