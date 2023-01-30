import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPostsMore } from '../services/post.services'


const useFetchPostsLoadMore = () => {
  const [page, setPage] = useState(1)
  const limit = 10
  const {
    isLoading,
    isError,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['postsMore', page],
    queryFn: () => getPostsMore({ limit, page }),
    keepPreviousData : true
  })
  
  
  return {
    page,
    setPage,
    isLoading,
    isError,
    data,
    isFetching,
    isPreviousData,
    hasMore: data && data.total ? data.total > page * limit : false
  }
}

export default useFetchPostsLoadMore