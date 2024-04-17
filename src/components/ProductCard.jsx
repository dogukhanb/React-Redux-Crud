import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDateFunc } from "../redux/dataSlice"; // Corrected import
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteDateFunc(dt?.id));
    setOpenEdit(false);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full rounded-md" alt="" />
      <div className="absolute left0 bottom-0 bg-indigo-600 text-white w-full p-2 text-lg font-semibold">
        <div>{dt?.name}</div>
        <div>{dt?.price}</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2"
      >
        <BsThreeDots color="black" size={24} />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-4 right-2 p-2 text-sm">
          <div onClick={handleDelete} className="cursor-pointer">
            Sil
          </div>
          <div
            onClick={() => dispatch(updateFunc(dt))}
            className="cursor-pointer"
          >
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
