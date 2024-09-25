"use client";
import { addProperty } from "@/actions/test";
import { useAction } from "next-safe-action/hooks";


export default function Home() {
  // hover execute here would see the price type is string instead of number
  const { execute, status } = useAction(addProperty)


  return (
    <div>
      <form>
        <input type="text" name="price" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
