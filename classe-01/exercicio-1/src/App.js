import './App.css';
import Profile from '../src/assets/gabriela.jpg';
import IconPrev from '../src/assets/icon-prev.svg';
import IconNext from '../src/assets/icon-next.svg';

function App() {
  return (
    <div classNameName="App">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p className="review-text">“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não
            consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro
            brilhante!”</p>
          <div className="author__content-wrapper">
            <div className="author__name">Gabriela da Silva</div>
            <div className="author__title">Desenvolvedora Fullstack</div>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel__img-wrapper">
            <img src={Profile} alt="bootcamp graduate" className="carousel__img" />
          </div>
          <div className="carousel__btn-wrapper">
            <button id="btn-prev" className="btn btn--previous"><img src={IconPrev}
              alt="previous button" /></button>
            <button id="btn-next" className="btn btn--next"><img src={IconNext}
              alt="next button" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
