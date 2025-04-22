import { useState } from "react";
import { useStore } from "../../store/GeneralStore";

import { Box, Alert, AlertTitle } from "@mui/material";
import ContactsDialog from "./ContactDialog";


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


const ContactsTab = () => {

    const [open, setOpen] = useState(false);
    const data = useStore((state) => state.contactData);

    const handleClose = () => setOpen(false);
  
  

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 , }}>
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

        
        <Alert {...alertSx} sx={{ ...alertSx.sx, width: 910 }}>
          <AlertTitle sx={{ mt: 1, mb: 4 }}>Должность</AlertTitle>
          {data?.post || ''}
        </Alert>

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

    <ContactsDialog open={open} onClose={handleClose}/>
    </Box>
  );
};

export default ContactsTab;
