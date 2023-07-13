"use client";

import { StoreType, useStore } from "@/app/hooks/useStore";

type Props = {
  params: {
    item: string;
  };
};

export default function Item({ params }: Props) {
  const store = useStore();
  console.log(store);
  return <><div className="flex fixed bottom-0 left-0 right-0 bg-gray-300 p-4"><button>Aprobar</button><button>Denegar</button></div></>;
}
