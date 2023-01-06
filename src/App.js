import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 0;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  const deletePara = (indice, elemento) => {
    console.log({ elemento });
    console.log({ indice });
    setText(text.filter((val) => val !== elemento));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>{" "}
              <button
                className="deletedButton"
                onClick={() => {
                  deletePara(index, item);
                }}
              >
                Delete
              </button>
              <hr />
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
