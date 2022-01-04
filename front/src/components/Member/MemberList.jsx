import React from "react";
import DropSection from "./DropSection";
import user from '../../assets/userProfile.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function MemberList({ member, ...props }) {
  const [showDrop, setShowDrop] = React.useState(false);
  const dateFormat = (d) => {
    const today = new Date(d);
    const day = today.toLocaleDateString();

    return `${day}`;
  };
  return (
    <>
      <div  className="member_list">
        <img src= {user} alt=""/>
           <span className="member_name">{`${member.prename} (${member.Role})`}</span>
        < MoreVertIcon className="member_list_toggle" onClick={() => setShowDrop((e) => !e)}/>
       <div className="member_list_info">
          <span>{"CSE"}</span>
        <span>{dateFormat(member.joinedOn)}</span>
       </div>
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
