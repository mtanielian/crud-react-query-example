import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import PostsPage from '../pages/PostsPage'
import PostsLoadMorePage from '../pages/PostsLoadMorePage'
import PostsInfiniteScrollPage from '../pages/PostsInfiniteScrollPage'



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/posts" element={<MainLayout><PostsPage /></MainLayout>} />
        <Route path="/posts-load-more" element={<MainLayout><PostsLoadMorePage /></MainLayout>} />
        <Route path="/posts-infinite-scroll" element={<MainLayout><PostsInfiniteScrollPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router