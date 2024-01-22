import Favorite from "./Favorite";
import Tag from "./Tag";
import Priority from "./Priority";

export default function Task({ task = {} }) {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <Favorite isFavorite={task.isFavorite} />
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task?.tags?.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </ul>
      </td>
      <td className="text-center">
        <Priority value={task.priority.toLowerCase()} />
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500">Delete</button>
          <button className="text-blue-500">Edit</button>
        </div>
      </td>
    </tr>
  );
}
