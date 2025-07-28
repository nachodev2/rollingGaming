import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const BotonVolver = () => {
  const navigate = useNavigate();

  return (
    <Button variant="link" onClick={() => navigate(-1)}>
      <div className="px-2 rounded-3 colorNavbar container-btn-volver">
        <i class="bi bi-arrow-left fs-2 text-secondary"></i>
      </div>
    </Button>
  );
};

export default BotonVolver;
