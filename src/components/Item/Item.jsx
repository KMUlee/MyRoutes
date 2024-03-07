import { useEffect, useState } from "react";

export default function Item({
  title,
  timeData,
  setUserData,
  idx,
  handleDelete,
  handleUpdate,
}) {
  const [isModify, setIsModify] = useState(false);
  const [copyTitle, setCopyTitle] = useState(title);

  useEffect(() => {
    setCopyTitle(title);
  }, [title]);

  return (
    <div className="w-full flex flex-col bg-white rounded-xl shadow-lg">
      <div className="w-full flex felx-row justify-center items-center relative border-b-2 border-[#dddddd] font-bold text-2xl py-[6px]">
        {isModify ? (
          <input
            className="border border-gray-500 pl-[12px] w-[50%]"
            type="text"
            value={copyTitle}
            onChange={(e) => setCopyTitle(e.target.value)}
          />
        ) : (
          <p className="whitespace-nowrap text-ellipsis overflow-hidden max-w-[50%]">
            {title}
          </p>
        )}
        <button
          className="flex absolute right-[15px]"
          onClick={() => {
            if (isModify) {
              setUserData(idx, copyTitle);
            }
            setIsModify((prev) => !prev);
          }}
        >
          <img
            src={`/icons/${isModify ? "save" : "edit-button"}.png`}
            alt="edit"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center font-bold text-2xl my-[11px]">
        {timeData.map((data, idx) => (
          <p key={`item-${title}-${idx}`}>{data}</p>
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-[28px] px-[15px] pb-[12px] text-2xl text-white font-bold">
        <button
          className="button__item bg-[#ea1414] rounded-md"
          onClick={() => handleDelete(idx)}
        >
          Delete
        </button>
        <button
          className="button__item bg-[#16d112] rounded-md"
          onClick={() => handleUpdate(idx)}
        >
          Update
        </button>
      </div>
    </div>
  );
}
