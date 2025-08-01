// app/context/appContext.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import getState from "./store.jsx";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const stateRef = useRef(null); // useRef to always hold latest state

    const [state, setState] = useState({
      store: {},
      actions: {},
    });

    // Define stable references for store/actions
    const getStore = () => stateRef.current?.store || {};
    const getActions = () => stateRef.current?.actions || {};
    const setStore = (updatedStore) =>
      setState((prevState) => {
        const newState = {
          store: { ...prevState.store, ...updatedStore },
          actions: { ...prevState.actions },
        };
        stateRef.current = newState; // keep ref in sync
        return newState;
      });

    // Initialize getState on first render
    useEffect(() => {
      const initialState = getState({ getStore, getActions, setStore });
      stateRef.current = initialState;
      setState(initialState);
    }, []);

    if (!state.store.lang) return null; // avoid flicker on hydration

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
