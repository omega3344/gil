import './Services.css'

// Components Import..............
import Card from '../../UI/Card'
import HeadingText from '../HeadingText/HeadingText'

// Data Import....................
import { services } from '../../data/Data'

// FontAwesome Icon Import..............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services() {
  return (
    <section className='services'>
        <HeadingText title={'Education'} titlePrimary={'& Skills'} />  

        <div className="container services-container">
            {
                services.map(({id, icon, des1, des2, des3})=>{
                    return(
                        <Card key={id} classname={'services-card'}>
                            <span><FontAwesomeIcon icon={icon} /></span>
                            <h3>{des1}</h3>
                            <h3>{des2}</h3>
                            <h3>{des3}</h3>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}
