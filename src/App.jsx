import React, { useState } from "react";
import Follow from "./components/notifications/Follow";
import JoinedGroup from "./components/notifications/JoinedGroup";
import Reaction from "./components/notifications/Reaction";
import Message from "./components/notifications/Message";
import Comented from "./components/notifications/Comented";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Mark from "./assets/images/avatar-mark-webber.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import ImgChess from "./assets/images/image-chess.webp";

const App = () => {
  const [notifications, setNotifications] = useState([
    {
      type: "reaction",
      user: "Mark Webber",
      post: "My first tournament today!",
      time: "1m ago",
      unread: true,
      image: Mark,
    },
    { type: "follow", user: "Angela Gray", time: "5m ago", unread: true, image: Angela },
    {
      type: "joined-group",
      action: "joined",
      user: "Jacob Thompson",
      group: "Chess Club",
      time: "1 day ago",
      unread: true,
      image: Jacob,
    },
    {
      type: "message",
      user: "Rizky Hasanuddin",
      time: "5 days ago",
      unread: true,
      image: Rizky,
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      type: "commented",
      user: "Kimberly Smith",
      time: "1 week ago",
      unread: true,
      image: Kimberly,
      imgComment: ImgChess,
    },
    {
      type: "reaction",
      user: "Nathan Petersonr",
      post: "5 end-game strategies to increase your win rate",
      time: "2 week ago",
      unread: true,
      image: Nathan,
    },
    {
      type: "joined-group",
      action: "left",
      user: "Anna Kim",
      group: "Chess Club",
      time: "2 week ago",
      unread: true,
      image: Anna,
    },
  ]);

  const unreadNotifications = notifications.filter(
    (notification) => notification.unread
  );
  const unreadCount = unreadNotifications.length;

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      unread: false,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="md:h-screen bg-neutral-light-grayish-blue-1 flex items-center justify-center font-plus">
      <div className="h-auto w-full md:w-2/3 lg:w-2/5 bg-neutral-white p-4">
        <div className="flex justify-between pb-6">
          <h1 className="text-lg font-bold">
            Notifications{" "}
            <span className="text-xs text-neutral-white bg-primary-blue px-2 py-1 rounded-lg">
              {unreadCount}
            </span>
          </h1>
          <button className="text-sm text-neutral-dark-grayish-blue cursor-pointer hover:text-primary-blue"
          onClick={handleMarkAllAsRead}>
            Mark all as read
          </button>
        </div>
        <div className="flex flex-col gap-y-2">
          {notifications.map((notification, index) => {
            let Component;
            switch (notification.type) {
              case "follow":
                Component = Follow;
                break;
              case "joined-group":
                Component = JoinedGroup;
                break;
              case "message":
                Component = Message;
                break;
              case "commented":
                Component = Comented;
                break;
              case "reaction":
              default:
                Component = Reaction;
                break;
            }
            return (
              <Component
                key={index}
                user={notification.user}
                post={notification.post}
                time={notification.time}
                unread={notification.unread}
                message={notification.message}
                action={notification.action}
                group={notification.group}
                image={notification.image}
                imgComment={notification.imgComment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
