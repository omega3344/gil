import './Portfolio.css'

// Components Import...............
import Card from '../../UI/Card'
import HeadingText from '../../components/HeadingText/HeadingText'

// Data Import.......................
import { portfolio } from '../../data/Data'


export default function Portfolio() {
  return (  
    <>
    <section className='portfolio'>
      <HeadingText title={'Work'} titlePrimary={'Experience'} />

      <div className="container portfolio-container">
        {
          portfolio.map(({id, img, name, des1, des2})=>{
            return(
              <Card classname={'project'} key={id}>
                <img src={img} alt='' />
                <h3>{name}</h3>
                <p>{des1}</p>
                <p>{des2}</p>
              </Card>
            )
          })
        }
      </div>
    </section>
    </>
  )
}
