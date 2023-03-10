import { FaDeviantart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ImgLogin from "./assets/img/img-login.webp";

function App() {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/beranda");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-400/10">
      <div className="w-1/2 h-screen ">
        <img
          src={ImgLogin}
          alt="sdasd"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={loginClick}
        className="flex flex-col w-1/2 justify-center items-center"
      >
        <span>
          <FaDeviantart className="w-20 h-20 text-[#758bfd]" />
        </span>
        <div className="flex flex-col gap-y-5 w-2/3 mt-4 bg-white p-5 rounded-lg">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="font-semibold text-lg">
              Username
            </label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border-[1px]"
              placeholder="yoourname22"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="font-semibold text-lg">
              Password
            </label>
            <input
              type="password"
              className="pycd-2 px-3 rounded-md border-[1px]"
              placeholder="*********"
            />
          </div>
          <button
            type="submit"
            className="py-2 bg-blue-400 text-white rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
