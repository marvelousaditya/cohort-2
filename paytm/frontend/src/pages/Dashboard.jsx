import axios from "axios";
import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
import { useEffect } from "react";
import { useState } from "react";
export const Dashboard = () => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => setAmount(res.data.balance));
  }, []);
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={amount} />
        <Users />
      </div>
    </div>
  );
};
