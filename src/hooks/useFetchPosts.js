import { useEffect, useState } from 'react'
import { getPosts } from '../services/post.services'

const useFetchPosts = () => {
  const [error, setError] = useState(false)
  const [total, setTotal] = useState(0)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)


  const loadPosts = async () => {
    try {
      const {data, total} = await getPosts({ limit : 10})
      setPosts(data)
      setTotal(total)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }


  useEffect(() => {
    loadPosts()
  },[])

  return { error, total, posts, loading }

}

export default useFetchPosts