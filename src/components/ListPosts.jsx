import useFetchPosts from '../hooks/useFetchPosts'


const ListPosts = () => {
  const { loading, error, total, posts } = useFetchPosts()
  return (
    <>
      <div>ListPosts</div>
      {loading && <div>Cargado posts....</div>}
      {error && <div>Error al cargar los posts intente en unos minutos....</div>}
      {posts.length > 0 && 
        <>        
          <div>Total de posts: {total}</div>
          <pre>{JSON.stringify(posts, null, 2)}</pre>
        </>
      }
    </>
  )
  
}

export default ListPosts