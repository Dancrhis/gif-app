import { TextField, Button, Box } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { LoginContext } from "context/authentication";
 




const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});
function LoginForm({ onSubmit, errorMessage }) {
  const formMethods = useForm({ resolver: yupResolver(loginSchema) });
  const {setUserData}=useContext(LoginContext)

  function HandleLoginSubmit(loginData) {
    onSubmit(loginData);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
          }}
        >
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(HandleLoginSubmit)}>
              <TextField
                placeholder="username"
                type="text"
                name="email"
                {...formMethods.register("username")}
                helperText={formMethods.formState.errors?.email?.message}
                error={Boolean(formMethods.formState.errors?.email)}
                sx={{
                  margin: "5px",
                }}
              />

              <TextField
                placeholder="pass"
                type="password"
                name="password"
                {...formMethods.register("password")}
                helperText={formMethods.formState.errors?.password?.message}
                error={Boolean(formMethods.formState.errors?.password)}
                sx={{
                  margin: "5px",
                }}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{
                  margin: "5px",
                }}
              >
                acceder
              </Button>
              {errorMessage && (
                <span style={{ color: "red" }}> {errorMessage}</span>
              )}
            </form>
          </FormProvider>
        </Box>
      </Box>
    </div>
  );
}
export default LoginForm;
