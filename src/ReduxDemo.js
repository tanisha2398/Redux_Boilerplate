import React, { Component } from "react";
import { createStore } from "redux";

class ReduxDemo extends Component {
  render() {
    const reducer = (state, action) => {
      if (action.type === "ATTACK") {
        return action.payload;
      }
      if (action.type === "GREEN_ATTACK") {
        return action.payload;
      }
      return state;
    };
    const store = createStore(reducer, "tabnis");

    store.subscribe(() => {
      console.log("Store is", store.getState());
    });
    store.dispatch({ type: "ATTACK", payload: "paki" });
    store.dispatch({ type: "GREEN_ATTACK", payload: "greenattack" });
    return <div>text</div>;
  }
}
export default ReduxDemo;
