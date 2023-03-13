import React from "react";

const Reaction = (props) => {
  return (
    <div
      className={`${
        props.unread ? "bg-neutral-very-light-grayish-blue" : "bg-neutral-white"
      }  rounded-lg p-2 flex gap-4`}
    >
      <div>
      <img src={props.image} className="w-8 h-8" />
      </div>
      
      <div className="text-xs">
        <div className="text-neutral-dark-grayish-blue flex gap-x-1 items-center">
          <div>
            <span className="text-neutral-very-dark-blue font-bold cursor-pointer hover:text-primary-blue">
              {props.user}
            </span>{" "}
            reacted to your recent post{" "}
            <span className="font-bold cursor-pointer hover:text-primary-blue">
              {props.post}
            </span>
            <div
              className={`ml-1 w-1 h-1 rounded-full inline-block bg-primary-red align-middle ${
                props.unread ? "" : "hidden"
              }`}
            >
              &nbsp;
            </div>
          </div>
        </div>
        <p className="text-neutral-grayish-blue">{props.time}</p>
      </div>
    </div>
  );
};

export default Reaction;
