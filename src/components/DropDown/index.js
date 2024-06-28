import React, { useState } from "react";
import { DownArrowIcon } from "../../assets/Icons";

const DropDown = ({ dropDownList, selectedValue, setSelectedValue }) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="dropDown flex items-center justify-center flex-col relative">
      <div className="category flex items-center">
        <div
          className="cbox cleanbtn flex items-center relative pointer"
          onClick={(e) => {
            e.stopPropagation();
            setHide(!hide);
          }}
        >
          <div className="slt flex items-center">
            <div className="unit-name flex items-center font s14 b4">
              <span
                className="unit-eng flex items-center font s14 b4"
                placeholder="Plano"
              >
                {selectedValue ? selectedValue.label : ""}
              </span>
            </div>
          </div>

          <div className="arrow-icon flex items-center justify-center">
            <DownArrowIcon />
          </div>
        </div>
      </div>
      <div className={`block flex items-center absolute ${hide ? "show" : ""}`}>
        <div className="manue flex items-center flex-col anim">
          {dropDownList.map((item, index) => (
            <div
              key={index}
              className="slt flex items-center gap-1 justify-between"
              onClick={(e) => {
                setHide(!hide);
                setSelectedValue(item);
              }}
            >
              <div className="unit-name flex items-center font s14 b4">
                <span className="unit-eng flex items-center font s14 b4">
                  {item.label}
                </span>
              </div>
              <div className="unit-name flex items-center font-normal text-xs">
                <span className="unit-eng flex items-center font s14 b4">
                  0
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
