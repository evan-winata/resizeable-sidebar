import React from "react";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
          The following are the sample of the usage of the sidebar component:
      </div>
      <div>
        <a href="/leftside">Sidebar on the left side of the page</a>
      </div>
      <div>
        <a href="/rightside">Sidebar on the right side of the page</a>
      </div>
      <div>
        <a href="/bothside">Sidebar on both the left and right side of the page</a>
      </div>
    </div>
  );
};

export default Home;
