import React from "react";

const Message = (props) => {
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
          <span className="text-neutral-very-dark-blue font-bold cursor-pointer hover:text-primary-blue">
            {props.user}
          </span>{" "}
          sent you a private message{" "}
          <span className="font-bold cursor-pointer hover:text-primary-blue">
            {props.post}
          </span>
          <div
            className={`w-1 h-1 rounded-full bg-primary-red ${
              props.unread ? "" : "hidden"
            }`}
          ></div>
        </div>
        <p className="text-neutral-grayish-blue">{props.time}</p>
        <div className="pt-1 cursor-pointer rounded-lg">
          <p className="p-3 border text-neutral-dark-grayish-blue hover:bg-neutral-light-grayish-blue-1 rounded-lg">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
