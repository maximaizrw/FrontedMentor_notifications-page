import React from "react";

const Follow = (props) => {
  return (
    <div
      className={`${
        props.unread ? "bg-neutral-very-light-grayish-blue" : "bg-neutral-white"
      }  rounded-lg p-2 flex gap-4`}
    >
      <img src={props.image} className="w-8 h-8" />
      <div className="text-xs">
      <div className="text-neutral-dark-grayish-blue flex gap-x-1 items-center">
          <span className="text-neutral-very-dark-blue font-bold cursor-pointer hover:text-primary-blue">
            {props.user}
          </span>{" "}
          followed you{" "}
          <div className={`w-1 h-1 rounded-full bg-primary-red ${props.unread? "":"hidden"}`}></div>
        </div>
        <p className="text-neutral-grayish-blue">{props.time}</p>
      </div>
    </div>
  );
};

export default Follow;
