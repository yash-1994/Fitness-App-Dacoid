import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBase } from "@mui/material";


const GoalPage = () => {
  const navigate = useNavigate();
  const checkboxValues = [
    { id: "weightLoss", label: "Weight Loss" },
    { id: "muscleGain", label: "Muscle Gain" },
    { id: "flexibilityAndMobility", label: "Flexibility and Mobility" },
    { id: "generalFitness", label: "General Fitness" },
    { id: "eventSpecificTraining", label: "Event - specific training" },
    {
      id: "mindfulnessAndMentalHealth",
      label: "Mindfulness and Mental Health",
    },
  ];

  return (
    <div className="w-full h-full relative">
      <div className="p-1   text-xl font-semibold leading-6 text-center mt-3">
        <p>What are your goals?</p>
      </div>
      <div className="mt-8">
        {checkboxValues.map((d, i) => (
          <Checkbox key={i} label={d.label} />
        ))}
      </div>
      <div className="h-[85px] absolute bottom-0 w-full">
        <div className="flex items-center justify-between">
          <ButtonBase
          className="w-full"
             onClick={() => {
              setTimeout(() => {
                navigate("/home");
              }, 300);
             }}>
            <button
            className="w-full hover:ring-2 ring-blue-400 h-[50px] bg-gradient-to-r from-[#95BEFF] to-[#7B91FF]  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Confirm
          </button>
          </ButtonBase>

          
        </div>
      </div>
    </div>
  );
};

const Checkbox = (props) => {
  return (
    <div className="flex items-center px-5 my-4 rounded-lg bg-[#F1F1F1]">
      <label className="w-full py-4 text-sm font-medium text-gray-900 ">
        {props.label}
      </label>
      <input
        type="checkbox"
        value=""
        className="w-5 h-5 text-blue-600  border-gray-300 rounded-md bg-[#F1F1F1]"
      />
    </div>
  );
};

export default GoalPage;
