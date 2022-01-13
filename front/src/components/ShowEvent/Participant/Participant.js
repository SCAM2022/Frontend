import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import ParticipantList from "./ParticipantList";
import "./Participant.css";

const Participant = () => {
  const params = useParams();
  const [participant, setParticipant] = React.useState([]);
  const [eventData, setEventData] = React.useState([]);
  const [checkList, setCheckList] = React.useState([]);

  React.useEffect(() => {
    const getParticipants = async () => {
      const getEveData = await axios.post(
        `${process.env.REACT_APP_API_KEY}/fetchSingleEvent`,
        {
          eveName: params.evename,
        }
      );
      console.log("event details->", getEveData?.data?.eveInfo[0]);
      setEventData(getEveData?.data?.eveInfo[0]);

      const participants = await axios.post(
        `${process.env.REACT_APP_API_KEY}/fetchParticipationList`,
        {
          eveId: getEveData?.data?.eveInfo[0]?._id,
        }
      );
      console.log("participants Details->", participants);
      setParticipant(participants?.data?.participatedStudents);
    };
    getParticipants().catch((e) =>
      console.log("error in getting participants", e)
    );
  }, []);

  const handleCheck = (participant, check) => {
    console.log("checked data->", participant, check);
    if (check) {
      setCheckList((e) => {
        return [...e, participant];
      });
    } else {
      setCheckList((e) => {
        const tmp = e.filter((i) => i?._id !== participant?._id);

        return tmp;
      });
    }
  };

  const submitHandler = () => {
    console.log("submit clicked->", checkList);
    const sendParticipants = async () => {
      const sendData = await axios.post(
        `${process.env.REACT_APP_API_KEY}/addEventsToProfile`,
        {
          date: new Date(),
          eventId: eventData?._id,
          eventName: params.evename,
          participatedStudents: checkList,
        }
      );
      console.log("sending participants data->", sendData);
    };
    sendParticipants().catch((e) =>
      console.log("error in getting sending participantsList", e)
    );
  };

  return (
    <div className="participant">
      <div className="participant_container">
        <div className="participant_heading">
          <div>
            <h3>All Participant</h3>
          </div>
          <div>
            <span>
              Total :{" "}
              <strong id="participant_value">{participant?.length}</strong>{" "}
              Participant
            </span>
          </div>
        </div>
        <div className="participant_lists">
          <div className="participant_list_heading">
            <div></div>
            <div>
              <span>Name</span>
            </div>
            <div>
              <span>Roll N0.</span>
            </div>
            <div>
              <span>Branch</span>
            </div>
            <div>
              <span>Email</span>
            </div>
          </div>
          <div className="participant_list">
            {participant.map((item) => {
              return <ParticipantList item={item} handleCheck={handleCheck} />;
            })}
          </div>
          <div className="participants-btn_container">
            <div className="showEvent_btn">
              <button className="participantBtn" onClick={submitHandler}>
                Submit
              </button>
              {/* <button className="setReminder">SET REMINDER</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;
