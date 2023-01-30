import InfiniteScroll from 'react-infinite-scroller'
import useFetchPostsInfiniteScroll from '../hooks/useFetchPostInfiniteScroll'


const PostsInfiniteScrollPage = () => {
  const { data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useFetchPostsInfiniteScroll()

  return (
    <div>
      <div>PostsInfiniteScrollPage</div>
      <div>
        {status === 'loading' && <div>Loading posts...</div>}
        {status === 'error' && <div>Error...</div>}
        {status === 'success' && (
          <>
            <div>Total de posts: {data.pages[0].total}</div>
            <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
              {data.pages.map(({data: posts}) => 
                posts.map(({id, title, body}) =>  (
                  <div key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                ))
              )}
            </InfiniteScroll>
          </>
        )}
      </div>
    </div>
  )
}

export default PostsInfiniteScrollPage