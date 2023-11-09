import { Link, useParams } from "react-router-dom";
import { useGetUserByIDQuery } from "../../services/user";

export const UserPage = () => {
  let { userId } = useParams();
  const { data, error, isLoading } = useGetUserByIDQuery(userId);

  return (
    <div className="App">
      <h1>User: userId:{userId}</h1>
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
        </div>
      ) : null}
      <Link to={`/`}>Back to users</Link>
    </div>
  );
};
