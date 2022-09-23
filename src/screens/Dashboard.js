import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export function Dashboard() {
  return (
    <Section>
      <h1>Hello World</h1>
      <h2>Welcome to the start of Cooper's Design System</h2>
      <h3>Built from a course by Emma Bostian on Frontend Masters</h3>
      <p>
        This page is probably lowest on my page to update, so chill and watch as
        I create the components
      </p>
      <p>My stuff can be found here</p>
    </Section>
  );
}
