import { Link } from "react-router-dom";
import { useEditUserStore } from "../../../hooks/useEditUserStore";

export const EditUserJourneySummaryPage = () => {
  const [user, setUser] = useEditUserStore();

  return (
    <div className="App">
      <h1>Edit user summary</h1>
      {user ? (
        <div className="list-wrapper">
          <div>
            {user?.name?.first} <Link to={`/users/user/edit/part1`}>Edit</Link>
          </div>
          <div>
            {user?.name?.last} <Link to={`/users/user/edit/part2`}>Edit</Link>
          </div>
        </div>
      ) : null}
      <div>
        <Link to={`/`}>Back to users</Link>
      </div>
    </div>
  );
};
