import React from "react";
import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

function ApiDersi() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUsersById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  };

  useEffect(() => {
    //deleteUserById("4fe2");
    // getAllUsers();
    // getUsersById(2);
    // const newUser = {
    //   username: "bilal",
    //   password: "3636",
    // };
    // createUser(newUser);
    // updateUser("4fe2", {
    //   username: "fatma gül",
    //   password: "22222",
    // });
  }, []);

  return <div>ApiDersi</div>;
}

export default ApiDersi;
