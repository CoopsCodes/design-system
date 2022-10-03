import styled from "styled-components";
import { useTheme } from "../context/useTheme";
import { NavLink } from "react-router-dom";
import { pages } from "../utils";

const NavbarContainer = styled.nav`
  width: 150px;
  height: 100%;
  background-color: #1d201f;

  color: black;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  &:hover,
  &:focus {
    color: #f2c75c;
  }
  &:active {
    color: pink;
  }
  &.${(props) => props.active} {
    color: #41b6e6;
  }
`;

const UL = styled.ul`
  margin: 0;
  padding: 0;
  //   width: 100%;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LI = styled.li`
  a {
    color: white;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #f2c75c;
    }
    &:active {
      color: pink;
    }
  }
`;

const PageLinks = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;
const Socials = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
`;

export function NavBar() {
  const { themeToggle } = useTheme();

  return (
    <NavbarContainer>
      <UL>
        <PageLinks>
          {pages.map((page) => {
            return (
              <LI key={page.key}>
                <StyledNavLink to={page.path} active="active">
                  {page.name}
                </StyledNavLink>
              </LI>
            );
          })}
        </PageLinks>
        <button onClick={themeToggle}>toggle theme</button>
        <Socials>
          <LI>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/CooperCodes"
            >
              Twitter
            </a>
          </LI>
          <LI>
            <a target="_blank" rel="noreferrer" href="https://cooper-codes.dev">
              Portfolio site
            </a>
          </LI>
          <LI>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/CoopsCodes"
            >
              GitHub
            </a>
          </LI>
          <LI>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dev.to/coopercodes"
            >
              Dev.to
            </a>
          </LI>
        </Socials>
      </UL>
    </NavbarContainer>
  );
}
