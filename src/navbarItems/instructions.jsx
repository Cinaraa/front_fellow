import NavBar from "../common/navbar"
// import Tablero from '../../public/assets/imgs/tablero.png'
// import Ficha from '../../public/assets/imgs/verde.png'
// import Casa from '../../public/assets/imgs/casa.png'
import './instructions.css'

function ComponenteJuego(src,title,Descripcion){
    return(
        <div className="card-instruction">
                        {/* <img src={src} alt='Tablero' className="img-instruction"/> */}
                        <div className="intro-instruction">
                            <h1>{title}</h1>
                            <p className="p-instruction"> {Descripcion}</p>
                        </div>
                    </div>
    )
}
function Instructions(){
    return (
        <div className="body-instruction">
            <NavBar/>
            <br></br>
            <br></br>
            <div className="main-instruction">
                <h1 className="title-instruction">Componentes del juego</h1>  
                <div className="container-instruction">
                    {/* {ComponenteJuego(Tablero,"Tablero","El Tablero es el terreno de batalla en donde los jugadores competirán para ver quién se queda con el campus San Joaquín")}
                    {ComponenteJuego(Ficha,"Ficha","La Ficha representa a cada jugador")}
                    {ComponenteJuego(Casa,"Casa","La Casa, hazte dueño, mejoralas y veras tu gloria divina.")} */}
                </div>

            </div>
        </div>
    )
}

export default Instructions;
