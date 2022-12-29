import { TextField, Button, Box } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = yup.object({
  name: yup.string().required(),
  lastname: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

function RegisterForm({ registerError, doRegister }) {
  const formMethods = useForm({ resolver: yupResolver(registerSchema) });

  function HandleSubmitRegister(registerData) {
    console.log(registerData);
    doRegister(registerData);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        style={{ justifyContent: "center" }}
      >
        <h2>registrarse</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
            alignContent: "center",
          }}
        >
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(HandleSubmitRegister)}>
              <TextField
                type="text"
                name="username"
                label="UserName"
                placeholder="UserName"
                helperText={formMethods.formState.errors?.email?.message}
                error={Boolean(formMethods.formState.errors?.email)}
                {...formMethods.register("username")}
                sx={{
                  margin: "5px",
                }}
              />
              <TextField
                type="text"
                label="nombre"
                name="name"
                placeholder="Nombre"
                helperText={formMethods.formState.errors?.nombre?.message}
                error={Boolean(formMethods.formState.errors?.nombre)}
                {...formMethods.register("name")}
                sx={{
                  margin: "5px",
                }}
              />
              <TextField
                type="text"
                name="apellido"
                label="lastname"
                placeholder="Apellido"
                helperText={formMethods.formState.errors?.apellido?.message}
                error={Boolean(formMethods.formState.errors?.apellido)}
                {...formMethods.register("lastname")}
                sx={{
                  margin: "5px",
                }}
              />
              <TextField
                type="text"
                name="password"
                label="Password"
                placeholder="Password"
                helperText={formMethods.formState.errors?.password?.message}
                error={Boolean(formMethods.formState.errors?.password)}
                {...formMethods.register("password")}
                sx={{
                  margin: "5px",
                }}
              />
              {/* <TextField
                type="number"
                name="sueldo"
                label="Sueldo"
                placeholder="Sueldo"
                helperText={formMethods.formState.errors?.sueldo?.message}
                error={Boolean(formMethods.formState.errors?.sueldo)}
                //onChange={HandleRegisterChange}
                // value={registerData.sueldo}
                {...formMethods.register("sueldo")}
                sx={{
                  margin: "5px",
                }}
              /> */}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  margin: "5px",
                }}
              >
                registrar
              </Button>
            </form>
          </FormProvider>
        </Box>
      </Box>
    </div>
  );
}

export default RegisterForm;
