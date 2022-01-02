import React from "react";
import DropSection from "./DropSection";

export default function MemberList({ member, ...props }) {
  const [showDrop, setShowDrop] = React.useState(false);
  const dateFormat = (d) => {
    const today = new Date(d);
    const day = today.toLocaleDateString();

    return `${day}`;
  };
  return (
    <>
      <div onClick={() => setShowDrop((e) => !e)} className="member_list">
        <span>{`${member.prename} (${member.Role})`}</span>
        <span>{"CSE"}</span>
        <span>{dateFormat(member.joinedOn)}</span>
      </div>
      {showDrop && (
        <DropSection
          prename={member?.prename}
          Role={member?.Role}
          id={member?.memberId}
          show={showDrop}
          setShow={setShowDrop}
          clubName={props?.clubName}
          removeMemberHandler={props?.removeMemberHandler}
        />
      )}
    </>
  );
}
