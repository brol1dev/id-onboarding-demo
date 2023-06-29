import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

const statuses = [
  {
    value: "not verified",
  },
  {
    value: "verified",
  },
  {
    value: "rejected",
  },
];
const tasks = Array.from({ length: 100 }, () => ({
  name: faker.person.fullName(),
  status: faker.helpers.arrayElement(statuses).value,
  date: faker.date.between({
    from: "2020-01-01T00:00:00.000Z",
    to: "2023-06-30T00:00:00.000Z",
  }),
}));

fs.writeFileSync(
  "app/dashboard/data/people.json",
  JSON.stringify(tasks, null, 2)
);

console.log("✅ Tasks data generated.");
