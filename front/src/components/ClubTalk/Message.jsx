import React from "react";
import dateFormat from "dateformat";
import classes from "./Message.module.css";
export default function Message({
  message,
  sender,
  time,
  userId,
  currentUserId,
}) {
  return (
    <div
      className={`${classes["message_wrapper"]} ${
        userId === currentUserId ? classes["message_right"] : ""
      }`}
    >
      <div className={classes["message-container"]}>
        <div className={classes["message_title"]}>
          <div className={classes["message_sender"]}>{sender}</div>
          <div className={classes["message_time"]}>{dateFormat(time)}</div>
        </div>
        <div className={classes["message_content"]}>{message}</div>
      </div>
    </div>
  );
}
