import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState,
} from "react";
import { useQuery } from "react-query";

import { fetchUsers } from "../api/queries";
import { UserModule } from "../types/UserTypes";

export type ListTypesContext = ReturnType<typeof useListValues>;

interface IUserListProvider {
  children?: ReactNode;
}

export const ListContext = createContext<ListTypesContext>(
  {} as ListTypesContext
);

function useListValues() {
  const [state, setState] = useState<UserModule.IUser[]>([]);

  const { isLoading, data, error, isPreviousData, refetch } = useQuery(
    "listUsers",
    () => fetchUsers(),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        setState(data);
      },
    }
  );

  const values = useMemo(
    () => ({
      state,
      isLoading,
      data,
      error,
      isPreviousData,
      refetch,
    }),
    [state, isLoading, data, error, isPreviousData, refetch]
  );

  return values;
}

const UserListProvider: React.FC<PropsWithChildren<IUserListProvider>> = ({
  children,
}) => {
  const data = useListValues();
  return <ListContext.Provider value={data}>{children}</ListContext.Provider>;
};

export { UserListProvider };
