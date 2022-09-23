import styled from "styled-components";
import { NavBar } from "../components";

const Layout = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
`;

export function AppLayout({ children }) {
  return (
    <Layout>
      <NavBar />
      {children}
    </Layout>
  );
}
