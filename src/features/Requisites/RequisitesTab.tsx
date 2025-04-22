// src/features/Requisites/RequisitesTab.tsx
import { Box, Alert, AlertTitle } from "@mui/material";

import { useStore } from "../../store/GeneralStore";

const RequisitesTab = () => {
   
const data = useStore((state) => state.requisitesData);


const alertSx = {
    icon: false,
    severity: "info" as const,
    variant: "standard" as const,
    sx: {
      flex: 1,
      height: 84,
      px: 2,
      py: 2,
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0,0,0,0.12)",
    },
  };

  const longerAlertSx = {
    icon: false,
    severity: "info" as const,
    variant: "standard" as const,
    sx: {
      flex: 1,
      py: 3,
      height: 84,
      width: 910,
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0,0,0,0.12)",
    },
  };


  return (
      <Box
        sx={{
          mx: "auto",
          border: "2px solid #0000001F",
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxSizing: "border-box",
        }}
      >
        
        <Box sx={{ display: "flex", gap: 5,  }}>
          <Alert {...alertSx} >
            <AlertTitle> УНП</AlertTitle>
            {data?.unp || ''}
          </Alert>
          <Alert {...alertSx}>
            <AlertTitle> ОКПО</AlertTitle>
            {data?.okpo || ''}
          </Alert>
        </Box>


        <Alert  {...longerAlertSx}>
          <AlertTitle> Юридический адрес</AlertTitle>
          {data?.juridicalAddress || ''}
        </Alert>

        
        <Alert {...longerAlertSx} >
          <AlertTitle >Почтовый индекс</AlertTitle>
          {data?.postalIndex || ''}
        </Alert>


        <Box sx={{ display: "flex", gap: 2 }}>
          <Alert {...alertSx}>
            <AlertTitle>Расчетный счет</AlertTitle>
            {data?.iban|| ''}
          </Alert>
          <Alert {...alertSx}>
            <AlertTitle>ЦБУ</AlertTitle>
            {data?.cbu || ''}
          </Alert>
        </Box>


        <Box sx={{ display: "flex", gap: 2 }}>
          <Alert {...alertSx}>
            <AlertTitle>БИК</AlertTitle>
            {data?.bik || ''}
          </Alert>
          <Alert {...alertSx} sx={{ ...alertSx.sx, borderBottom: "none" }}>
            <AlertTitle>Местонахождение банка</AlertTitle>
            {data?.bankLocation || ''}
          </Alert>
        </Box>
      </Box>
  );
};

export default RequisitesTab;
