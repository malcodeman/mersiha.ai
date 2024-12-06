"use client";
import { useEffect } from "react";
import { useMediaQuery } from "@react-hookz/web";
import { LuCode } from "react-icons/lu";
import {
  SiPython,
  SiTensorflow,
  SiMysql,
  SiAmazonwebservices,
} from "react-icons/si";
import {
  Background,
  ReactFlow,
  Node,
  Edge,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import { Heading } from "@/ui/heading";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";
import "@xyflow/react/dist/style.css";

enum Position {
  Left = "left",
  Top = "top",
  Right = "right",
  Bottom = "bottom",
}

const STYLE = {
  backgroundColor: "transparent",
  width: "auto",
  borderColor: "#272727",
  borderRadius: "0",
};
const NODES: Node[] = [
  {
    id: "python",
    position: { x: 0, y: 0 },
    data: { label: <SiPython size={24} /> },
    style: STYLE,
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
  },
  {
    id: "tensorflow",
    position: { x: 0, y: 180 },
    data: { label: <SiTensorflow size={24} /> },
    style: STYLE,
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
  },
  {
    id: "mysql",
    position: { x: 480, y: 0 },
    data: { label: <SiMysql size={24} /> },
    style: STYLE,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "aws",
    position: { x: 480, y: 180 },
    data: { label: <SiAmazonwebservices size={24} /> },
    style: STYLE,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "mercy",
    position: { x: 240, y: 90 },
    data: { label: "Mersiha" },
    style: STYLE,
  },
];
const EDGES: Edge[] = [
  {
    id: "1",
    source: "mercy",
    target: "python",
    animated: true,
    style: { stroke: "#00F0FF" },
  },
  {
    id: "2",
    source: "mercy",
    target: "tensorflow",
    animated: true,
    style: { stroke: "#00F0FF" },
  },
  {
    id: "3",
    source: "mercy",
    target: "mysql",
    animated: true,
    style: { stroke: "#00F0FF" },
  },
  {
    id: "4",
    source: "mercy",
    target: "aws",
    animated: true,
    style: { stroke: "#00F0FF" },
  },
];

function Flow() {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const is2xl = useMediaQuery("(min-width: 1536px)");
  const { fitView } = useReactFlow();

  useEffect(() => {
    if (isSm || isMd || isLg || isXl || is2xl) {
      fitView();
    }
  }, [isSm, isMd, isLg, isXl, is2xl]);

  return (
    <GridItem className="group-hover relative">
      <CardIndex value={6} />
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
        <LuCode size={24} />
        <Heading>My tech stack</Heading>
      </div>
      <div className="h-52">
        <ReactFlow
          fitView
          nodes={NODES}
          edges={EDGES}
          proOptions={{
            hideAttribution: true,
          }}
        >
          <Background />
        </ReactFlow>
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
