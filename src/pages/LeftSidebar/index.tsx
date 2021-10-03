import React from 'react';
import Sidebar from '../../components/Sidebar';
import classes from "./LeftSidebar.module.scss";

const LeftSidebar = () => {
    return (
      <div className={classes.wrapper}>
        <Sidebar position={"left"} maxWidth={400}>
          <div className={classes.content}>Sidebar content here</div>
          <div className={classes.content}><a href="/">Back to home</a></div>
        </Sidebar>
        <div className={classes.content}>Main content here</div>
      </div>
    );
  };
  
  export default LeftSidebar;