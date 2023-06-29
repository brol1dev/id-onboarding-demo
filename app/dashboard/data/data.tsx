import {
  ArrowDownToLine,
  ArrowRightToLine,
  ArrowUpToLine,
  CheckCircle2,
  Circle,
  XCircle,
} from "lucide-react"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "not verified",
    label: "Sin verificar",
    icon: Circle,
  },
  {
    value: "verified",
    label: "Verificado",
    icon: CheckCircle2,
  },
  {
    value: "rejected",
    label: "Rechazado",
    icon: XCircle,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownToLine,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightToLine,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpToLine,
  },
]
