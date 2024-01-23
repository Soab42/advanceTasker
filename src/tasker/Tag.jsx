export default function Tag({ name, color }) {
  const beautifulColorsHex = [
    "#40e0d0", // Turquoise
    "#ff6f61", // Coral Pink
    "#98ff98", // Mint Green
    "#0066cc", // Sapphire Blue
    "#9932cc", // Purple Orchid
    "#008080", // Teal Shades
    "#fff0f5", // Lavender Blush
    "#daa520", // Goldenrod Yellow
    "#ffdab9", // Peach Puff
    "#4682b4", // Steel Gray
  ];
  return (
    <li>
      <span
        className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm  text-[#272a2d]"
        style={{ background: beautifulColorsHex[color] }}
      >
        {name}
      </span>
    </li>
  );
}
