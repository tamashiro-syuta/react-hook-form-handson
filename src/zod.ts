import { z } from "zod";

export const basicFormSchema = z.object({
  example: z
    .string() // 文字列型
    .min(1, { message: "名前を入力してください" }) // 最低でも1文字以上、エラーメッセージをカスタマイズ
    .optional(), // nullを許容
  exampleRequired: z
    .string() // 文字列型
});

export type Inputs = {
  example: string
  exampleRequired: string
}
