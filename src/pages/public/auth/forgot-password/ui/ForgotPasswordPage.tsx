import { ForgotPasswordForm } from "@/features/auth/forgot-password/ui/ForgotPasswordForm";

export const ForgotPasswordPage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="w-full max-w-md p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Восстановление пароля</h2>
      <ForgotPasswordForm />
    </div>
  </div>
);
