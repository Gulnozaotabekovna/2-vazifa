import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <h2>K. Griffith</h2>
            <ul>
              <li>
                <a href="#" >APPEARANCES</a>
              </li>
              <li>
                <a href="#">BOOKS</a>
              </li>
              <li>
                <a href="#">NEWS</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="TitlePage">
          <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg"></img>
          <div>
            <h1>Kayla Griffith</h1>
            <p>Award Winning Author</p>
          </div>
        </div>
        <div className="logoBox">
          <img src="https://static.wixstatic.com/media/c4392d634a0148fda8b7b2b0ad98293b.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4392d634a0148fda8b7b2b0ad98293b.png"></img>
          <img src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0678ef25486466ba65ef6ad47b559e1.png"></img>
        </div>
        <div className="NewRelease">
          <div>
            <p className="etiket">New Release</p>
            <div>
              <h2>The Swan Isle (2035)</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <h3>Order Now</h3>
              <div>
                <button>Amazon</button>
                <button>Google</button>
                <button>ibooks</button>
              </div>
            </div>
          </div>
          <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png"></img>
        </div>
        <div className="Praise">
          <h1>Praise & Reviews</h1>
          <div className="boxParagraph">
            <div>
              <h2>"</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <h6>
                ‘Swan Isle’ is Griffith's best writing yet” The Times Book
                Review
              </h6>
              <div className="line"></div>
            </div>
            <div>
              <h2>"</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <h6>‘Gripping storytelling’ The Good Read Blog</h6>
              <div className="line"></div>
            </div>
            <div>
              <h2>"</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <h6>
                Grifith’s voice tells the story of all women “The Seattle Post
                Review”
              </h6>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="SeeUpcomingAppearances">
          <h1>See Upcoming Appearances</h1>
          <h2>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy.
          </h2>
          <div className="joinBox">
            <p>
              January 18th 2035, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST
            </p>
            <button>Join</button>
          </div>
          <div className="joinBox">
            <p>
              January 31st 2035, The Good Read Club, Online Conversation with
              Kayla Griffith, 8PM - 9PM EST
            </p>
            <button>Join</button>
          </div>
          <div className="joinBox">
            <p>
              March 2nd 2035, Otto Cafe, Online Book Reading With Kayla
              Griffith, 3PM - 4PM EST
            </p>
            <button>Join</button>
          </div>
          <div className="about">
            <img src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg"></img>
            <h1>About Kayla Griffith</h1>
            <h2>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </h2>
            <button>Read More</button>
          </div>
        </div>
        <footer>
          <p>© 2035 by K.Griffith. Powered and secured by <span><a href="#">Wix</a></span></p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
