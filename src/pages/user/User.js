import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserByIDQuery } from "../../services/user";

export const UserPage = () => {
  let { userId } = useParams();
  const { data, error, isLoading } = useGetUserByIDQuery(userId);
  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name.indexOf(".") > 0) {
      let [parent, child] = name.split(".");
      setUser((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setUser((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (data) {
      if (data.results.length > 0) {
        setUser(data.results[userId - 1]);
      }
    }
  }, [data]);

  return (
    <div className="App">
      <h1>User 2: userId:{userId}</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="list-wrapper">
          <h4>
            {data.results[userId - 1].name.first}{" "}
            {data.results[userId - 1].name.last}
          </h4>
          <input
            type="text"
            name="name.first"
            value={user?.name.first || ""}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="name.last"
            value={user?.name.last || ""}
            onChange={handleInputChange}
          />
        </div>
      ) : null}
    </div>
  );
};
