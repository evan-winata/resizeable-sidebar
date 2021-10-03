import React from 'react';
import Sidebar from '../../components/Sidebar';
import classes from "./RightSidebar.module.scss";

const RightSidebar = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.content}>Main content here</div>
        <Sidebar position={"right"} maxWidth={400}>
          <div className={classes.content}>Sidebar content here</div>
          <div className={classes.content}><a href="/">Back to home</a></div>
        </Sidebar>
      </div>
    );
  };
  
  export default RightSidebar;