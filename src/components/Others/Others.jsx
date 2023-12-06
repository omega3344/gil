import './Others.css'

// Components Import..............
import Card from '../../UI/Card'
import HeadingText from '../HeadingText/HeadingText'

// Data Import....................
import { others } from '../../data/Data'

// FontAwesome Icon Import..............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Others() {
  return (
    <section className='others'>
        <HeadingText title={'Publications, Conferences'} titlePrimary={'and Seminars'} />

        <div className="container others-container">
            {
                others.map(({id, name, link, des})=>{
                    return(
                        <Card key={id} classname={'others-card'}>
                            <h3>{name}</h3>
                            <a href={link}><h3>{des}</h3></a>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}
