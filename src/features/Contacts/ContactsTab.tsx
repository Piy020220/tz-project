import { Box, Alert, AlertTitle, Button } from "@mui/material";
import { useState } from "react";
import ContactsDialog from "./ContactDialog";
import { useStore } from "../../store/GeneralStore";

const alertSx = {
  icon: false,
  severity: "info" as const,
  variant: "standard" as const,
  sx: {
    height: 84,
    px: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "start",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid     rgba(0,0,0,0.12)",
  },
};

const hueta = {
    sx : {
        fontWeight : 500
    }
}

const ContactsTab = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const data = useStore((state) => state.contactData);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
      {/* 🟥 Контейнер с алертами */}
      <Box
        sx={{
          
          display: "flex",
          flexDirection: "column",
          justifyContent:'flex-start',
          alignItems: "center",
          gap: '10px',
          border: "2px solid #0000001F",
          borderRadius: 2,
          boxSizing: "border-box",
          p: 3,
        }}
      >
        {/* верхний ряд из двух */}
        <Box sx={{ display: "flex", gap: 5, flexDirection:'row' }}>
          <Alert {...alertSx} sx={{ ...alertSx.sx, width: 435,  }}>
            <AlertTitle sx={{ mt: 1, mb: 4 }}>Фамилия</AlertTitle>
            {data?.lastName || ''}
          </Alert>
          <Alert {...alertSx} sx={{ ...alertSx.sx, width: 435, }}>
            <AlertTitle sx={{ mt: 1, mb: 4 }}>Имя</AlertTitle>
            {data?.name || ''}
          </Alert>
        </Box>

        {/* центральный широкий */}
        <Alert {...alertSx} sx={{ ...alertSx.sx, width: 910 }}>
          <AlertTitle sx={{ mt: 1, mb: 4 }}>Должность</AlertTitle>
          {data?.post || ''}
        </Alert>

        {/* нижний ряд из двух */}
        <Box sx={{ display: "flex", gap: 5, flexDirection:'row' }}>
          <Alert {...alertSx} sx={{ ...alertSx.sx, width: 435, border:'none' }}>
            <AlertTitle sx={{ mt: 1, mb:4 }}>Телефон</AlertTitle>
            {data?.phoneNum || ''}
          </Alert>
          <Alert {...alertSx} sx={{ ...alertSx.sx, width: 435 , border:'none'}}>
            <AlertTitle sx={{ mt: 1, mb:4 }}>Е-mail</AlertTitle>
            {data?.mail || ''}
          </Alert>
        </Box>
      </Box>

      {/* 🟦 Кнопка редактирования — вне блока с алертами */}
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          width: 290,
          height: 42,
          borderRadius: "10px",
          bgcolor: "#CD0C0D",
          textTransform: "none",
        }}
      >
        РЕДАКТИРОВАТЬ
      </Button>
    <ContactsDialog open={open} onClose={handleClose}/>
    </Box>
  );
};

export default ContactsTab;
