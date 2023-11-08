import { useGetUsersQuery } from "./services/user";
import "./styles.css";

export default function App() {
  const { data, error, isLoading } = useGetUsersQuery();

  return (
    <div className="App">
      <h1>Users</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="list-wrapper">
          <ul className="list">
            {data.results.map((user) => (
              <li className="list-item">
                <h4>{user.name.first} {user.name.last}</h4>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
