import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);
  return { goTo };
};
