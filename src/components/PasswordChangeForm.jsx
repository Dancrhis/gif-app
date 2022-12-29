import { TextField, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { LoginContext } from "context/authentication";

function PasswordLoginForm() {
  const { doPassChange, userdata } = useContext(LoginContext);
  console.log(userdata)
  const newPassSchema = yup.object({
    password: yup.string().required(),
    newpass: yup.string().required(),
    newpass2: yup
      .string()
      .required()
      .oneOf([yup.ref("newpass")], "password no coinciden"),
  });
  const formMethods = useForm({ resolver: yupResolver(newPassSchema) });
  function HandleSubmitPassChange(data) {
    console.log(data)
    const changedata={
        username:userdata.username,
        password:data.password,
        newpass:data.newpass
    }
    doPassChange(changedata)
    console.log(changedata);
  }

  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(HandleSubmitPassChange)}>
          <TextField
            name="password"
            label="password"
            placeholder="password"
            helperText={formMethods.formState.errors?.password?.message}
            error={Boolean(formMethods.formState.errors?.message)}
            {...formMethods.register("password")}
          />
          <TextField
            name="newpass"
            label="newpass"
            placeholder="nuevo password"
            helperText={formMethods.formState.errors?.newpass?.message}
            error={Boolean(formMethods.formState.errors?.message)}
            {...formMethods.register("newpass")}
          />
          <TextField
            name="newpass2"
            label="newpass2"
            placeholder="repetir nuevo password"
            helperText={formMethods.formState.errors?.newpass2?.message}
            error={Boolean(formMethods.formState.errors?.message)}
            {...formMethods.register("newpass2")}
          />
          <Button type="submit" variant="contained">
            Acceder
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default PasswordLoginForm;
