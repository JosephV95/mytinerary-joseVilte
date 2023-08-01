import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <header>
        <nav>
          <h2>My Tinerary</h2>
          <div className="navlink">
          <a href="">Home</a>
          <a href="">Cities</a>
          <button type="button">Login</button>
          </div>
          
        </nav>
        
      </header>

      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h3>Find the perfect destination</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis eius accusamus, excepturi, ea suscipit obcaecati,
                  perferendis similique quisquam tempore exercitationem
                  sapiente. Id repudiandae dolorem cumque officiis consectetur
                  iste aliquam doloribus.
                </p>
                <button type="button">View More</button>
              </div>
              <div className="col-5">
                <img src={reactLogo} alt="imgReact" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
