import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div>Mwinnome Prosper</div>;
}

export default Home;
