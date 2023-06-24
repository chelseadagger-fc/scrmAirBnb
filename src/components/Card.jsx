
import star from '../../public/images/star.png'
import PropTypes from 'prop-types';



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
  if (props.card.openSpots === 0) {
    badgeText = <div className="card--badge">SOLD OUT</div>;
  } else if (props.card.location === "Online") {
    badgeText = <div className="card--badge">ONLINE</div>
  }

  return (
    <>
        <card className="card">
          {badgeText}
          <img className="card--portrait" src={"../../public/images/" + props.card.coverImg} />
          <div className="card--stats">
              <img className="card--rating-star" src={star} />
              <p>{props.card.stats.rating} </p>
              <p> ({props.card.stats.reviewCount}) • {props.card.location}</p>
          </div>
          <p className="card--title">{props.card.title}</p>
          <p className="card--price"><strong>From ${props.card.price} </strong>/ person</p>
        </card>
    </>
  )
}

export default Card

Card.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      id: Number,
      coverImg: String,
      rating: Number,
      reviewCount: Number,
      location: String,
      title: String,
      price: Number,
    })
  )
}