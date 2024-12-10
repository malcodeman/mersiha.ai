"use client";
import { useState } from "react";
import { Carousel as ArkCarousel } from "@ark-ui/react";
import { dec, equals, ifElse, inc, length, map } from "ramda";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useIntervalEffect } from "@react-hookz/web";
import { cn } from "@/lib/utils";

type Props = {
  items: {
    src: string;
  }[];
};

export function Carousel(props: Props) {
  const { items } = props;
  const [index, setIndex] = useState(0);

  useIntervalEffect(() => {
    const updateIndex = ifElse(
      () => index < dec(length(items)),
      () => setIndex(inc(index)),
      () => setIndex(0),
    );

    updateIndex();
  }, 4000);

  return (
    <ArkCarousel.Root
      index={index}
      onIndexChange={(details) => setIndex(details.index)}
      className="h-full min-h-52"
    >
      <ArkCarousel.Viewport className="relative h-full overflow-x-hidden rounded-[20px]">
        <ArkCarousel.ItemGroup style={{ height: "100%" }}>
          {map(
            (item) => (
              <ArkCarousel.Item key={item.src} index={index}>
                <img
                  src={item.src}
                  alt=""
                  className="h-full w-full object-cover brightness-50"
                />
              </ArkCarousel.Item>
            ),
            items,
          )}
        </ArkCarousel.ItemGroup>
        <ArkCarousel.Control className="absolute bottom-4 left-1/2 flex -translate-x-2/4 items-center gap-1 rounded border border-[#272727] bg-[#161616CC] p-1">
          <ArkCarousel.PrevTrigger
            className="disabled:opacity-50"
            disabled={equals(index, 0)}
          >
            <LuChevronLeft />
          </ArkCarousel.PrevTrigger>
          <ArkCarousel.IndicatorGroup className="flex gap-1">
            {items.map((item, i) => (
              <ArkCarousel.Indicator
                key={item.src}
                index={i}
                className={cn(
                  "size-[10px] rounded-full",
                  equals(i, index) ? "bg-[#00F0FF]" : "bg-[#F2F2F2]",
                )}
              />
            ))}
          </ArkCarousel.IndicatorGroup>
          <ArkCarousel.NextTrigger
            className="disabled:opacity-50"
            disabled={equals(index, dec(length(items)))}
          >
            <LuChevronRight />
          </ArkCarousel.NextTrigger>
        </ArkCarousel.Control>
      </ArkCarousel.Viewport>
    </ArkCarousel.Root>
  );
}
