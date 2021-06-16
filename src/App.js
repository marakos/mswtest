import React, { useState, useEffect } from "react";

const Home = ({ users = [] }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:3000/users");
      response = await response.json();
      setUser(response);
    }
    fetchMyAPI();
  }, []);
  const usersNode = () => {
    if (!user.length) {
      return <>No users found</>;
    }

    return (
      <>
        {user.map((user) => {
          return (
            <div key={user.id}>
              {user.first_name} {user.last_name}
            </div>
          );
        })}
      </>
    );
  };

  return usersNode();
};

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Home;
