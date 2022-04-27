import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Users } from "../pages/Users";
import { UserListProvider } from "../context/UserListContext";
import { NextRoute } from "../pages/NextPage";

const queryClient = new QueryClient();

export function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserListProvider>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/nextPage" element={<NextRoute />}></Route>
          </Routes>
        </UserListProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
