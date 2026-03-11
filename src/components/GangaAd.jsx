import React from "react";
import "./GangaAd.css";
import gangaAd from "../assets/Ganga Arti.jfif";

export default function GangaAd() {
  return (
    <section className="ganga-ad">
      <div className="ganga-ad__image">
        <img src={gangaAd} alt="Ganga Boat Ride" />
      </div>
      <div className="ganga-ad__content">
        <h2>Ganga Boat Ride</h2>
        <p>
          Experience the timeless beauty of Varanasi with a complimentary serene boat ride on the sacred Ganga.
        </p>
      </div>
    </section>
  );
}
