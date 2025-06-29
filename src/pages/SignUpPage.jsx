import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  const acountStyle = {
    background: "white",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={acountStyle}>
      <SignUp redirectUrl="/dashboard" />;
    </div>
  );
};

export default SignUpPage;
