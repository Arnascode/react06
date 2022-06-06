import './App.css';
import Card from './components/servi/serviceCard';
import ServicesCardList from './components/servi/serviceData';
import TitleS from './components/servi/serviceTitle';

function App() {
  return (
    <div className='serviceSection'>
      <TitleS />
      {/* <section className='serviceCards'>
        <Card
          title={'Air freight'}
          icon={'fa-plane'}
          summary={
            'The earth brought forth vegetation: plants yielding seed, and fruit trees of every kind on earth that bear fruit with the seed in it.'
          }
        />
      </section> */}
      <ServicesCardList />
    </div>
  );
}

export default App;
