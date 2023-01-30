import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'

const nav = [
  { path: '/', name: 'Home' },
  { path: '/posts', name: 'Posts' },
  { path: '/posts-load-more', name: 'Posts More' },
  { path: '/posts-infinite-scroll', name: 'Posts Infinite scroll'}
]
const NavBar = () => {
  const location = useLocation()

  return (
    <nav>
      <ul>
        {nav.map(({path, name}) => (
          <li key={path} className={`${location?.pathname === path ? 'active' : ''}`}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar