
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { zodResolver } from "@hookform/resolvers/zod";

import { Schema, InformationFormData } from "./Schema";  //userSchema, User
import { TextField, Button, Box, DialogContent, DialogActions, Dialog, Typography, DialogTitle, InputAdornment, MenuItem } from "@mui/material";
import { useStore } from "../../store/GeneralStore";



interface InfoDialogProps {
    open: boolean;
    onClose: () => void;
  }

   const InfoDialog = ({ open, onClose }:  InfoDialogProps) =>{ 
    
    
    const [file, setFile] = useState<File | null>(null);
    
    const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InformationFormData>({
    resolver: zodResolver(Schema),

  });

  const setData = useStore((state) => state.setData);

  const onSubmit = (data: InformationFormData) => {
    console.log("errors", errors)
    useStore.getState().setData(data);
    setData(data)
    onClose()
    console.log("Форма валидна, данные:", data);
    
  };

  console.log("Ошибки:", errors);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setValue("image", selectedFile, { shouldValidate: true }); 
  }, [setValue]);
  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
    },
    maxFiles: 1,
  });

  return (
   
    <Dialog component="form" 
    onSubmit={handleSubmit(onSubmit)}
     open={open} onClose={onClose} maxWidth="md" fullWidth>

    <DialogTitle sx={{ px: 4, pt: 3 }}>Заполнение информации</DialogTitle>

    <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 4, p: 6, background:'#FFFFFF',borderRadius:4 }}>

  
  <Box sx={{ display: "flex", gap: 4 }}>
    
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
    
      <Box
        {...getRootProps()}
        sx={{
          flexShrink: 0,
          height: 152,
          border: "2px dashed #ccc",
          borderRadius: '10px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input {...getInputProps()}  />
        
        {file ? (
          <Typography>Файл: {file.name}</Typography>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <Typography>Link or drag and drop</Typography>
            <Typography variant="body2" color="text.secondary">
              PNG, JPG or GIF (max. 3MB)
            </Typography>
          </Box>
        )}
      </Box>


      <TextField
  label="Налогообложение"
  variant="outlined"
  fullWidth
  size="small"
  select
  defaultValue=""
  {...register("taxField" )} 
  sx={{
    width: 400,          
    height: 56,          
    '& .MuiOutlinedInput-root': {
      height: '100%',    
      borderRadius: '10px' 
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px',
    },
  }}
  
>
  <MenuItem value="С НДС">С НДС</MenuItem>
  <MenuItem value="Без НДС">Без НДС</MenuItem>
</TextField>

      
      <TextField
        label="Минимальный заказ"
        variant="outlined"
        fullWidth
        size="small"
        type="number"
        {...register('weight',{ valueAsNumber: true })}
        error={!!errors.weight}
        helperText={errors.weight?.message || "Заполните минимальный вес отгрузки"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography variant="body1" color="text.secondary" >
                Kg
              </Typography>
            </InputAdornment>
          ),
        }}
        sx={{
          width: 400,           
          height: 56,           
          '& .MuiOutlinedInput-root': {
            height: '100%', 
            borderRadius: '10px' 
          },
          '& .MuiOutlinedInput-input': {
            padding: '10px 14px', 
          },
        }}
        
      />
</Box>

    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
      <TextField
        label="Описание"
        variant="outlined"
        fullWidth
        size="small"
        multiline
        rows={4}
        {...register('description')}
        error={!!errors.description}
        helperText={errors.description?.message}
        sx={{
          width: 400,           
          height: 152,          
          '& .MuiOutlinedInput-root': {
            height: '100%',     
            borderRadius: '10px' 
          },
          '& .MuiOutlinedInput-input': {
            padding: '10px 14px',
          },
        }}
        
      />

      <TextField
        label="Дополнительные условия продажи"
        variant="outlined"
        fullWidth
        size="small"
        multiline
        rows={4}
        {...register('additionalInfo')}
        error={!!errors.additionalInfo}
        helperText={errors.additionalInfo?.message || "Необязательное поле"}
        sx={{
          width: 400,            
          height: 175,           
          '& .MuiOutlinedInput-root': {
            height: '100%',      
            borderRadius: '10px'
          },
          '& .MuiOutlinedInput-input': {
            padding: '10px 14px', 
          },
        }}
        
      />
    </Box>
  </Box>

 
  <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
    <Button type="submit" variant="contained" size="large" sx={{background:'#CD0C0D',width:290, height:42, borderRadius:'10px'}}>
      Сохранить
    </Button>
  </Box>
</DialogContent>
<DialogActions sx={{ px: 4, pb: 3 }}>

    </DialogActions>
  </Dialog>
  );
};

export default InfoDialog;