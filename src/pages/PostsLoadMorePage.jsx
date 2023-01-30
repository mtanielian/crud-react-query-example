import React from 'react'
import useFetchPostsLoadMore from '../hooks/useFetchPostsLoadMore'

const PostsLoadMorePage = () => {
  const { 
    page,
    setPage,
    isLoading,
    isError,
    data,
    isFetching,
    hasMore
  } = useFetchPostsLoadMore()

  return (
    <div>
      <div>PostsLoadMorePage</div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error getting data</div>
        ) : (
          <div>
            {data.data.map(project => (
              <p key={project.id}>{project.title}</p>
            ))}
          </div>
        )}
        <span>Current Page: {page}</span>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
      Previous Page
        </button>{' '}
        <button
          onClick={() => {
            if (hasMore) {
              setPage(old => old + 1)
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={!hasMore}
        >
      Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}{' '}
      </div>
    </div>
  )
}

export default PostsLoadMorePage