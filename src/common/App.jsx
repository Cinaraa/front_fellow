import './App.css';
import NavBar from './navbar';
import Main_Image from  '../../public/assets/imgs/guerra.png';
// import Logo from '../../public/assets/imgs/logo.png'

function Home() {
  return (
    <>
    {/* <img src={Logo} className='logo-landing-page'/> */}
    <div className="home-container">
        <div className='image-container'>
          <img src={Main_Image} />
          <div className='overlay'>

          
            <p>Bienvenido a DDConsumismo, un lugar en donde podrás divertirte 
              con tus amigos y ver quien logra controlar los medios y factores 
              para producir una riqueza jamás antes vista. ¿Serás tú?
            </p>
            <p>
            Únete a un campo de batalla y compite por adueñarse  
            del campus San Joaquín, pero ten cuidado, este juego 
            es adictivo y puedes terminar en la bancarrota, perdiendo todo lo que has obtenido.
            </p>
            

          </div>

        </div>
    </div>
    <div className='buttons'>
      <a href="/principal">Principal</a>
    </div>
    </>
  );
}
function App() {

  return (
    <>
      <NavBar />
      <Home/>
    </>
  )
}

export default App
