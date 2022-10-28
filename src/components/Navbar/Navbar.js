import { NavLink } from 'react-router-dom'


const Navbar = ()=> {
    return (
        <nav>
            <NavLink to='/'>
                <h1>Mi Ecommerce</h1>
            </NavLink>
            <div>
                <NavLink to={'/category/finanzas'}>Finanzas</NavLink>
                <NavLink to={'/category/aventura'}>Aventura</NavLink>
                <NavLink to={'/category/desarrollo-personal'}>Desarrollo Personal</NavLink>
            </div>
      </nav>
    )
}

export default Navbar