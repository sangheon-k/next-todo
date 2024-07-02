import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCircleCheck, CiEdit } from "react-icons/ci";

const TodoListItem = ({
  todo,
  onUpdate = () => {},
  onDelete = () => {},
}: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo?.content ?? "");

  const onStartEdit = () => {
    setIsEdit(true);
  };
  // 수정 완료시
  const onFinishEdit = () => {
    onUpdate(todo.id, userInput);
    setIsEdit(false);
  };
  // 삭제시
  const onClickDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="min-h-[60px] bg-[#B280D9] border border-black rounded-2xl font-bold group">
      <article className="min-h-[60px] p-4 flex flex-col sm:flex-row gap-4">
        {isEdit ? (
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 text-[18px]"
          ></input>
        ) : (
          <div
            className="flex-1 text-[18px] cursor-pointer"
            onClick={onStartEdit}
          >
            {todo?.content}
          </div>
        )}
        <div className="w-fit hidden group-hover:flex gap-[8px] self-end">
          {isEdit ? (
            <div onClick={onFinishEdit} className={iconStyle}>
              <CiCircleCheck size={30} />
            </div>
          ) : (
            <div onClick={onStartEdit} className={iconStyle}>
              <CiEdit size={30} />
            </div>
          )}

          <div onClick={onClickDelete} className={iconStyle + " bg-[#ED7461]"}>
            <AiOutlineDelete size={30} />
          </div>
        </div>
      </article>
    </li>
  );
};

export default TodoListItem;

const iconStyle =
  "w-[45px] h-[45px] flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl cursor-pointer";
