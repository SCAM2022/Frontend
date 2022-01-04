import React from "react";
import Model from "../../Ui/Model/Model";
import SuccessSvg from "../../../assets/joinsuccess.svg";
import tick from "../../../assets/checked.png";
import classes from "./JoinSuccess.module.css";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

export default function JoinSuccess(props) {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const [joinedModel, setJoinedModel] = React.useState(false);

  return (
    <>
      <Model
        showModel={joinedModel}
        setShowModel={setJoinedModel}
        onClose={props.closeModel}
      >
        {props?.joining ? (
          <div className={classes["joined_loader"]}>
            <HashLoader
              color={"green"}
              loading={true}
              css={override}
              size={300}
            />
          </div>
        ) : (
          <div className={classes["joined_wrapper"]}>
            <div className={classes["joined_container"]}>
              <img src={tick} alt="" />
              <div className={classes["joined-title"]}>{props.message}</div>
              <div className={classes["joined-btn"]} onClick={props.closeModel}>
                Close
              </div>
            </div>
          </div>
        )}
      </Model>
    </>
  );
}
