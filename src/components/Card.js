import React from "react";
import classes from "./Card.module.css";
import gps from "../assets/Fill 219.png";

function Card({ data }) {
  return (
    <div>
      {data.map((data) => (
        <div key={data.title} className={classes["card-container"]}>
          <img
            className={classes["card-img"]}
            src={data.imageUrl}
            alt={data.title}
          />
          <div className={classes["informations-container"]}>
            <div className={classes["location-container"]}>
              <div className={classes.location}>
                <img src={gps} alt="gps" /> {data.location}
              </div>
              <a href={data.googleMapsUrl} target="_blank">
                View on Google Maps
              </a>
            </div>
            <h2 className={classes.title}>{data.title}</h2>
            <div className={classes.dates}>
              {data.startDate} - {data.endDate}
            </div>
            <p className={classes.description}>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
