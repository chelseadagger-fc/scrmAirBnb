import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"
import "./App.css"



export default function App() {

    const cardElements = cardData.map(card => {
        return <Card 
                key={card.id}
                img={card.coverImg} 
                rating={card.stats.rating} 
                reviewCount={card.stats.reviewCount} 
                location={card.location}
                title={card.title}
                price={card.price}
                openSpots={card.openSpots}
                />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}