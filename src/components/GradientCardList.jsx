import React from "react";
import GradientCard from "./GradientCard";
import "./GradientCardList.css";
import { generateGradientShades } from "../utils/colorVariants";

const GradientCardList = ({ baseColor }) => {
  const shades = generateGradientShades(baseColor);

  return (
    <div className="gradient-card-wrapper">
      <div className="gradient-card-list">
        {shades.map((shade, index) => (
          <GradientCard key={index} color={shade} />
        ))}
      </div>
    </div>
  );
};

export default GradientCardList;
