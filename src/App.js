import './App.css';
import Form from './Form.js';

function App() {
  return (
    <div className="App">
      <div className="li nav-item">
        <div className="flower-animations">
          <div className="flower">
          </div>
          <div className="flower">
          </div>
        </div>
        <div className="top text">
          Dedicated to Andrea
        </div>
      </div>

      <div className="wrapper">
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope">
          <div className="heart">
          </div>
        </div>
        <div className="letter">
          <figure>
            <p>Dear Andrea, </p>
            <div className="lettertext">
              Ever since the day I laid my eyes on you, I knew that I wanted you to be my uwu e-kitten for the rest of my life. I know this is sudden but I can't help it. You're in my mind 24/7 and I can't get you out of it.<br></br><br></br> I want to take care of you, as my uwu kitten, for the rest of my life. If you could give me a chance to prove myself to you, I will give you the world.
              <br></br><br></br>I will shower you with valorant RR and drop a Vandal you even if I don't have enough money for myself. You will be in my name, my hashtag, my heart and most importantly, my arms. I will love Cooper unconditionally as I do for you. UWU. I love you forever.
              <br></br><br></br> Yours Sincerely, <br></br>Andrea's Future Jett Daddy.
              <br></br><br></br><b> Will you be my uwu e-kitten?</b> <br></br><br></br>
              <Form />
            </div>
          </figure>

        </div>
      </div>
      <div className="hovertext">
        <p>Hover to open letter </p>
      </div>


    </div>
  );
}

export default App;