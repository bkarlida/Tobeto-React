import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import SignedIn from "../../layouts/signedIn";
import { Container, Menu} from "semantic-ui-react";
import SignedOut from "../../layouts/signedOut";
import CartSummary from "../../layouts/CartSummary";

type Props = {};

const Navbar = (props: Props) => {
  const authContext: any = useContext(AuthContext);

  const cartState = useSelector((state: any) => state.cart);
  console.log(cartState);

  return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {cartState.length>0&&<CartSummary/>}
            {authContext.isAuthenticated
              ? <SignedIn signOut={authContext.IsAuthenticated} />
              : <SignedOut signIn={authContext.setIsAuthenticated(false)} />}
          </Menu.Menu>
        </Container>
      </Menu>
  );
};

export default Navbar;
