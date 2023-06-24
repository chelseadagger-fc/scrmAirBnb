
import star from '../../public/images/star.png'



// interface Props {
//   img: String,
//   rating: String;
//   reviewCount: Number;
//   country: String;
//   title: String;
//   price: Number;
// }

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = <div className="card--badge">SOLD OUT</div>;
  } else if (props.location === "Online") {
    badgeText = <div className="card--badge">ONLINE</div>
  }

  return (
    <>
        <card className="card">
          {badgeText}
          <img className="card--portrait" src={"../../public/images/" + props.img} />
          <div className="card--stats">
              <img className="card--rating-star" src={star} />
              <p>{props.rating} </p>
              <p> ({props.reviewCount}) • {props.location}</p>
          </div>
          <p className="card--title">{props.title}</p>
          <p className="card--price"><strong>From ${props.price} </strong>/ person</p>
        </card>
    </>
  )
}

export default Card

Card.propTypes = {
  id: Number,
  img: String,
  rating: Number,
  reviewCount: Number,
  location: String,
  title: String,
  price: Number,
  openSpots: Number
}