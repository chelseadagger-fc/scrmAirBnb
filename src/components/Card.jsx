
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
            <img className="card--portrait" src={"../../public/images/" + Props.img} />
            <div className="card--stats">
                <img className="card--rating-star" src={star} />
                <p>{Props.rating} </p>
                <p> ({Props.reviewCount}) • {Props.location}</p>
            </div>
            <p className="card--title">{Props.title}</p>
            <p className="card--price"><strong>From ${Props.price} </strong>/ person</p>
        </card>
    </>
  )
}

export default Card