import Image from "./Image"
import About from './About'

function Player() {

    {
        const player = "Fredrik Ljungberg"

        return (
            <div className="card-ö2">
                <h1 className="card-ö2__title"> {player} </h1>
                <Image />
                <About />
            </div>
        )
    }
}

export default Player
