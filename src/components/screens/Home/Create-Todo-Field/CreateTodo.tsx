import React, { FC, ChangeEvent, KeyboardEvent } from "react";

interface CreateTodoProps {
  addTodo: (title: string) => void;
}

export const CreateTodo: FC<CreateTodoProps> = ({ addTodo }) => {
  const [input, setInput] = React.useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <input
      onChange={handleInputChange}
      className="mb-5 rounded-lg p-2  w-1/3 bg-gray-700"
      type="text"
      placeholder="Новая Задача"
      value={input}
      onKeyDown={handleKeyDown}
    />
  );
};