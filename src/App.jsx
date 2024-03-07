import { RecoilRoot } from "recoil";
import Mobile from "./components/View/Mobile";

function App() {
  return (
    <RecoilRoot>
      <div className="w-screen h-screen flex justify-center">
        <div className="hidden lg:flex lg:w-[60%]">
          <div className="w-full h-full bg-white"></div>
        </div>
        <div className="w-full sm:w-[500px] lg:w-[450px] h-full flex justify-center items-center shadow-md">
          <Mobile />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
