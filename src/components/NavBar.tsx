import { useNavigate } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { ROUTE } from "../utils/consts";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="me-5" href={ROUTE.SHOP}>SheepFish</Navbar.Brand>
        <Button
          variant="outline-light"
          onClick={() => navigate(ROUTE.ADMIN)}
        >
          Админ панель
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
