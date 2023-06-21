import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'


const Card = () => {
  return (
    <>
        <card className="card">
            <img className="card--portrait" src={katie} />
            <div className="card--stats">
                <img className="card--rating-star" src={star} />
                <p>5.0 </p>
                <p> (6) • USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136 </strong>/ person</p>
        </card>
    </>
  )
}

export default Card