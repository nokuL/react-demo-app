import React  from "react";
import ReactDOM from 'react-dom';
import './SIdeDrawer.css'
import { CSSTransition } from 'react-transition-group';

const SideDrawer = props => {
  const content = (
    <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
  <aside className="side-drawer">{props.children}</aside>
  </CSSTransition>);
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;