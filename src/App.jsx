import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"
import "./App.css"



export default function App() {

    const cardElements = cardData.map(card => {
        return <Card 
                key={card.id}
                card={card}
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