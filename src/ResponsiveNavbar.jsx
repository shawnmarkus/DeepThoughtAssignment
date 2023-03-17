import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "./assets/DeepThoght.svg";
import HomeIcon from "./assets/home.svg";
import Binoculars from "./assets/binoculars.svg";
import SettingIcon from "./assets/setting.svg";
import BellIcon from "./assets/bell.svg";
import EllipseVerticalIcon from "./assets/ellipseVertical.svg";

function ResponsiveNavbar() {
  const icons = [HomeIcon, Binoculars, SettingIcon, BellIcon];
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} height="50"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {icons.map((icon, idx) => {
              return (
                <div key={idx} style={Style.round}>
                  <Image src={icon}></Image>
                </div>
              );
            })}

            <div style={{ ...Style.round, ...Style.noneColor }}>
              <Image src={EllipseVerticalIcon}></Image>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const Style = {
  round: {
    width: "45px",
    height: "45px",
    padding: "5px",
    backgroundColor: "#74c0fc",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "15px",
  },

  noneColor: {
    backgroundColor: "unset",
  },
};

export default ResponsiveNavbar;
