import { IconType } from "react-icons";
import { Heading } from "@/ui/heading";
import { cn } from "@/lib/utils";
import { CardIndex } from "./card-index";

type Props = {
  index: number;
  title: string;
  Icon: IconType;
  className?: string;
};

export function GridHeader(props: Props) {
  const { index, title, Icon, className } = props;

  return (
    <>
      <CardIndex value={index} />
      <div
        className={cn(
          "mb-4 flex flex-col gap-2 md:flex-row md:items-center",
          className,
        )}
      >
        <Icon size={24} className="min-w-6" />
        <Heading>{title}</Heading>
      </div>
    </>
  );
}
