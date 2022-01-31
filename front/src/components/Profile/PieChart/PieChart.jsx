import { CanvasJSChart } from "canvasjs-react-charts";
import React from "react";
import classes from "./PieChart.module.css";

const PieChart = ({ user }) => {
  console.log("participatedEvents->", user);
  console.log("AtetnedeEvents->", user?.attendedEvents?.length);

  const total = user?.participatedEvents?.length;
  const p =
    ((user?.participatedEvents?.length - user?.attendedEvents?.length) /
      total) *
    100;
  const a = (user?.attendedEvents?.length / total) * 100;

  const options = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "User performance chart",
    // exportEnabled: true,
    title: {
      text: "User performance chart",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          {
            y: p,
            label: "Participated Events",
          },
          {
            y: a,
            label: "Attended Events",
          },
          //   { y: 6, label: "Education" },
          //   { y: 19, label: "Career" },
          //   { y: 5, label: "Family" },
          //   { y: 7, label: "Real Estate" },
        ],
      },
    ],
  };
  return (
    <div className={classes["pie_chart-container"]}>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
};
export default PieChart;
