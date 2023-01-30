import api from './api'

export const getPosts = async ({ limit = 10 }) => {
  const response = await api.get(`/posts?_limit=${limit}&_order=desc&_sort=id`)
  return { 
    data: response.data, 
    total: response.headers['x-total-count'] 
  }
}

export const getPostsMore = async ({ limit = 10, page = 1 }) => {
  const response = await api.get(`/posts?_limit=${limit}&_order=desc&_sort=id&_page=${page}`)
  return { 
    data: response.data, 
    total: response.headers['x-total-count'] 
  }
}

export const savePost = async (post) => {
  const {data} = await api.post('/posts', post)
  return data
}

export const deletePost = async (id) => {
  const {data} = await api.delete(`/posts/${id}`)
  return data
}

export const updatePost = async (post) => {
  const {data} = await api.put(`/posts/${post.id}`, post)
  return data
}