import './Nav.css'

// RouterDom Import............
import { NavLink } from 'react-router-dom'

// FontAwesome Import............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Data Import..................
import { navLinks } from '../../data/Data'

// UseState Import...............
import { useState } from 'react'


export default function Nav() {

  // UseState Function..........
  const [showmenu, setShowmenu] = useState(false);
  let MenuHandler=()=>{
    setShowmenu(!showmenu);
  }

  return (
    <nav>
      <ul className={`${showmenu ? 'navlinks navlinks-show' : 'navlinks'}`}>
        {
          navLinks.map(({id, name, path, icon})=>{
            return(
              <li className='nav-item' key={id}>
                <NavLink to={path} className={({isActive})=>
                  isActive ? 'nav-link navlinksActive' : 'nav-link'}>
                  <span><FontAwesomeIcon icon={icon} /></span>
                  <h3>{name}</h3>
                </NavLink>
              </li>
            )
          })

        }
      </ul> 
      <div className={`${showmenu ? 'nav-toggle nav-close' : 'nav-toggle'}`}
      onClick={MenuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
