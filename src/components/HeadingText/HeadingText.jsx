import './HeadingText.css'

export default function HeadingText({title, titlePrimary}) {
  return (
    <h2 className='Heading-text'>
        {title} <span>{titlePrimary}</span>
    </h2>
  )
}
