import { useState, useEffect } from 'react';

export function Calc({ inp }) {
  const [Age, setAge] = useState("");

  useEffect(() => {
    const calculateAge = () => {
      const date = new Date(inp);
      const currDate = new Date();
      const dobMonth = date.getMonth() + 1;
      const currMonth = currDate.getMonth() + 1;
      let res = 0;

      if (currMonth > dobMonth)
        res = currDate.getFullYear() - date.getFullYear();
      else if (currMonth < dobMonth)
        res = currDate.getFullYear() - date.getFullYear() - 1;
      else {
        if (currDate.getDate() < date.getDate())
          res = currDate.getFullYear() - date.getFullYear() - 1;
        else
          res = currDate.getFullYear() - date.getFullYear();
      }
      setAge(res);
    };
    calculateAge();

  }, [inp]);

  return (
    <div className="p-3 fw-bold">
      You are {Age || 0} years old.
    </div>
  );
}
