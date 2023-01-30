import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPostsMore } from '../services/post.services'

const useFetchPostsInfiniteScroll = () => {
  const limit = 10
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['postsInfinite'],
    queryFn: ({ pageParam = 1 }) => getPostsMore({ limit, page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage && lastPage.total > pages.length * limit) {
        return pages.length + 1
      }
      return undefined
    },
    keepPreviousData: true
  })

  
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  }

}

export default useFetchPostsInfiniteScroll