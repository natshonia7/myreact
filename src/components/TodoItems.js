import Button from "./Button";

export default function TodoItems({item, onchangePass}) {
  return (
    <li  className="lists">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onchangePass(item.id)}
      />
      <span className={item.completed ? "done" : ""}> {item.text}</span>
      <Button text={"Delete"} />
    </li>
  );
}
