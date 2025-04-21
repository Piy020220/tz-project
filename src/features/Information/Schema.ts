  import { z } from "zod";

  const imageSchema = z
  .any()
  .optional()

  const categorySchema = z.string().min(1, "Выберите тип налогообожения").optional();

  const weightSchema = z
  .number({ required_error: "Введите число" })
  .min(0, "Вес не может быть отрицательным");

  export const description = () => z 
  .string({ required_error: "Обязательное поле" })
  .regex(/^[\p{L}\p{N}\s.,!?:;()\[\]'"«»\-]+$/u,"Недопустимые символы");

  const taxFieldShema = 
     z.enum(["С НДС", "Без НДС"], {
      errorMap: () => ({ message: "Выберите способ налогообложения" }),
    });
  
    const text4Schema = z
      .string()
      .regex(/^[\p{L}\p{N}\s]+$/u, "Допустимы только буквы, цифры и пробелы");

    

  export const Schema = z.object({
    image: imageSchema,
    category: categorySchema,
    weight: weightSchema,
    description : description() ,
    taxField:taxFieldShema,
    additionalInfo:description(),
    text2: text4Schema.optional(),
  

  });

  // Тип данных формы
  export type InformationFormData = z.infer<typeof Schema>;
