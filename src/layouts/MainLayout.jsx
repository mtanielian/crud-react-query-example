import NavBar from '../components/NavBar'


const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main style={{
        margin: 'auto',
        maxWidth: '1440px',
        padding: '0px 30px',
      }}>
        {children}
      </main>
    </>
  )
}

export default MainLayout