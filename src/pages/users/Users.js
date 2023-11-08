import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../services/user";

export const UsersPage = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  return (
    <>
      <h1>Users</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="list-wrapper">
          <ul className="list">
            {data.results.map((user, index) => (
              <li className="list-item" key={`list-item-${index}`}>
                <h4>
                  {user.name.first} {user.name.last} -{" "}
                  <Link to={`/users/${index + 1}`}>edit</Link>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
