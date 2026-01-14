import { useState } from "react";
import Users from "./Users";

function ToggleUsers() {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div>
      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? "Hide Users" : "Show Users"}
      </button>

      {showUsers && <Users />}
    </div>
  );
}

export default ToggleUsers;
