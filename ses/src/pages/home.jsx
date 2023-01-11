import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import { motion, useScroll } from "framer-motion";

function Home() {
  return (
    <div className="main">
      <div className="home">
        <Link to="/" className="logo">
          <img src={require("../assets/images/logo.png")} alt="logo"></img>
        </Link>
        <img
          className="rock"
          src={require("../assets/images/rock.png")}
          alt="the wok"
        />
        <img
          className="bubble"
          src={require("../assets/images/bubble.png")}
          alt="the wok"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.5, duration: 1.2 },
          }}
        >
          <p className="motto">Proximity to </p>
          <p className="motto mottopp"> Infinity</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 2,
            transition: { delay: 2, duration: 1.2, bounce: 0.5 },
            x: 400,
            y: 200,
          }}
        >
          <p>Space</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 2,
            transition: { delay: 2.5, duration: 1.2 },
            x: 400,
            y: 250,
          }}
        >
          <p>Exploration Society</p>
        </motion.div>

        <div className="part1">
          <div>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 2,
              transition: { delay: 0.5, duration: 1.2 },
              x: 200,
              y: 100,
            }}
          >
            <p>Welcome to SES</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
