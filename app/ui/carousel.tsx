"use client";
import { useState } from "react";
import { Carousel as ArkCarousel } from "@ark-ui/react";
import { dec, ifElse, inc, length, map } from "ramda";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useIntervalEffect } from "@react-hookz/web";

type Props = {
  items: {
    src: string;
  }[];
};

export function Carousel(props: Props) {
  const { items } = props;
  const [page, setPage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useIntervalEffect(
    () => {
      const updatePage = ifElse(
        () => page < dec(length(items)),
        () => setPage(inc(page)),
        () => setPage(0),
      );

      updatePage();
    },
    autoplay ? 4000 : undefined,
  );

  function handleOnPageChange(details: ArkCarousel.PageChangeDetails) {
    setPage(details.page);
  }

  function disableAutoplay() {
    setAutoplay(false);
  }

  return (
    <ArkCarousel.Root
      page={page}
      onPageChange={handleOnPageChange}
      loop
      className="relative h-full min-h-52 overflow-x-hidden rounded-[20px]"
    >
      <ArkCarousel.ItemGroup className="h-full">
        {map(
          (item) => (
            <ArkCarousel.Item key={item.src} index={page}>
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
          onClick={disableAutoplay}
          className="disabled:opacity-50"
        >
          <LuChevronLeft />
        </ArkCarousel.PrevTrigger>
        <ArkCarousel.NextTrigger
          onClick={disableAutoplay}
          className="disabled:opacity-50"
        >
          <LuChevronRight />
        </ArkCarousel.NextTrigger>
      </ArkCarousel.Control>
    </ArkCarousel.Root>
  );
}
