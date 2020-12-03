import React, {createContext} from "react";

const InputContext = createContext({
  display: false,
  symptoms: "",
  Durations:"",
  Qualities:"",
  Radiations:"",
  PainLevel:"",
  AssSymps:"",
  Pallatives:"",
  Provocatives:"",
  Quantities: "",
});

export default InputContext;