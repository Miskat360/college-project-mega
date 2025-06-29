import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  const acountStyle = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={acountStyle}>
      <SignIn redirectUrl="/dashboard" />;
    </div>
  );
};

export default SignInPage;
