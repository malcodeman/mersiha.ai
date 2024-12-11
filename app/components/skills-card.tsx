"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hookz/web";
import { LuCode } from "react-icons/lu";
import {
  SiPython,
  SiTensorflow,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiPandas,
  SiPostgresql,
} from "react-icons/si";
import {
  ReactFlow,
  Node,
  Edge,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import { Avatar } from "@/ui/avatar";
import { Tableau } from "@/icons/tableau";
import { MicrosoftAzure } from "@/icons/microsoft-azure";
import { PowerBi } from "@/icons/power-bi";
import { generateCircularPositions } from "@/lib/utils";
import { GridItem } from "./grid-item";
import { GridHeader } from "./grid-header";
import "@xyflow/react/dist/style.css";

const STYLE = {
  backgroundColor: "transparent",
  width: "auto",
  borderColor: "#272727",
  borderRadius: "100%",
};
const CENTER_X = 240;
const CENTER_Y = 90;
const RADIUS = 180;
const TECHNOLOGIES = [
  { id: "python", icon: <SiPython size={24} /> },
  { id: "tensorflow", icon: <SiTensorflow size={24} /> },
  { id: "postgreSql", icon: <SiPostgresql size={24} /> },
  { id: "aws", icon: <SiAmazonwebservices size={24} /> },
  { id: "git", icon: <SiGit size={24} /> },
  { id: "docker", icon: <SiDocker size={24} /> },
  { id: "pandas", icon: <SiPandas size={24} /> },
  { id: "tableau", icon: <Tableau /> },
  { id: "azure", icon: <MicrosoftAzure /> },
  { id: "powerBi", icon: <PowerBi /> },
];
const POSITIONS = generateCircularPositions(
  TECHNOLOGIES.length,
  CENTER_X,
  CENTER_Y,
  RADIUS,
);
const NODES: Node[] = [
  {
    id: "mercy",
    position: { x: CENTER_X, y: CENTER_Y },
    data: { label: <Avatar src="/avatar.webp" /> },
    style: STYLE,
  },
  ...TECHNOLOGIES.map((tech, index) => ({
    id: tech.id,
    position: POSITIONS[index],
    data: { label: tech.icon },
    style: STYLE,
  })),
];

function Flow() {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const is2xl = useMediaQuery("(min-width: 1536px)");
  const { fitView } = useReactFlow();
  const [isAnimated, setIsAnimated] = useState(false);
  const [panOnDrag, setPanOnDrag] = useState(false);
  const edges: Edge[] = TECHNOLOGIES.map((tech, index) => {
    const isAbove = POSITIONS[index].y < CENTER_Y;

    return {
      id: `edge-${tech.id}`,
      source: isAbove ? tech.id : "mercy",
      target: isAbove ? "mercy" : tech.id,
      animated: isAnimated,
      style: { stroke: "#00F0FF" },
    };
  });

  useEffect(() => {
    if (isSm || isMd || isLg || isXl || is2xl) {
      fitView();
    }
  }, [isSm, isMd, isLg, isXl, is2xl, fitView]);

  useEffect(() => {
    setPanOnDrag(isSm || isMd || isLg || isXl || is2xl);
  }, [isSm, isMd, isLg, isXl, is2xl]);

  return (
    <GridItem
      className="group-hover relative flex flex-col"
      onMouseEnter={() => setIsAnimated(true)}
      onMouseLeave={() => setIsAnimated(false)}
    >
      <GridHeader index={6} title="My tech stack" Icon={LuCode} />
      <div className="h-full min-h-52">
        <ReactFlow
          fitView
          nodes={NODES}
          edges={edges}
          panOnDrag={panOnDrag}
          nodesDraggable={false}
          proOptions={{
            hideAttribution: true,
          }}
        />
      </div>
    </GridItem>
  );
}

export function SkillsCard() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
