import React, { Component, Fragment } from "react";
import style from "./scss/style.module.scss";
import Header from '../../components/Header/Header';

class Test extends Component {
   render() {
      return (
         <Fragment>
            <Header></Header>
            <div className={style.container}>
            </div>
         </Fragment>
      )
   }
}

export default Test;
