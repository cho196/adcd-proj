import data from "../data/about.json";
import NavBar from "../comps/NavBar/NavBar";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div>
      <title>Dishcovery</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/dc_logo.png" />

      <img className="DClogo" src="dc_logo.svg"></img>

      <NavBar />
      <div className="about">
        <h1>About Us</h1>
        <a href="/">
          <button className="Backbutton">Back</button>
        </a>

        <div className="aboutcard">
          <img className="cherylphoto" src="cherylphoto.png"></img>
          <h2>{data.cheryl.name}</h2>
          <h3>{data.cheryl.role}</h3>
          <p>{data.cheryl.description}</p>
        </div>

        <div className="aboutcard">
          <img className="gianphoto" src="gianphoto.png"></img>
          <h2>{data.gian.name}</h2>
          <h3>{data.gian.role}</h3>
          <p>{data.gian.description}</p>
        </div>
      </div>
    </div>
  );
}
