
import photogrid from '../../public/images/photo-grid.png'

export default function Hero() {
    return (
        
        <div className="hero">
            <img src={photogrid} className="hero--photogrid" />
            <h1>Online Experiences</h1>
            <h2>Join unique interactive activities led by one-of-a-kind hosts -- all without leaving home.</h2>
        </div>
        
    )
}