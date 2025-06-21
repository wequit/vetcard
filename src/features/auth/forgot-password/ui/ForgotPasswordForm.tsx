import { useForgotPassword } from "../model/useForgotPassword";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/Button";
import { useState } from "react";

export const ForgotPasswordForm = () => {
  const { step, loading, error, sendEmail, verifyCode, resetPassword, email } = useForgotPassword();
  const [input, setInput] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (step === "done") {
    return <div>Пароль успешно изменён! Теперь вы можете войти.</div>;
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (step === "email") sendEmail(input);
        if (step === "code") verifyCode(input);
        if (step === "reset") resetPassword();
      }}
      className="space-y-4"
    >
      {step === "email" && (
        <>
          <Input
            type="email"
            placeholder="Введите email"
            value={input}
            onChange={e => setInput(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" disabled={loading}>
            Отправить код
          </Button>
        </>
      )}
      {step === "code" && (
        <>
          <div>Код отправлен на {email}</div>
          <Input
            type="text"
            placeholder="Введите код из письма"
            value={input}
            onChange={e => setInput(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" disabled={loading}>
            Проверить код
          </Button>
        </>
      )}
      {step === "reset" && (
        <>
          <Input
            type="password"
            placeholder="Новый пароль"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" disabled={loading}>
            Сменить пароль
          </Button>
        </>
      )}
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};
