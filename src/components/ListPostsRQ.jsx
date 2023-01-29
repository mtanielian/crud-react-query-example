import useFetchPostsRQ from '../hooks/useFetchPostsRQ'


const ListPostsRQ = () => {
  const { isLoading, isError, data = [], setPost, deletePostMutation } = useFetchPostsRQ()
  const { total = 0, data:posts = [] } = data
  
  return (
    <>
      <div>ListPosts QR</div>
      {isLoading && <div>Cargado posts....</div>}
      {isError && <div>Error al cargar los posts intente en unos minutos....</div>}
      {posts.length > 0 && 
        <>        
          <div>Total de posts: {total}</div>
          <div style={{maxWidth: '500px', margin: 'auto'}}>
            {posts.map( ({id, title, body }) => (
              <div key={id} 
                style={{
                  width: '80%',
                  height: '80%',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  backgroundColor: '#5b6dcd',
                  color: '#fff',
                  padding: '10px',
                  borderRadius: '30px',
                  marginBottom: '10px'
                }}
              >
                <h3>{title}</h3>
                <p>{body}</p>
                <button onClick={()=> setPost({id, title, body})}>Editar</button>
                <button onClick={()=> deletePostMutation.mutate(id)}>Eliminar</button>
              </div>
            ))}
          </div>
        </>
      }
    </>
  )
}

export default ListPostsRQ