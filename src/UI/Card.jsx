import './Card.css'

export default function Card({classname, children}){
  return (
    <article className={`card ${classname}`}>
        {children}
    </article>
  )
}
