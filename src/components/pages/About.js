import React from "react";
import { Segment, Header } from "semantic-ui-react";

function About() {
  return (
    <Segment>
      <Header as="h4" content="Profile Finder React App" />
      <p>Version: 1.0.0</p>
      <p>Ashwin sivasankar , VIT chennai 4th year CSE Dept</p>
      <p><a href="https://github.com/Ashwin20BCE1804/">Github profile</a></p>
      <p><a href="https://www.linkedin.com/in/ashwinsivasankar-venkatesan/">LinkedIn profile</a></p>
    </Segment>
  );
}
export default About;
