import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // exampleという名前のinputの値を監視する
  console.log(watch("example"))

  return (
    // "handleSubmit"は、"onSubmit"を呼び出す前に入力を検証します。
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register関数を呼び出して、入力をフックに登録する。 */}
      <input defaultValue="test" {...register("example")} />

      {/* 第2引数にはバリデーションを入れる */}
      <input {...register("exampleRequired", { required: true })} />
      {/* フィールドのバリデーションに失敗した場合、エラーが返されます。 */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}
