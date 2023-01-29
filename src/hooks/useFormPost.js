import { useContext, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostContext } from '../contexts/PostContext'
import { savePost, updatePost } from '../services/post.services'

const useFormPost = () => {
  const { post } = useContext(PostContext)
  const queryClient = useQueryClient()
  const [form, setForm] = useState({ title: '', body: '', userId: 1 })

  useEffect(() => {
    if (!post || Object.keys(post).length === 0) return
    setForm(post)
  }, [post])


  const handleForm = ({target}) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const savePostMutation = useMutation({
    mutationFn: async (form) => { 
      await savePost(form) 
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const updatePostMutation = useMutation({
    mutationFn: async (form) => {
      await updatePost(form)
    }, onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (form.title !== '' && form.body !== '') {
      if (!form.id) {
        savePostMutation.mutate(form)
      } else {
        updatePostMutation.mutate(form)
      }
      
      setForm({ title: '', body: '', userId: 1 })
    }
  }

  return {
    handleSubmit,
    handleForm,
    form
  }

}

export default useFormPost