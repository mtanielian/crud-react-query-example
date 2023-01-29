import ReactDOM from 'react-dom/client'
import Router from './routes/router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PostProvider } from './contexts/PostContext'
import './index.css'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <PostProvider>
      <Router />
    </PostProvider>
  </QueryClientProvider>
)

