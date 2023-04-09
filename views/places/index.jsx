const React = require('react')
const Def = require('../default');

function index ({data}) {
    let placesFormatted = data.map((place) => {
      return (
        <div className='col-sm-6'>
          <h2>{place.name}</h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}/>
          <p>
            Located in the {place.city}, {place.stae}
          </p>
        </div>
      );
    });
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Def>
  );
  }
  

module.exports = index;