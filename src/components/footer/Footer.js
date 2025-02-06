import React, {useContext} from "react";
import "./Footer.scss";
//import {Fade} from "react-reveal";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="footer-div"
    >
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("Programmed with ❤️ and ☕ by Henriëtta")}
      </p>
    </motion.div>
  );
}
