import React from "react";
import "./Participant.css";
import { participant } from "./ParticipantPerson";

const Participant = () => {
  return (
    <div className="participant">
      <div className="participant_container">
        <div className="participant_heading">
          <div>
            <h3>All Participant</h3>
          </div>
          <div>
            <span>
              Total : <strong id="participant_value">3</strong> Participant
            </span>
          </div>
        </div>
        <div className="participant_lists">
          <div className="participant_list_heading">
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
            <div className="participant_list_person">
              <div className="participant_name">
                <span
                  //   style={{ marginRight: "10px" }}
                  className="participant_check"
                >
                  <input type="checkbox" name="yes" id="yes" />
                </span>
                <span>Basant</span>
              </div>
              <div className="participant_roll">
                <span>301602218031</span>
              </div>
              <div className="participant_email">
                <span>basantshori1999@gmail.com</span>
              </div>
            </div>
            {participant.map((item) => {
              return (
                <>
                  <div className="participant_list_person" key={item.id}>
                    <div className="participant_name">
                      <span
                        //   style={{ marginRight: "10px" }}
                        className="participant_check"
                      >
                        <input type="checkbox" name="yes" id="yes" />
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <div className="participant_roll">
                      <span>{item.roll}</span>
                    </div>
                    <div className="participant_email">
                      <span>{item.email}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participant;
