import React from "react";
import { Container, Wrapper, Image } from "./Navbar.Styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>     {/*line renders the Wrapper component that was imported from Navbar.Styles */}
        <Image src="assets/almalogo.png" />
      </Wrapper>
    </Container>
  );
};

export default Navbar;    //exports the Navbar component as the default export of this module,
                          //so that it can be imported and used in other parts of the application.
