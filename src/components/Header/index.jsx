import React, { useState } from "react";
import addLogo from "assets/img/add.svg";
import settingsLogo from "assets/img/settings.svg";
import TaskModal from "components/TaskLists/components/addTaskModal";

const Header = () => {
  const [showTaskModalStatus, setShowTaskModalStatus] = useState(false);

  const showTaskModal = () => {
    setShowTaskModalStatus((prev) => !prev);
  };
  return (
    <div className="header">
      <div className="headerContener">
        <img
          onClick={() => showTaskModal()}
          src={addLogo}
          className="headerContener__logo"
          alt="plusIcon"
        />
        <img
          src={settingsLogo}
          className="headerContener__logo"
          alt="settingsLogo"
        />
      </div>
      {showTaskModalStatus && (
        <TaskModal
          isOpen={showTaskModalStatus}
          parentCallback={() => showTaskModal()}
        />
      )}
    </div>
  );
};

export default Header;
