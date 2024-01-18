import "./App.css";
import Photography from "./assets/photography-logo.svg";
import Development from "./assets/development-logo.svg";
import Logo from "./assets/logo.svg";
import Name from "./assets/cera-contesse-name.svg";
import YellowStar from "./assets/star-yellow.svg";
import BlueStar from "./assets/star-blue.svg";
import PinkStar from "./assets/star-pink.svg";
import OrangeStar from "./assets/star-orange.svg";
import { motion } from "framer-motion";
import { useRef } from "react";

// useEffect(() => {
//   const scrollers = document.querySelectorAll(".scroller");

//   // If a user hasn't opted in for reduced motion, then we add the animation
//   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//     addAnimation(scrollers);
//   }
// }, []);

function App() {
  const constraintsRef = useRef(null);
  return (
    <div className="App">
      <div className="left">
        <img src={Logo} alt="" className="logo" />
        <div className="left__content">
          <div className="flex">
            <h3>CREATE YOUR VISION</h3>
            <img src={YellowStar} alt="" className="star" />
          </div>
          {/* <h1 className="title">CONTESSE STUDIOS</h1> */}
          <div className="scroller">
            <img src={Name} alt="" className="name scroller__inner" />
          </div>
          {/* <img src={Name} alt="" className="name" /> */}
          <p>
            Whether you are a brand seeking a distinctive identity, a filmmaker
            aiming for cinematic excellence, or a business looking to make a
            lasting impression, Contesse Studios is your creative partner on
            this exciting journey. We specialize in a diverse range of media
            production and design services, from video production and animation
            to graphic design and branding.
            <br></br>
            <br></br>
            What sets us apart is not just our technical expertise, but our
            commitment to understanding your unique story and translating it
            into captivating visual content. Our collaborative approach ensures
            that each project is a true reflection of your brand, values, and
            aspirations.
            <br></br>
            <br></br>
            At Contesse Studios, we embrace the latest technologies and trends,
            staying at the forefront of the ever-evolving media landscape. Our
            state-of-the-art facilities and cutting-edge equipment empower us to
            bring your ideas to life with unmatched precision and creativity.
          </p>
          <button className="contact__button">CONTACT</button>
          <div className="stars">
            <img src={OrangeStar} alt="" className="star__bottom" />
            <img src={PinkStar} alt="" className="star__bottom" />
            <img src={BlueStar} alt="" className="star__bottom" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="design">
          <h2>DESIGN</h2>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <p>D</p>
          </motion.div>
        </div>
        {/* <motion.div className="development" ref={constraintsRef}>
          <h2>WEB DEVELOPMENT</h2>
          <motion.div drag dragConstraints={constraintsRef}>
            <img src={Development} alt="" />
          </motion.div>
        </motion.div> */}
        <div className="development" ref={constraintsRef}>
          <h2>WEB DEVELOPMENT</h2>
          <img src={Development} alt="" />
        </div>
        <div className="photography">
          <h2>PHOTOGRAPHY</h2>
          <img src={Photography} alt="" />
        </div>
        <div className="mediaConsultancy">
          <h2>MEDIA CONSULTANCY</h2>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <p>M</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
