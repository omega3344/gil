import './About.css'
import CV from '../../assets/CV.pdf'

// FontAwesome Import...................
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

// Components Import...................
import HeadingText from '../../components/HeadingText/HeadingText'
import Tools from '../../components/Tools/Tools'
import Services from '../../components/Services/Services'
import Others from '../../components/Others/Others'

export default function About() {
  return (
    <>
    <section className='About'>
      <HeadingText title={'About'} titlePrimary={'Me'}/>

      <div className="container about-container">
        <div className="about-left">
          <h2>Hello, my name is Gil Cunha</h2>
          <p>
            And I'm from Guimarães, Portugal.
						Having achieved a Master's Degree in Informatics Engineering at the <a href="https://www.uminho.pt/EN/" className='uminho'>University of Minho</a>, 
            I'm a person who enjoys working in a team and has good communication with his colleagues. I work hard to accomplish my objectives, 
						always trying to give the best quality and efficiency to the projects/products of my company.
          </p>
          <a href={CV} download className='btn'>
            Download CV <span><FontAwesomeIcon icon={faDownload} /></span>
          </a>
        </div>
      </div>
    </section>
    <Tools />
    <Services />
    <Others />
    </>
  )
}
