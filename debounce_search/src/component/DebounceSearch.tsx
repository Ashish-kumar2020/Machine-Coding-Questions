import { useState } from "react";
import { mockData } from "../data/userData";
import UserDisplay from "./UserDisplay";
import type { User } from "../types";

const DebounceSearch = () => {
  const [userName, setUserName] = useState<string>("");
  const [filteredUserData,setFilteredUserData] = useState<User[]>(mockData)
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setUserName(value);
            const filteredData = mockData.filter((data) => data.name.toLowerCase().includes(value.toLowerCase()));
            setFilteredUserData(filteredData);
    }

  return (
    <div>
      <div className="user-input-container">
        <label htmlFor="searchForUser">Search For User : </label>
        <input
          type="text"
          id="searchForUser"
          placeholder="Enter UserName..."
          value={userName}
          onChange={handleSearch}
        />
      </div>
      <div className="user-data-container">
        <ul className="user-list">
          {filteredUserData.map((user) => (
            <li key={user.id} className="list-container">
              <UserDisplay user={user}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DebounceSearch;
