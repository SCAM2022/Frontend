import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import "./Participant.css";
// import { participant } from "./ParticipantPerson";

const Participant = () => {
  const params = useParams();
  const [participant, setParticipant] = React.useState([]);
  const [eventData, setEventData] = React.useState([]);

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
              <span>Email</span>
            </div>
          </div>
          <div className="participant_list">
            {participant.map((item) => {
              return (
                <>
                  <div className="participant_list_person" key={item.id}>
                    <span
                      //   style={{ marginRight: "10px" }}
                      className="participant_check"
                    >
                      <input type="checkbox" name="yes" id="yes" />
                    </span>
                    <div className="participant_name">
                      <span>{item?.name}</span>
                    </div>
                    <div className="participant_roll">
                      <span>{item?.roll}</span>
                    </div>
                    {/* <div className="participant_email">
                      <span>{item?.email}</span>
                    </div> */}
                    <div className="participant_email">
                      <span>{item?.branch}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="participants-btn_container">
            <div className="showEvent_btn">
              <button>Submit</button>
              {/* <button className="setReminder">SET REMINDER</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;
