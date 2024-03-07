import { useRecoilState } from "recoil";
import Header from "../Header/Header";
import Item from "../Item/Item";
import { recoilUserData } from "../../recoil/recoil";

export default function Mobile() {
  const [userData, setUserData] = useRecoilState(recoilUserData);

  const formatNumber2 = (n) => {
    return String(n).padStart(2, "0");
  };

  const getTime = () => {
    const now = new Date();
    return `${formatNumber2(now.getHours())}:${formatNumber2(now.getMinutes())}:${formatNumber2(now.getSeconds())}`;
  };

  const handleSetUserData = (newData) => {
    setLocalStorage(newData);
    setUserData(newData);
  };

  const handleTitle = (idx, newTitle) => {
    const updatedUserData = userData.map((item, itemIdx) => {
      if (idx === itemIdx) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    handleSetUserData(updatedUserData);
  };

  const handleAddButton = () => {
    const newData = [...userData];
    newData.push({
      title: "NEW",
      time: [getTime(), "--:--:--"],
    });
    handleSetUserData(newData);
  };

  const handleDeleteButton = (idx) => {
    const newData = userData.filter((data, id) => id !== idx);
    handleSetUserData(newData);
  };

  const handleUpdateButton = (idx) => {
    const newData = userData.map((data, id) => {
      if (idx === id) {
        const newTime = [...data.time];
        if (newTime[newTime.length - 1] === "--:--:--") {
          newTime[newTime.length - 1] = getTime();
        } else {
          newTime.push(getTime());
          newTime.splice(0, 1);
        }
        return { ...data, time: newTime };
      }
      return data;
    });
    handleSetUserData(newData);
  };

  const setLocalStorage = (newData) => {
    localStorage.setItem("userData", JSON.stringify(newData));
  };

  return (
    <div className="w-full h-full flex flex-col shadow-md relative">
      <Header />
      <div className="w-full h-full bg-[#f7f7f7] overflow-y-scroll px-[22px] flex flex-col gap-[32px] pb-[12px]">
        <div className="mt-[72px]" />
        {userData.map((item, idx) => (
          <Item
            key={`item-${idx}`}
            timeData={item.time}
            title={item.title}
            idx={idx}
            setUserData={handleTitle}
            handleDelete={handleDeleteButton}
            handleUpdate={handleUpdateButton}
          />
        ))}
        <div className="w-full flex justify-center items-center">
          <button
            className="button__item bg-blue-500 rounded-md text-white font-bold text-3xl"
            onClick={handleAddButton}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
