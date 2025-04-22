import { z } from "zod";
import {description} from '../Information/Schema'

const nineDigitSchema = z
.string()
.regex(/^\d{9}$/, "Введите корректные данные (9 символов)");

const twelveDigitSchema = z
.string()
.regex(/^\d{12}$/, "Введите корректные данные (12 символов)");


const alphanumCaps28Schema = z
.string()
.regex(/^[A-Z0-9]{28}$/, "Введите корректные данные (28 символов)");

const alphanumCaps8Schema = z
.string()
.regex(/^[A-Z0-9]{8}$/, "Введите корректные данные (8 символов)");

export const Schema = z.object({
   
    unp: nineDigitSchema,
    okpo: twelveDigitSchema,
    iban: alphanumCaps28Schema,
    bik: alphanumCaps8Schema,
    juridicalAddress: description(),         
    postalIndex: description(),             
    cbu: description(),                     
    bankLocation: description(),

  });
  
  export type RequisitesFormData = z.infer<typeof Schema>;