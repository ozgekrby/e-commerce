import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { loginUser } from "@/redux/actions/thunkActions";

export default function Login() {
  const history=useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    
    if(dispatch(loginUser(data))){
      
      setTimeout(() => {
        const canGoBack = window.history.length > 1;
        canGoBack ? history.goBack() : history.push('/');
      }, 3000);
    }

  };

  return (
    <div className="max-w-md mx-auto p-6 font-inter">
      <h1 className="text-h1-lg text-accent mb-6">Giriş Yap</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            className="border-secondary focus:border-primary"
            {...register("email", {
              required: "Email zorunludur",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Geçersiz email adresi",
              },
            })}
            placeholder="Email"
            type="email"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-h6-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Input
            className="border-secondary focus:border-primary"
            {...register("password", {
              required: "Şifre zorunludur",
              minLength: {
                value: 6,
                message: "Şifre en az 6 karakter olmalıdır",
              },
            })}
            placeholder="Şifre"
            type="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <p className="text-h6-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Input
            type="checkbox"
            {...register("rememberMe")}
            id="rememberMe"
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label
            htmlFor="rememberMe"
            className="text-h5-md text-accent cursor-pointer"
          >
            Beni Hatırla
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-accent text-white text-h5-md disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span className="text-h5-md">Giriş Yapılıyor...</span>
            </>
          ) : (
            "Giriş Yap"
          )}
        </Button>
      </form>
    </div>
  );
}
