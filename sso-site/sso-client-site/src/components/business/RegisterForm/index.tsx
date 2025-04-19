import { Link } from "react-router";
import { FormContainer } from "@components/Form/FormContainer";
import { InputController } from "@components/Form/controllers/InputController";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { RegisterFormSchema, RegisterFormType } from "./schema";

interface RegisterFormProps {
  className?: string;
}
export const RegisterForm: React.FC<RegisterFormProps> = ({ className }) => {
  return (
    <FormContainer
      className={cn(
        className,
        " bg-white backdrop-blur-2xl flex items-center justify-center p-4 border shadow-2xl "
      )}
      defaultValues={{
        username: "",
        password: "",
      }}
      onSubmit={(data: RegisterFormType) => {
        console.log(data);
      }}
      onError={(errors) => {
        console.log(errors);
      }}
      schema={RegisterFormSchema}
    >
      <div className=" w-full flex flex-col gap-1  items-center">
        <div className=" w-[85%]">
          <label
            className=" ml-3 text-sm text-[rgb(117,117,117)]"
            htmlFor="username"
          >
            Username
          </label>
          <InputController<RegisterFormType>
            className=" focus-visible:ring-0 h-8 border-[rgb(134,134,134)] border-1 rounded-none bg-white "
            errorClassName=" border-l-4 border-l-red-500"
            name="username"
            type="text"
          />
        </div>
        <div className=" w-[85%]">
          <label
            className=" ml-3 text-sm text-[rgb(117,117,117)]"
            htmlFor="email"
          >
            Email
          </label>
          <InputController<RegisterFormType>
            className=" focus-visible:ring-0 h-8 border-[rgb(134,134,134)] border-1 rounded-none bg-white "
            errorClassName=" border-l-4 border-l-red-500"
            name="email"
            type="email"
          />
        </div>
        <div className=" w-[85%]">
          <label
            className=" ml-3 text-sm text-[rgb(117,117,117)]"
            htmlFor="password"
          >
            Password
          </label>
          <InputController<RegisterFormType>
            className=" focus-visible:ring-0 h-8 border-[rgb(134,134,134)] border-1 rounded-none bg-white"
            errorClassName=" border-l-4 border-l-red-500"
            name="password"
            type="password"
          />
        </div>
        <Button
          className=" h-8 w-[85%] mt-8 rounded-none cursor-pointer bg-[rgb(238,60,61)]"
          type="submit"
        >
          <span className=" font-extralight text-lg">Sign up</span>
        </Button>
        <div className=" mt-1 flex justify-between w-[85%]">
          <div className=" flex items-center gap-2">
            <Checkbox id="remember" />
            <label
              className=" text-[0.75rem] text-[rgb(117,117,117)]"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className=" mt-6 w-[70%] h-[0.08rem] bg-[rgb(144,144,144)]"></div>
        <div className=" mt-4 flex gap-4">
          <Avatar className=" border w-9 h-9">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar className=" border w-9 h-9">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Avatar className=" border w-9 h-9">
            <AvatarImage src="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <div>
          <Link to={"/"} className=" text-[0.75rem] text-[rgb(117,117,117)]">
            Already has an Account
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};
