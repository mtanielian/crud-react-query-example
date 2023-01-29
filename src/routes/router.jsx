import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import PostsPage from '../pages/PostsPage'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/posts" element={<MainLayout><PostsPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router