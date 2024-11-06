import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { myApi } from "@/axios/fetch";

export default function SignUp() {
  const [roles, setRoles] = useState([]);
  const [isStore, setIsStore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      role_id: "3",
    },
  });

  useEffect(() => {
    myApi
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        toast.error("Roller yüklenirken hata oluştu");
      });
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    try {
      await fetchUser.post("/signup", data);
      toast.success(
        "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!"
      );
      setIsLoading(false);
      setTimeout(() => {
        history.goBack();
      }, 3000);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Kayıt olurken bir hata oluştu"
      );
      setIsLoading(false);
    }
  };

  const handleRoleChange = (value) => {
    setValue("role_id", value);
    const selectedRole = roles.find((role) => role.id.toString() === value);
    setIsStore(selectedRole?.code === "store");
  };

  return (
    <div className="max-w-md mx-auto p-6 font-inter">
      <h1 className="text-h1-lg text-accent mb-6">Kayıt Ol</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            className="border-secondary focus:border-primary"
            {...register("name", {
              required: "İsim zorunludur",
              minLength: {
                value: 3,
                message: "İsim en az 3 karakter olmalıdır",
              },
            })}
            placeholder="İsim"
          />
          {errors.name && (
            <p className="text-h6-sm text-red-500 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

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
                value: 8,
                message: "Şifre en az 8 karakter olmalıdır",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir",
              },
            })}
            placeholder="Şifre"
            type="password"
          />
          {errors.password && (
            <p className="text-h6-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Select
          onValueChange={handleRoleChange}
          defaultValue="3"
          className="border-secondary focus:border-primary"
        >
          <SelectTrigger className="border-secondary focus:border-primary">
            <SelectValue placeholder="Rol seçin" className="text-h5-md" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem
                key={role.id}
                value={role.id.toString()}
                className="text-h5-md hover:text-primary"
              >
                {role.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {isStore && (
          <div className="space-y-4">
            <div>
              <Input
                className="border-secondary focus:border-primary"
                {...register("store.name", {
                  required: "Mağaza adı zorunludur",
                  minLength: {
                    value: 3,
                    message: "Mağaza adı en az 3 karakter olmalıdır",
                  },
                })}
                placeholder="Mağaza Adı"
              />
              {errors.store?.name && (
                <p className="text-h6-sm text-red-500 mt-1">
                  {errors.store.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                className="border-secondary focus:border-primary"
                {...register("store.phone", {
                  required: "Telefon zorunludur",
                  pattern: {
                    value: /^(\+90|0)?[0-9]{10}$/,
                    message: "Geçerli bir Türkiye telefon numarası girin",
                  },
                })}
                placeholder="Telefon"
              />
              {errors.store?.phone && (
                <p className="text-h6-sm text-red-500 mt-1">
                  {errors.store.phone.message}
                </p>
              )}
            </div>

            <div>
              <Input
                className="border-secondary focus:border-primary"
                {...register("store.tax_no", {
                  required: "Vergi numarası zorunludur",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message:
                      "Geçerli bir vergi numarası girin (TXXXXVXXXXXX formatında)",
                  },
                })}
                placeholder="Vergi No (TXXXXVXXXXXX)"
              />
              {errors.store?.tax_no && (
                <p className="text-h6-sm text-red-500 mt-1">
                  {errors.store.tax_no.message}
                </p>
              )}
            </div>

            <div>
              <Input
                className="border-secondary focus:border-primary"
                {...register("store.bank_account", {
                  required: "IBAN zorunludur",
                  pattern: {
                    value:
                      /^TR[0-9\s]{2}[0-9\s]{4}[0-9\s]{4}[0-9\s]{4}[0-9\s]{4}[0-9\s]{4}[0-9\s]{2}$/,
                    message: "Geçerli bir IBAN girin",
                  },
                  setValueAs: (value) => value.replace(/\s/g, ""),
                })}
                placeholder="IBAN (TR00 0000 0000 0000 0000 0000 00)"
              />
              {errors.store?.bank_account && (
                <p className="text-h6-sm text-red-500 mt-1">
                  {errors.store.bank_account.message}
                </p>
              )}
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-accent text-white text-h5-md"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span className="text-h5-md">Kaydediliyor...</span>
            </>
          ) : (
            "Kayıt Ol"
          )}
        </Button>
      </form>
    </div>
  );
}
