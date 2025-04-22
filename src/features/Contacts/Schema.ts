import { z } from "zod";
import {description} from '../Information/Schema'


const nameSchema = () =>
z
  .string({ required_error: "Поле обязательно" })
  .min(1, { message: "Поле обязательно" })
  .regex(/^[a-zа-яё\s-]+$/i, {
    message: "Допустимы только буквы, пробелы и дефисы",
  });

  const phoneSchema = z
  .string()
  .min(1, "Телефон обязателен") 
  .refine((val) => /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/.test(val), {
    message: "Введите номер в формате +375 (XX) XXX-XX-XX",
  });

const emailSchema = z
.string({ required_error: "Email обязателен" })
.min(1, { message: "Email обязателен" })
.email({ message: "Неверный формат email" });


export const Schema = z.object({
   
    name: nameSchema(),
    lastName:nameSchema(),
    phoneNum: phoneSchema,
    mail:emailSchema,
    post: description(),             
    
  });
  
  export type ContactsFormData = z.infer<typeof Schema>;