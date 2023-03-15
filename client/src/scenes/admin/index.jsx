import { Box, useTheme } from "@mui/material";
import { useGetAdminsQuery } from "../../state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/header";

const Admin = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();
  console.log("data", data);

  return <div>Admin</div>;
};

export default Admin;
