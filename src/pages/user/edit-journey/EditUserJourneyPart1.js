import { Link } from "react-router-dom";
import { useEditUserStore } from "../../../hooks/useEditUserStore";

export const EditUserJourneyPart1Page = () => {
  const [user, setUser] = useEditUserStore();

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

  return (
    <div className="App">
      <h1>Edit User Part 1</h1>
      {user ? (
        <div className="list-wrapper">
          <input
            type="text"
            name="name.first"
            value={user?.name?.first || ""}
            onChange={handleInputChange}
          />
        </div>
      ) : null}
      <Link to={`/users/user/edit/part2`}>Next</Link>
    </div>
  );
};
