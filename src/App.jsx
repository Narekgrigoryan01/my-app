import React from "react";
import './assets/stayle/index.scss'
import logo1 from './assets/images/logo1.png'
import blog from './assets/images/blog.jpg'
import nkar1 from './assets/images/nkar1.png'
import nkar2 from './assets/images/nkar2.png'
import nkar3 from './assets/images/nkar3.png'
import nkar4 from './assets/images/nkar4.png'

class App extends React.Component {
  render() {
    return <div className="container">
      <header>
        <div className="logo" style={{ backgroundImage: `url('${logo1}')` }}>
        </div>
        <div className="pages">
          <a href="#2">Home</a>
          <a href="#2">About</a>
          <a href="#2">More Pages</a>
          <a href="#2">Contact</a>
          <button className="button">SIGN IN / SIGN UP</button>
        </div>
      </header>
      <div className="blog" style={{ backgroundImage: `url('${blog}')` }}>
        <p>AWESOME, CUSTOMIZABLE, FREE</p>
        <div className="buttons">
          <button className="button_more">MORE INFO</button>
          <button className="button_download">DOWNLOAD NOW</button>
        </div>
      </div>
      <div className="blog2">
        <p>The best place to tell people why they are here</p>
        <h1>The difference between involvement and commitment is like an eggs-and-ham breakfast:<br />+
          the chicken was involved; the pig was committed.</h1>
      </div>
      <div className="list">
        <div className="nkar1" style={{ backgroundImage: `url('${nkar1}')` }}>
          <p>Bootstrap-powered</p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, a dignissimos dolorem repellat porro fugiat, voluptatem assumenda perferendis quod voluptas maxime. Eligendi minus optio odit dignissimos sequi. Voluptatibus, repellat ab!</h3>

        </div>
        <div className="nkar2" style={{ backgroundImage: `url('${nkar2}')` }}>
          <h3 className="fat-free">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, a dignissimos dolorem repellat porro fugiat, voluptatem assumenda perferendis quod voluptas maxime. Eligendi minus optio odit dignissimos sequi. Voluptatibus, repellat ab!</h3>


        </div>
        <div className="nkar3" style={{ backgroundImage: `url('${nkar3}')` }}>
          <p>Creative Commons</p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, a dignissimos dolorem repellat porro fugiat, voluptatem assumenda perferendis quod voluptas maxime. Eligendi minus optio odit dignissimos sequi. Voluptatibus, repellat ab!</h3>

        </div>
        <div className="nkar4" style={{ backgroundImage: `url('${nkar4}')` }} >
          <p>Author's support</p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, a dignissimos dolorem repellat porro fugiat, voluptatem assumenda perferendis quod voluptas maxime. Eligendi minus optio odit dignissimos sequi. Voluptatibus, repellat ab!</h3>

        </div>
      </div>
    </div>
  }
}
export default App