import NavBar from '../common/navbar'
import the_fellows from '../../public/assets/imgs/the_fellows.jpg'
import Bea from '../../public/assets/imgs/bea.jpg'
import Cesar from '../../public/assets/imgs/cesar.jpeg'
import './about.css'

export default function About(){
    return (
        <>
            <NavBar/>
            <div className="about-container">
                    <div className='about-image-container'>
                    <img src={the_fellows} />
                    <div className='about-overlay'>
                        <p>Sobre el equipo: Somos estudiantes de la Universidad Católica, y dado que venimos a San Joaquín todos los dias, 
                        siempre hemos tenido el impulso de conquistar el campus de una vez por todas.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-members">
                <div className="member">
                    <img src={Cesar} />
                    <p>Cesar es Estudiante de tercer año de ingeniería, con major en computación y minor en operativas.
                Le gustan mucho los deportes, las series (serie favorita: Breaking bad), y aprender.
                Es una persona alegre, comprometida y amigable.</p>
                </div>
                <div className="member">
                    <img src={Bea} />
                    <p>Beatriz Goycoolea, es una estudiante de cuarto año de College, estudiando ingeniería con mayor en la computación.
                Sus hobbies son la cocina, las manualidades y los videojuegos. 
                Es una persona muy apasionada, ezforzada y alegre.</p>
                </div>
            </div>
        </>

    )
}
