import { useEffect, useState } from "react";
import type { User } from "../types";
import { mockData } from "../data/userData";


const useDebounce = (userName: string) => {
    const [filteredUserData,setFilteredUserData] = useState<User[]>([])
     useEffect(() => {
        const timerId = setTimeout(() => {
          const filteredData = mockData.filter((data) =>
            data.name.toLowerCase().includes(userName.toLowerCase()),
          );
          setFilteredUserData(filteredData);
        }, 1000);
    
        return () => {
            clearTimeout(timerId)
        }
      }, [userName]);

      return [filteredUserData];
}

export default useDebounce;