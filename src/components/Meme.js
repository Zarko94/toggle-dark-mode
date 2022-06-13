import React, { useState, useEffect } from "react";
import classes from "./Meme.module.css";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const randomNumber = Math.floor(Math.random() * 100);

  async function getMeme() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.data.memes);
    // console.log(randomNumber);

    setMeme((prevState) => ({
      ...prevState,
      randomImage: data.data.memes[randomNumber].url,
    }));
  }

  const generateMemeHandler = (event) => {
    event.preventDefault();

    getMeme();
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.value);
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className={classes.main}>
      <form className={classes.form} onSubmit={generateMemeHandler}>
        <div>
          <input
            className={classes["form--input"]}
            type="text"
            placeholder="Top text"
            onChange={handleTextChange}
            value={meme.topText}
            name="topText"
          />
          <input
            className={classes["form--input"]}
            type="text"
            placeholder="Bottom text"
            onChange={handleTextChange}
            value={meme.bottomText}
            name="bottomText"
          />
        </div>
        <button type="submit" className={classes["form--button"]}>
          Get a new meme image
        </button>
        <div className="imgHolder">
          <img src={meme.randomImage} alt="jes" className={classes.img} />
          <h5>{meme.topText}</h5>
          <h6>{meme.bottomText}</h6>
        </div>
      </form>
    </main>
  );
}

export default Meme;
