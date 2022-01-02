import React from "react";
import HeatMap from "@uiw/react-heat-map";
import classes from "./DialyHeatmap.module.css";

const value = [
  { date: "2016/01/11", count: 2 },
  { date: "2016/01/12", count: 20 },
  { date: "2016/01/13", count: 10 },
  ...[...Array(17)].map((_, idx) => ({
    date: `2016/02/${idx + 10}`,
    count: idx,
    content: "",
  })),
  { date: "2016/04/11", count: 2 },
  { date: "2016/05/01", count: 5 },
  { date: "2016/05/02", count: 5 },
  { date: "2016/05/04", count: 11 },
  { date: "2016/12/04", count: 11 },
  { date: "2016/12/28", count: 1 },
  { date: "2016/12/31", count: 1 },
];

const DailyHeatmap = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <div className={classes["heatmap-container"]}>
      <HeatMap
        width={720}
        value={value}
        startDate={new Date("2016/01/01")}
        rectRender={(props, data) => {
          if (selected !== "") {
            props.opacity = data.date === selected ? 1 : 0.45;
          }
          return (
            <rect
              {...props}
              onClick={() => {
                setSelected(data.date === selected ? "" : data.date);
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default DailyHeatmap;
