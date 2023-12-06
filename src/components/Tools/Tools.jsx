import './Tools.css'

// Components Import..............
import HeadingText from '../HeadingText/HeadingText'

// Data Import....................
import { tools } from '../../data/Data'

export default function Tools() {
  return (
    <section className='tools'>
        <HeadingText title={'Work'} titlePrimary={'Tools'} />
        <div className="container tools-container">
        {
           tools.map(({id, img})=>{
            return(
                <img src={img} key={id} />
            )
           }) 
        }
        </div>
    </section>
  )
}
