import './Home.css'
import HeaderImage from '../../assets/header.jpg'

// FontAwesome Import.....................
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Router Dom Link.........................
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <header>
      
      <div className='container container-lg header-container'>
        <img src={HeaderImage} alt='' />
        <div className="header-right">
          <h1>
            <span>Hi, I'm Gil Cunha</span><br />
            Data Engineer
          </h1>
          <h4>I consider myself a Data Engineer, however, I'm also keen on
						Software Engineering, Software Architecture and Business Intelligence areas.
          </h4>
          <br /><br />
          <p>”Knowledge is power” <br />
							- Francis Bacon (1597)
          </p>
          <Link className='btn' to={'/about'}>
            About Me
            <span><FontAwesomeIcon icon={faArrowRight} /></span>
          </Link>
        </div>
      </div>
    </header>
  )
}
