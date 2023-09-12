import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const users = [{ id: "u1", name: "Don Payne", image: "http://placekitten.com/200/139", places: 3 }];
  return <UsersList items={users} />;
};
export default Users;
