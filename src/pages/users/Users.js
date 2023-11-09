import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../services/user";
import { useEditUserStore } from "../../hooks/useEditUserStore";

const EditWithContextLink = (data) => {
  // const [, setUser] = useEditUserJourneyContext();
  const [, setUser] = useEditUserStore();

  return (
    <Link
      to={`/users/user/edit/part1`}
      onClick={() => {
        setUser(data.user);
      }}
    >
      edit (with context)
    </Link>
  );
};

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
                  <Link to={`/users/user/${index + 1}`}>
                    {user.name.first} {user.name.last}
                  </Link>{" "}
                  -{" "}
                  <Link to={`/users/user/edit/${index + 1}`}>
                    edit (with state)
                  </Link>
                  <br />
                  <EditWithContextLink user={user} />
                </h4>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
