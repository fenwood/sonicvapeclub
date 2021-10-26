import React from "react";

import { Sides, LeftSide, RightSideHome } from "../styles/styled-components";

import Info from "../components/Roadmap/Info";
// import DevStack from "../components/Roadmap/DevStack";
import Projects from "../components/Roadmap/Projects";

function Roadmap() {
  document.title = "Sonic Vape Club | Roadmap";

  return (
    <div>
      <Sides>
        <LeftSide>
          <Info />
        </LeftSide>
        <RightSideHome>
          <Projects />
        </RightSideHome>
      </Sides>
    </div>
  );
}

export default Roadmap;
