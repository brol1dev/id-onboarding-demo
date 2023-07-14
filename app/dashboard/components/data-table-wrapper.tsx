"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Person } from "../data/schema";
import { DataTable } from "./data-table";
import { VerifiedStatus, useStore } from "@/app/hooks/useStore";

type DataTableWrapperProps = {
  people: Person[];
  columns: ColumnDef<Person>[];
};

const verifiedStatusMap = (verifiedStatus: VerifiedStatus) => {
  switch (verifiedStatus) {
    case VerifiedStatus.Verified:
      return "verified";
    case VerifiedStatus.Rejected:
      return "rejected";
    case VerifiedStatus.Pending:
      return "not verified";
  }
};

export default function DataTableWrapper({
  people,
  columns,
}: DataTableWrapperProps) {
  const { name, verifiedStatus } = useStore();
  const modifiedPeople = [
    { name, status: verifiedStatusMap(verifiedStatus) },
    ...people,
  ];
  return <DataTable data={modifiedPeople} columns={columns} />;
}
