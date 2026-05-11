import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

/**
 * React Hook Form의 기본 등록(register)과 제출(handleSubmit) 흐름을 학습하는 루트 컴포넌트.
 */
export function App() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { email: "" },
  });

  // 제출 시 현재 입력값을 빠르게 확인하기 위한 학습용 핸들러.
  const onSubmit = (values: FormValues) => {
    alert(`입력된 이메일: ${values.email}`);
  };

  return (
    <main style={{ maxWidth: 420, margin: "48px auto", fontFamily: "sans-serif" }}>
      <h1>react-hook-form 학습 시작</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          style={{ display: "block", width: "100%", marginTop: 8, marginBottom: 12, padding: 8 }}
        />
        <button type="submit">제출</button>
      </form>
    </main>
  );
}
