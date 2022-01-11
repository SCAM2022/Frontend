import React from "react";

export default function ParticipantList({ item, ...props }) {
  const [checked, setChecked] = React.useState(item?.isAttend);
  console.log("checked->", checked);
  //   React.useEffect(() => {
  //     props.handleCheck(item, checked);
  // }, [checked]);
  const checkHandler = () => {
    setChecked((e) => {
      props.handleCheck(item, !e);

      return !e;
    });
  };

  return (
    <>
      <div className="participant_list_person" key={item.id}>
        <span
          //   style={{ marginRight: "10px" }}
          className="participant_check"
        >
          <input
            type="checkbox"
            name="yes"
            id="yes"
            value={checked}
            onChange={checkHandler}
            defaultChecked={checked}
          />
        </span>
        <div className="participant_name">
          <span>{item?.name}</span>
        </div>
        <div className="participant_roll">
          <span>{item?.roll}</span>
        </div>
        <div className="participant_email">
          <span>{item?.branch}</span>
        </div>
        <div className="participant_email">
          <span>{item?.email}</span>
        </div>
      </div>
    </>
  );
}
