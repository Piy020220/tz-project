import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { IMaskInput } from "react-imask";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Button,
} from "@mui/material";

import { ContactsFormData, Schema } from "./Schema";
import { useStore } from '../../store/GeneralStore';

interface ContactsDialogProps {
  open: boolean;
  onClose: () => void;
}

const ContactsDialog = ({ open, onClose }:  ContactsDialogProps) => {
  
const setData = useStore((state) => state.setContacts);
  
const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactsFormData>({
    resolver: zodResolver(Schema),
  });
  
  const onSubmit = (data: ContactsFormData) => {
    console.log("errors", errors)
    setData(data)
    onClose()
    console.log("Форма валидна, данные:", data);
  };

   const textFieldSx = {
    maxWidth: 400,
    height: 56,
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  };

  useEffect(() => {
    if(!open){
      reset()
    }
  },[open,reset])

  return (
    <Dialog component="form"
    onSubmit={handleSubmit(onSubmit)}
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          mt: "137px",
          borderRadius: 3,
          display:'flex',
          justifyContent:'center'
        },
      }}
    >
      <DialogTitle sx={{ px: 4, pt: 3 }}>Редактировать контакты</DialogTitle>

      <DialogContent
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent:'center',
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 4.5 }}>
          <TextField
            label="Фамилия"
            size="small"
            sx={textFieldSx}
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
             />
             
             <TextField
            label="Имя"
            size="small"
            sx={textFieldSx}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}

          />
        </Box>

        <TextField
          label="Должность"
          fullWidth
          size="small"
          sx={{
            maxWidth: 840,
            height: 79,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px", 
            },
          }}
          {...register("post")}
          error={!!errors.post}
          helperText={errors.post?.message || 'Выберете должность'}
        />

        <Box sx={{ display: "flex", gap: 4.5 }}>
          <TextField
            label="Телефон"
            fullWidth
            size="small"
            sx={textFieldSx}
            {...register("phoneNum")}
            error={!!errors.phoneNum}
            helperText={errors.phoneNum?.message}
            InputProps={{
              inputComponent: IMaskInput as any,
              inputProps: {
                mask: '+{375} (00) 000-00-00',
              },
            }}
          />

          <TextField
            label="E‑mail"
            type="email"
            fullWidth
            size="small"
            sx={textFieldSx}
            {...register("mail")}
            error={!!errors.mail}
            helperText={errors.mail?.message}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 4, pb: 3,display:'flex', justifyContent:'center' }}>
        
      <Button
            type='submit'
            variant="contained"
            sx={{
              backgroundColor: "#D60000",
              color: "#fff",
              width: 290,
              alignSelf: "center",
              height: 42,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            СОХРАНИТЬ
          </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactsDialog;
