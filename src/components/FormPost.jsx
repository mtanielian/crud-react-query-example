import useFormPost from '../hooks/useFormPost'

const FormPost = () => {
  const {handleSubmit, handleForm, form} = useFormPost()

  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={handleForm} value={form.title} />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea name="body" id="body" cols="30" rows="10" onChange={handleForm} value={form.body} />
      </div>
      <div>
        <button type="submit">Save Post</button>
      </div>
    </form>
  )
}

export default FormPost