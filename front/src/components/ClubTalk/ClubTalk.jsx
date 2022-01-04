import React from "react";
import { connect } from "react-redux";
import classes from "./ClubTalk.module.css";
import Error from "../Ui/Error/Error";
import Message from "./Message";
const data = [
  {
    userId: 1,
    time: new Date(),
    sender: "dezx",
    message:
      "whats up Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut eaque! Neque praesentium, odio voluptatibus sequi amet cum vitae illo veniam perspiciatis temporibus! Labore, molestias ratione fugiat vel maxime dicta",
  },
  {
    userId: 2,
    time: new Date(),
    sender: "dezx2",
    message:
      "whats up2Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut eaque! Neque praesentium, odio voluptatibus sequi amet cum vitae illo veniam perspiciatis temporibus! Labore, molestias ratione fugiat vel maxime dicta",
  },
  {
    userId: 3,
    time: new Date(),
    sender: "dezx3",
    message:
      "whats up3Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut eaque! Neque praesentium, odio voluptatibus sequi amet cum vitae illo veniam perspiciatis temporibus! Labore, molestias ratione fugiat vel maxime dicta",
  },
  {
    userId: "61d180b63e1c947da5bc0af1",
    time: new Date(),
    sender: "dezx4",
    message:
      "whats up3Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut eaque! Neque praesentium, odio voluptatibus sequi amet cum vitae illo veniam perspiciatis temporibus! Labore, molestias ratione fugiat vel maxime dicta",
  },
  {
    userId: 5,
    time: new Date(),
    sender: "dezx5",
    message:
      "whats up5Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut eaque! Neque praesentium, odio voluptatibus sequi amet cum vitae illo veniam perspiciatis temporibus! Labore, molestias ratione fugiat vel maxime dicta",
  },
  {
    userId: "61d180b63e1c947da5bc0af1",
    time: new Date(),
    sender: "dezx6",
    message:
      "whats up6Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut eaque! Neque praesentium, odio voluptatibus sequi amet cum vitae illo veniam perspiciatis temporibus! Labore, molestias ratione fugiat vel maxime dicta",
  },
  {
    userId: "61d180b63e1c947da5bc0af1",
    time: new Date(),
    sender: "dezx7",
    message:
      "whats up7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut eaque! Neque praesentium, odio voluptatibus sequi amet cum vitae illo veniam perspiciatis temporibus! Labore, molestias ratione fugiat vel maxime dicta",
  },
];
const ClubTalk = (props) => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState(data);
  const [error, setError] = React.useState("");

  const messageSendHandler = (e) => {
    e.preventDefault();
    if (!props?.userData) {
      console.log("login first");
      setError("User must be logged-in to send message!");

      return;
    }
    if (!message) {
      setError("input something");

      return;
    }
    const data = {
      message: message,
      sender: props?.userData?.name,
      userId: props?.userData?._id,
      time: new Date(),
    };
    console.log("data->", data);
    setMessages((d) => {
      return [...d, data];
    });
    setMessage("");
  };

  return (
    <>
      <Error error={error} setError={setError} />

      <div className={classes["container_wrapper"]}>
        <div className={classes["talk_heading"]}>
          <h1>club talks</h1>
        </div>
        <div className={classes["talk_container"]}>
          <div className={classes["talk_messages"]}>
            {messages?.map((d) => (
              <Message
                sender={d.sender}
                message={d.message}
                time={d.time}
                userId={d.userId}
                currentUserId={props?.userData?._id}
              />
            ))}
          </div>
          <form
            className={classes["talk_send_message"]}
            onSubmit={messageSendHandler}
          >
            <input
              type="text"
              name="mesg"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <button type="submit" className={classes["talk-send_btn"]}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps)(ClubTalk);
