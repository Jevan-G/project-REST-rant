const React = require('react')
const Def = require('../default');

function index (data) {
    let placesFormatted = data.places.map((places, index) => {
      return (
        <div className='col-sm-6'>
          <h2> <a href={`/place/${index}`}>
            {places.name}</a></h2>
          <p className='text-left'>
            {places.cuisines}
          </p>
          <img src={places.pic} alt={places.name}></img>
          <p className='text-left'>
            Located in the {places.city}, {places.state}
          </p>
        </div>
      )
    })
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