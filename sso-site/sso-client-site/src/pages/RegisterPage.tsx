import { Reveal } from "@/components/base/Reveal";
import { RegisterForm } from "@/components/business/RegisterForm";
const RegisterPage = () => {
  return (
    <Reveal className=" relative h-screen w-screen flex justify-center items-center">
      <RegisterForm className=" w-80 h-120" />
    </Reveal>
  );
};

export default RegisterPage;
