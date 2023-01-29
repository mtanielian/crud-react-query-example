import { useContext } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { PostContext } from '../contexts/PostContext'
import { deletePost, getPosts } from '../services/post.services'

const useFetchPostsRQ = () => {
  const {setPost} = useContext(PostContext)
  const queryClient = useQueryClient()
  const {data, isLoading, isError} = useQuery({ 
    queryKey: ['posts'], 
    queryFn: () => getPosts({ limit: 10})
  })

  const deletePostMutation = useMutation({
    mutationFn: async (id) => {
      await deletePost(id)
    }, onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })
  
  return { 
    isError, 
    data, 
    isLoading,
    setPost,
    deletePostMutation
  }

}

export default useFetchPostsRQ