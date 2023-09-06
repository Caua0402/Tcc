import logo from '../../assets/logo.png'
import exit from '../../assets/vector.svg'
import clean from '../../assets/img-home.png'

import './style.css'


export const Home = () => {
  return (
    <>
      <header>
        <img src={logo} className='logoEmpresa' />
        <div className='links'>
          <a>Lorem</a>
          <a>Lorem</a>
          <a>Lorem</a>
          <a>Lorem</a>
        </div>
        <div className='button'>
          <a href='#'>Log in</a>
          <img src={exit} className='exitButton' />
        </div>
      </header>
      <main>
        <section className='blue'>
          <div className='card'>
            <div className='texts'>
              <h1>Deixe sua casa mais limpa</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='bottons'>
                  <a href='#' className='diarista'>Sou diarista <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M9.5 3.5L8.785 4.1965L12.575 8H2.5V9H12.575L8.785 12.7865L9.5 13.5L14.5 8.5L9.5 3.5Z" fill="white"/>
</svg></a>
                  <a href='#' className='contratante'>Sou contratante <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M9.5 3.5L8.785 4.1965L12.575 8H2.5V9H12.575L8.785 12.7865L9.5 13.5L14.5 8.5L9.5 3.5Z" fill="white"/>
</svg></a>
            </div>
          </div>
          <div className='img'>
              <img src= {clean} />
          </div>
          
        </section>
        <section className='beneficios'>

        </section>
      </main>
    </>
  );
}



