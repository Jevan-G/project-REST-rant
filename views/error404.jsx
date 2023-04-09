const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/hot-air-ballons.jpg" alt="Hot Air Ballons" height='600px'
                    width='500px'/>
                    <div>
                        Photo by <a href="AUTHOR_LINK">Ian Dooley</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
          </main>
      </Def>
    )
  }  

module.exports = error404;
