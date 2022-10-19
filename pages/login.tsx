import { FlexRowCenter } from "components/flex-box";
import SEO from "components/SEO";
import { NextPage } from "next";
import Login from "pages-sections/sessions/Login";

const LoginPage: NextPage = () => {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <SEO title="Login" />
      <Login />
    </FlexRowCenter>
  );
};

export default LoginPage;
