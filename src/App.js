import './App.css';

function App() {
  return (
    <div className='serviceSection'>
      <section className='Title'>
        <h1>OUR SERVICES</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
      <section className='serviceCards'>
        <div className='serviceCard'>
          <div className='icon'>
            <i className='fa fa-facebook-official' aria-hidden='true'></i>
          </div>
          <div className='text'>
            <h3>Air Freight</h3>
            <p className='servP'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum fuga
              ut incidunt adipisci magni!
            </p>
            <a href='###'>Learn more</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
