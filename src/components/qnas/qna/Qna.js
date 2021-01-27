import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";

import useStyles from "./qnaStyles";

const Qna = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(true);
  const showInfo = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.question}>
      <div
        style={{
          display: "flex",
        }}
      >
        <h3 style={{ margin: "0", width: "90%" }}>{props.title}</h3>
        <span className={classes.icon} onClick={showInfo}>
          {isOpen ? (
            <BiPlusCircle></BiPlusCircle>
          ) : (
            <BiMinusCircle></BiMinusCircle>
          )}
        </span>
      </div>
      <div>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default Qna;
