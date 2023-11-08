import { useGetUserByIDQuery } from "./services/user";
import "./styles.css";

export default function App() {
  const { data, error, isLoading } = useGetUserByIDQuery(1);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.name}</h3>
        </>
      ) : null}
    </div>
  );
}
