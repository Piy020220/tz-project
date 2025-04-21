import { useState } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import InformationTab from "./features/Information/InformationTab";
import TittleContentsts from "./features/Information/subcomponents/TittleContents";
import CustomButton from "./components/CustomButton";
import RequisitesTab from "./features/Requisites/RequisitesTab";
import ContactsTab from "./features/Contacts/ContactsTab";


function App() {
  const [tabIndex, setTabIndex] = useState(0);
  

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  
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
      <TittleContentsts />

      <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Информация" />
        <Tab label="Реквизиты" />
        <Tab label="Контакты" />
        <Tab label="Документы" />
      </Tabs>

      {/* Центрируем контент по макету */}
     
        <Box
        sx={{
          mt: 2,
          width: "100%",         // тянем на всю ширину родителя
          maxWidth: 1440,        // но не больше макета
          mx: "auto",            // центрируем по горизонтали
     
            }}
          >
  
            {tabIndex === 0 && <InformationTab />}  
            {tabIndex === 1 && <RequisitesTab />}    
            {tabIndex === 2 && <ContactsTab />}
      </Box>
      
      
    
    </Container>
  );
}

export default App;



/*
        
        {tabIndex === 3 && <DocumentsTab />}
        */

        