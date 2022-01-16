import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Document, Page } from "react-pdf";
import dateFormat from "dateformat";

import classes from "./ClubSetting.module.css";

export default function ClubSetting() {
  const params = useParams();

  const [clubData, setClubData] = React.useState("");
  const [clubName, setClubName] = React.useState(params.cname);

  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  React.useEffect(() => {
    // fetching clubDatas
    const getClubData = async () => {
      const r = await axios.post(`${process.env.REACT_APP_API_KEY}/club`, {
        clubName: clubName,
      });
      return r;
    };
    getClubData().then((r) => {
      console.log("clubData response->", r);
      setClubData(r?.data?.club);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("clubData->", clubData);
  const fetchAchievement = () => {
    const getAchievement = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/fetchAchievements`,
        {
          clubName: clubName,
        }
      );
      return r;
    };
    getAchievement().then((r) => {
      console.log("achievement->", r);
    });
  };
  const pdfViewerHandler = () => {
    window.open(
      `${process.env.REACT_APP_API_KEY}/${clubData?.authDocs}`,
      "_blank"
    );
  };

  return (
    <>
      <div className={classes["setting_wrapper"]}>
        <div className={classes["setting_heading"]}>Club Setting</div>
        <div className={classes["image_container"]}>
          <img
            src={`${process.env.REACT_APP_API_KEY}/${clubData?.clubImage}`}
            alt=""
          />
        </div>

        <div className={classes["setting_body"]}>
          <div className={classes["setting_container"]}>
            <div className={classes["setting_label"]}>
              <label>Club Name</label>
            </div>
            <div className={classes["setting_value"]}>
              <input disabled={true} value={clubData?.name} />
            </div>
          </div>
          <div className={classes["setting_container"]}>
            <div className={classes["setting_label"]}>
              <label>Club Goal</label>
            </div>
            <div className={classes["setting_value"]}>
              <input disabled={true} value={clubData?.goal} />
            </div>
          </div>
          <div className={classes["setting_container"]}>
            <div className={classes["setting_label"]}>
              <label>Club Description</label>
            </div>
            <div className={classes["setting_value"]}>
              <input disabled={true} value={clubData?.disc} />
            </div>
          </div>
          <div className={classes["setting_container"]}>
            <div className={classes["setting_label"]}>
              <label>Authorized By:</label>
            </div>
            <div className={classes["setting_value"]}>
              <input disabled={true} value={clubData?.authorizedBy} />
            </div>
          </div>
          <div className={classes["setting_container"]}>
            <div className={classes["setting_label"]}>
              <label>Created On:</label>
            </div>
            <div className={classes["setting_value"]}>
              <input disabled={true} value={dateFormat(clubData?.createdAt)} />
            </div>
          </div>
          <div className={classes["setting_container"]}>
            <div className={classes["setting_label"]}>
              <label>Authorization Document:</label>
            </div>
            <div className={classes["setting_value"]}>
              {/* <input
                // value={`${process.env.REACT_APP_API_KEY}/${clubData?.clubImage}`}
                value={`${process.env.REACT_APP_API_KEY}/${clubData?.authDocs}`}
              /> */}
              <button onClick={pdfViewerHandler}>View Doc.</button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={fetchAchievement}>fetchAchievement</button>

      <Document
        file={`${process.env.REACT_APP_API_KEY}/${clubData?.authDocs}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
}
