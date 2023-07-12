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
  return <>{params.item}</>;
}
