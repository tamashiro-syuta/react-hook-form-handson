import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs, basicFormSchema } from "./zod";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(basicFormSchema),
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // exampleという名前のinputの値を監視する
  console.log(watch("example"))

  return (
    // "handleSubmit"は、"onSubmit"を呼び出す前に入力を検証します。
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register関数を呼び出して、入力をフックに登録する。 */}
      <input defaultValue="test" {...register("example")} />
      <br />
      {errors.example && errors.example.message}
      <br />

      {/* 第2引数にはバリデーションを入れる */}
      <input {...register("exampleRequired", { required: true })} />
      <br />
      {/* フィールドのバリデーションに失敗した場合、エラーが返されます。 */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br />

      <input type="submit" />
    </form>
  )
}
