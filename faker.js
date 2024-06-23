import { faker } from "@faker-js/faker";

export default function generateExpirationDate() {
  const month = faker.number.int({ min: 1, max: 12 });
  const year = faker.number.int({ min: 23, max: 99 });
  const formattedMonth = month.toString().padStart(2, "0");
  return `${formattedMonth}/${year}`;
}
