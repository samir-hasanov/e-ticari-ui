import { useForm, Controller, SubmitHandler } from "react-hook-form";
import PageContainer from "../Components/lib/PageContainer";
import { Center, Input, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import axios from "axios";
import { MyContextData, useContextFunction } from "../context/ContextApi";
interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const { token, setToken } = useContextFunction();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    axios
      .post("http://localhost:8085/api/v1/auth/authenticate", data, {
        method: "POST",
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
      })
      .then(function (response) {
        console.log(response);
        console.log("Successfully Logged in ");
        navigate("/adminpage");
      });

    console.log(data);
  };

  return (
    <PageContainer>
      <Center mt="200px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={20} alignItems="center">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="username"
                  width="200px"
                  height="30px"
                  borderRadius="15px"
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="password"
                  width="200px"
                  height="30px"
                  borderRadius="15px"
                  type="password"
                />
              )}
            />

            <Button
              bg="skyblue"
              width="80px"
              height="40px"
              type="submit"
              cursor="pointer"
              fontWeight="bold"
              fontSize="15px"
              _hover={{ color: "blue" }}
              border="none"
              borderRadius="20px"
            >
              Login
              <CiLogin size={20} />
            </Button>
          </Stack>
        </form>
      </Center>
    </PageContainer>
  );
};

export default Login;
