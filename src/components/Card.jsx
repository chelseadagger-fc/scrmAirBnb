
import star from '../../public/images/star.png'



// interface Props {
//   img: String,
//   rating: String;
//   reviewCount: Number;
//   country: String;
//   title: String;
//   price: Number;
// }

const Card = (Props) => {
  return (
    <>
        <card className="card">
            <img className="card--portrait" src={Props.img} />
            <div className="card--stats">
                <img className="card--rating-star" src={star} />
                <p>{Props.rating} </p>
                <p> ({Props.reviewCount}) • {Props.country}</p>
            </div>
            <p>{Props.title}</p>
            <p><strong>From ${Props.price} </strong>/ person</p>
        </card>
    </>
  )
}

export default Card