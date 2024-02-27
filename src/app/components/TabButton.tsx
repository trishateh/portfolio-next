import React from "react";
import { motion } from "framer-motion";

interface ITabButton {
  active: boolean;
  selectTab: () => void;
  children: any;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};

const TabButton = (props: ITabButton) => {
  const buttonClasses = props.active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {props.children}
      </p>
      <motion.div
        animate={props.active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
