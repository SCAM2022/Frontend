import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinner}>
      <h2>Loading....</h2>
    </div>
  );
};

export default LoadingSpinner;
