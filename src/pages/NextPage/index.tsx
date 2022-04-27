import { useNavigate } from "react-router-dom";

const NextRoute = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>go back to home</button>
    </div>
  );
};

export { NextRoute };
