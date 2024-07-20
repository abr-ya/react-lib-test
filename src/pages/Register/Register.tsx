import { SubmitErrorHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./register.css";

interface IFormData {
  username: string;
  email: string;
  channel: string;
}

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Email format is not valid").required("Email is required"),
  channel: yup.string().required("Channel is required"),
});

const defaultValues = {
  username: "",
  email: "",
  channel: "",
};

const Register = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<IFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const submitHandler = (submitData: IFormData) => {
    console.log("Submit with data", submitData);
  };

  const errorHandler: SubmitErrorHandler<IFormData> = (submitErrors) => {
    console.log("Submit with errors", submitErrors);
  };

  const resetHandler = () => reset({ channel: "defaultName" });

  return (
    <div>
      <h1>Hook Form + Yup Validation</h1>

      <form onSubmit={handleSubmit(submitHandler, errorHandler)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")} />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={resetHandler}>
          Reset
        </button>
      </form>
      <div>Current email (watcher): {watch("email")}</div>
    </div>
  );
};

export default Register;
