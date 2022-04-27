import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../api/queries";
import { UserModule } from "../../types/UserTypes";

const Users = () => {
  const navigate = useNavigate();

  const { isLoading, data, error, isPreviousData, refetch } = useQuery(
    "listUsers",
    () => fetchUsers(),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    }
  );

  if (isLoading) {
    return <p>isLoading...</p>;
  }

  return (
    <section className="studies">
      <button onClick={() => navigate("/nextPage")}>next route</button>
      <ul>
        {data.map((items: UserModule.IUser) => (
          <li key={items.id}>
            <p>{items.name}</p>
            <p>{items.email}</p>
          </li>
        ))}
        <button onClick={() => refetch}></button>
      </ul>
    </section>
  );
};

export { Users };
