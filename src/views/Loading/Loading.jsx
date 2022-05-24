import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Loading.css";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("sacola", "[]");
    localStorage.setItem("selecionadas", "{}");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <div className="Loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;