import { randomColor } from "../utils/getRandomColor";
export default function Tag({ name }) {
  return (
    <li>
      <span
        className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]"
        style={{ background: randomColor() }}
      >
        {name}
      </span>
    </li>
  );
}
