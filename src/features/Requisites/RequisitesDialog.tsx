
import {
    Box,
    Dialog,
    DialogContent,
    TextField,
    Button,
    Typography,
  } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {useStore} from '../../store/GeneralStore'
import {RequisitesFormData, Schema } from "./Schema";


  interface RequisitesDialogProps {
    open: boolean;
    onClose: () => void;
  }
  
  const RequisitesDialog = ({ open, onClose }:  RequisitesDialogProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<RequisitesFormData>({
        resolver: zodResolver(Schema),
    
      });

      const setData = useStore((state) => state.setRequisites);

      const onSubmit = (data: RequisitesFormData) => {
        console.log("errors", errors)
        setData(data)
        onClose()
        console.log("Форма валидна, данные:", data);  
      };
    
    
    return (
      <Dialog component="form"
      onSubmit={handleSubmit(onSubmit)}
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            p: 0,
            borderRadius: 3,
            overflow: "visible",
            mt: "137px", 
          },
        }}
      >
        <DialogContent
          sx={{
            px: 4, 
            py: 4,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Заполнение реквизитов
          </Typography>
  
  
          <Box sx={{ display: "flex", gap: 5  }}>
            <TextField
              fullWidth
              label="УНП"
              {...register("unp")}
              error={!!errors.unp}
              helperText={errors.unp?.message}
              
              sx={{
                maxWidth: 400,
                height: 56,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", 
                },
              }}
            />
            <TextField
              fullWidth
              label="ОКПО"
              sx={{
                maxWidth: 400,
                height: 56,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", 
                },
              }}
              {...register("okpo")}
              error={!!errors.okpo}
              helperText={errors.okpo?.message}
            />
          </Box>
          
          <TextField
            fullWidth
            label="Юридический адрес"
            sx={{
              maxWidth: 840,
              height: 56,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", 
              },
            }}
            {...register("juridicalAddress")}
            error={!!errors.juridicalAddress}
            helperText={errors.juridicalAddress?.message}
              
          />
  
          
          <TextField
            fullWidth
            label="Почтовый адрес"
            sx={{
              maxWidth: 840,
              height: 56,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", 
              },
            }}
            {...register("postalIndex")}
            error={!!errors.postalIndex}
            helperText={errors.postalIndex?.message}
            
          />
  
          
          <Box sx={{ display: "flex", gap: 5 }}>
            
            <TextField
              fullWidth
              label="Расчетный счет"
              sx={{
                maxWidth: 400,
                height: 56,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", 
                },
              }}
              {...register("iban")}
              error={!!errors.iban}
              helperText={errors.iban?.message}
            />

            <TextField
              fullWidth
              label="ЦБУ"
              sx={{
                maxWidth: 400,
                height: 56,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", 
                },
              }}
              {...register("cbu")}
              error={!!errors.cbu}
              helperText={errors.cbu?.message}
            />
            </Box>
  
  
          <Box sx={{ display: "flex", gap: 5  }}>
            <TextField
              fullWidth
              label="БИК"
              sx={{
                maxWidth: 400,
                height: 56,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", 
                  border:'none'
                },
              }}
              {...register("bik")}
              error={!!errors.bik}
              helperText={errors.bik?.message}
            />

            <TextField
              fullWidth
              label="Местонахождение банка"
              sx={{
                maxWidth: 400,
                height: 56,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", 
                },
              }}
              {...register("bankLocation")}
              error={!!errors.bankLocation}
              helperText={errors.bankLocation?.message}
            />
          </Box>
  
          <Button
            type='submit'
            variant="contained"
            sx={{
              backgroundColor: "#D60000",
              color: "#fff",
              width: 290,
              alignSelf: "center",
              height: 42,
              borderRadius: '10px',
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            СОХРАНИТЬ
          </Button>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default RequisitesDialog;
  