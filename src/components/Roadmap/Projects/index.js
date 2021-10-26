import React from "react";

import {
  Wrapper,
  Title,
  Points,
  Point,
} from "../../../styles/styles-roadmap-purple";
import { Section, SectionTitle } from "../../../styles/styled-components";

import { projects } from "../Data/roadmap_all";

const Projects = () => {
  return (
    <Section>
      <SectionTitle></SectionTitle>
      <Wrapper>
        {projects.map((project) => (
          <div key={project.title}>
            <Title>{project.title}</Title>
            <Points>
              <Point>{project.desc_1}</Point>
              <Point>{project.desc_2}</Point>
              <Point>{project.desc_3}</Point>
            </Points>
          </div>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Projects;
