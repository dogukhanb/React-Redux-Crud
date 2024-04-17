import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { Link } from "react-router-dom";
import { searchDateFunc, sortingDateFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <Link to={"/"} className="text-3xl">
        React Uygulama
      </Link>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDateFunc(e.target.value))}
            className="h-10 rounded-lg"
            name=""
            id=""
          >
            <option value="asc">ARTAN</option>
            <option value="dsc">AZALAN</option>
          </select>
        </div>

        <input
          onChange={(e) => dispatch(searchDateFunc(e.target.value))}
          className="h-10 rounded-lg px-4 text-black"
          type="text"
          placeholder="Arama Yapınız ..."
        />

        <div
          onClick={(e) => dispatch(modalFunc(e.target.value))}
          className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
