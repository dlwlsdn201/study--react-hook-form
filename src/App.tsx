import { useForm } from "react-hook-form";
import "./styles.css";

type FormValues = {
  email: string;
  password: string;
};

const styles = {};

/**
 * React Hook Form의 기본 등록(register)과 제출(handleSubmit) 흐름을 학습하는 루트 컴포넌트.
 */
export function App() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitted },
  } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
  });

  // 제출 시 현재 입력값을 빠르게 확인하기 위한 학습용 핸들러.
  const onSubmit = async (values: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1_000));
    alert(
      `입력된 이메일: ${values.email}, 입력된 비밀번호: ${values.password}`,
    );
  };
  return (
    <main
      style={{ maxWidth: 420, margin: "48px auto", fontFamily: "sans-serif" }}>
      <h1>react-hook-form 학습 시작</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>이메일</label>
        <input
          id='email'
          type='email'
          placeholder='you@example.com'
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          className='styled-input'
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
        />
        {errors.email && (
          <small role='alert' className='error'>
            {errors.email.message}
          </small>
        )}
        <label htmlFor='password'>비밀번호</label>
        <input
          id='password'
          type='password'
          placeholder='********'
          className='styled-input'
          autoComplete='current-password'
          aria-invalid={
            isSubmitted ? (errors.password ? "true" : "false") : undefined
          }
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이어야 합니다.",
            },
            maxLength: {
              value: 16,
              message: "비밀번호는 16자 이하이어야 합니다.",
            },
          })}
        />
        {errors.password && (
          <small className='error'>{errors.password.message}</small>
        )}
        <button disabled={isSubmitting} type='submit' className='styled-button'>
          로그인
        </button>
      </form>
    </main>
  );
}
