import { CanvasJSChart } from "canvasjs-react-charts";
import React from "react";
import classes from "./PieChart.module.css";

const PieChart = () => {
  const options = {
    theme: "dark2",
    animationEnabled: true,
    exportFileName: "New Year Resolutions",
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
          { y: 102, label: "Health" },
          { y: 4, label: "Finance" },
          { y: 6, label: "Education" },
          { y: 19, label: "Career" },
          { y: 5, label: "Family" },
          { y: 7, label: "Real Estate" },
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
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};
export default PieChart;
