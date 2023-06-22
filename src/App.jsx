import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import katie from './images/katie-zaferes.png'
/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img={katie}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}