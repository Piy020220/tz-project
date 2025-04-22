import { useState } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import InformationTab from "./features/Information/InformationTab";
//import TittleContentsts from "./features/Information/subcomponents/TittleContents";
import CustomButton from "./components/CustomButton";
import RequisitesTab from "./features/Requisites/RequisitesTab";
import ContactsTab from "./features/Contacts/ContactsTab";
import InfoDialog from "./features/Information/InfoDIalog";
import RequisitesDialog from "./features/Requisites/RequisitesDialog";
import ContactsDialog from "./features/Contacts/ContactDialog";


function App() {
  
  const [tabIndex, setTabIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  }; 
  
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);


  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        paddingY: 4,
        
      }}
    >
      

      <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Информация" />
        <Tab label="Реквизиты" />
        <Tab label="Контакты" />
        <Tab label="Документы" />
      </Tabs>
      
        <Box 
        sx={{
          mt: 2,
          width: "100%",       
          mx: "auto",           
        }}
        >
          {tabIndex === 0 && <InformationTab />}  
          {tabIndex === 1 && <RequisitesTab />}    
          {tabIndex === 2 && <ContactsTab />}
          </Box>
          
          <CustomButton
          text="РЕДАКТИРОВАТЬ"
          currentTab={0}    
          variant="contained"
          onClick={handleOpenDialog}
          sx={{
          mt:9,
            width: 290,
            height: 42,
            borderRadius: "10px",
            bgcolor: "#CD0C0D",
            textTransform: "none",
          }}
          />
          {tabIndex === 0 && <InfoDialog open={dialogOpen} onClose={handleCloseDialog} />}
          {tabIndex === 1 && <RequisitesDialog open={dialogOpen} onClose={handleCloseDialog} />}
          {tabIndex === 2 && <ContactsDialog open={dialogOpen} onClose={handleCloseDialog} />}
    </Container>
  );
}

export default App;




        