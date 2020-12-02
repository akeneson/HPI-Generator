import React, {createContext} from "react";

const InputContext = createContext({
  display: false,
  symptoms: "",
  Durations:"",
  Qualities:"",
  Radiations:"",
  AssSymps:"",
  Pallatives:"",
  Provocatives:"",
  Quantities: "",
});

export default InputContext;