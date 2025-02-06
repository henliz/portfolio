import React, { useContext } from "react";
// import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";  // Lottie Animation
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";

// Toggle between GIF and Lottie Animation
const illustration = {
  animated: true,  // Keep this for Lottie (not used here but good to keep)
  useGif: true     // Set to true to load the GIF instead of Lottie
};

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {" "}
                Hi, I'm Henriëtta{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
                }
              >
                A human-computer interaction designer & developer 🚀
              </p>
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
                }
                style={{ fontStyle: "italic" }}
              >
                Previously <span style={{ fontStyle: "italic" }}>@ Sun Life & HalalMeals</span>
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <a
                  href={require("./resume.pdf")}
                  download="Henrietta-vanNiekerk-Resume.pdf"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            {illustration.useGif ? (
              <img
                src="/portfolio/girlie.gif"
                alt="Custom Animation"
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <DisplayLottie animationData={landingPerson} />
            )}
          </div>
        </div>
      </div>
    </motion.div>

  );
}
