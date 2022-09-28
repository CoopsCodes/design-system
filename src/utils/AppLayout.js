import { useTheme } from "../context/useTheme";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import { NavBar } from "../components";

const Layout = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  background-color: ${(props) =>
    props.useDarkTheme === true ? darkTheme.background : lightTheme.background};
`;

export function AppLayout({ children }) {
  const { useDarkTheme } = useTheme();

  return (
    <Layout useDarkTheme={useDarkTheme}>
      <NavBar />
      {children}
    </Layout>
  );
}
