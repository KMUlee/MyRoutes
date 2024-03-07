import { useSetRecoilState } from "recoil";
import Mobile from "./components/View/Mobile";
import { useEffect } from "react";
import { recoilUserData } from "./recoil/recoil";
import LandingPage from "./components/Landing/LandingPage";

function App() {
  const setRecoilUserData = useSetRecoilState(recoilUserData);

  useEffect(() => {
    // get user data from local storage
    if (window && localStorage) {
      const userData = localStorage.getItem("userData");

      if (userData !== null && userData !== undefined) {
        setRecoilUserData(JSON.parse(userData));
      }
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="hidden lg:flex lg:w-[60%]">
        <div className="w-full h-full bg-white">
          <LandingPage />
        </div>
      </div>
      <div className="w-full sm:w-[500px] lg:w-[450px] h-full flex justify-center items-center shadow-md">
        <Mobile />
      </div>
    </div>
  );
}

export default App;
