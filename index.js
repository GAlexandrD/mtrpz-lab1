import { askValues } from "./interactive.js";

const input =  async () => {
  const {a, b, c} = await askValues();
  console.log(a, b, c);
}

input();