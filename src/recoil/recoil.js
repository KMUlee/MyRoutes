import { atom } from "recoil";

export const recoilUserData = atom({
  key: "recoilUserData",
  default: [
    {
      title: "테스트",
      time: ["08:21:32", "--:--:--"],
    },
  ],
});
