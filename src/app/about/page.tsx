// pages/about.js
import Image from "next/image";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to our hat store! {`We’re`} passionate about offering the best hats for every occasion. From vintage styles to modern designs, each hat in our collection is crafted with quality materials and attention to detail.
      </p>

      <div className="about-image-section">
        <Image src="/store hat.png" width={400} height={300} alt="Our Store Front" className="about-image"/>
        <Image src="/hat.png" width={400} height={300} alt="Hat Collection" className="about-image"/>
      </div>

      <p className="about-description">
        Our journey started with a love for hats and a commitment to quality. We believe a hat is more than just an accessory; {`it’s`} a style statement. Our team works hard to ensure that every hat you see here is not only stylish but comfortable and long-lasting.
      </p>
    </div>
  );
}
