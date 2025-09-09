import React from 'react'
import ExampleCarouselImage from "../../../../assets/Images/header-image-1.png";
import ExampleCarouselImage1 from "../../../../assets/Images/header-image-2.png";
import ExampleCarouselImage2 from "../../../../assets/Images/header-image-3.png";
import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaAppleAlt, FaSpa } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "./LandingCarsoual.css"

const LandingCarsoual = () => {


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section
      className="home-main-wrapper"
      style={{
        overflow: "hidden",
      }}
    >

      <div className="home-container-carousel" style={{
        width: "100%",
        height: "40vh"
      }}>
        <Slider {...settings} className="home">
          <div className="car" style={{
            height:"100%"
          }}>
            <div className="image-container">
              <img src={ExampleCarouselImage} className="d-block w-100" alt="Moringa Mittai" />
              <div className="gradient-overlay"></div>
            </div>

            <div className="carousel-caption">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <span className="hero-carousel-highlight">
                  Wholesome Crunch
                  <span style={{ marginLeft: "10px" }}>
                    <FaLeaf />
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-carousel-title"
              >
                Moringa <span style={{ color: "#ffffff" }}>Mittai</span>
              </motion.h1>

              <motion.h5
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3"
              >
                Made with Moringa, Jaggery, and Elaichi. A healthy twist to traditional sweetness. 🌿
              </motion.h5>


            </div>
          </div>

          {/* Slide 2 */}
          <div className="car" style={{
            height:"100%"
          }}>
            <div className="image-container">
              <img src={ExampleCarouselImage1} className="d-block w-100" alt="Karuppu Kavuni Mittai" />
              <div className="gradient-overlay"></div>
            </div>

            <div className="carousel-caption">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <span className="hero-carousel-highlight">
                  Heritage Sweetness
                  <span style={{ marginLeft: "10px" }}>
                    <FaSeedling />
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-carousel-title"
              >
                Karuppu Kavuni <span style={{ color: "#ffffff" }}>Mittai</span>
              </motion.h1>

              <motion.h5
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3"
              >
                Traditional Black Rice meets natural Jaggery. A bite full of taste & nutrition. 🌾
              </motion.h5>


            </div>
          </div>

          {/* Slide 3 */}
          <div className="car" style={{
            height:"100% "
          }}>
            <div className="image-container">
              <img src={ExampleCarouselImage2} className="d-block w-100" alt="Guru Uruthi Snacks" />
              <div className="gradient-overlay"></div>
            </div>

            <div className="carousel-caption">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <span className="hero-carousel-highlight">
                  Authentic Taste, Natural Goodness
                  <span style={{ marginLeft: "10px" }}>
                    <FaSpa />
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-carousel-title"
              >
                Guru <span style={{ color: "#ffffff" }}>Uruthi</span> Snacks
              </motion.h1>

              <motion.h5
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3"
              >
                We bring you premium quality snacks with a healthy twist — blending tradition with wellness.
              </motion.h5>


            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default LandingCarsoual