import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>Guessify</li>
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 75px;
  font-size: 20px;
  display: flex;
  align-items: center;
  background-color: #143642;
  color: white;
  ul {
    list-style-type: none;
  }
  li {
    font-weight: 700;
  }
`;

export default Navbar;
