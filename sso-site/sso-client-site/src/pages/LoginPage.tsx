import { Reveal } from "@/components/base/Reveal";
import { LoginForm } from "@/components/business/LoginForm";
const LoginPage = () => {
  return (
    <Reveal className=" relative h-screen w-screen flex justify-center items-center">
      <LoginForm className=" w-80 h-100" />
    </Reveal>
  );
};

export default LoginPage;
