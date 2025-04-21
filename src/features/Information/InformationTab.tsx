import {Box,Button} from "@mui/material";

import { useState } from "react";
import { useStore } from "../../store/GeneralStore";

import MainRectangle from "./rectangles/MainRectangle";
import CategoriesRectangle from "./rectangles/CategoriesRectangle";
import ConditionsRectangle from "./rectangles/ConditionsRectangle";
import InfoDialog from "./InfoDIalog";


export const InformationTab = () => {
  const [open, setOpen] = useState(false);
  
  const data = useStore((state) => state.data);

  console.log('=====infoDAATAAA======',data)
  
  
   const handleClick = () => setOpen(true);
   const handleClose = () => setOpen(false);

    

  return (
    <Box sx={{ display: "flex", flexDirection: "column", }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "felx-start",
          flexDirection:'row',
          p: 1,
          
        }}
      >
        <MainRectangle  data={data}/>
      </Box>

      <Box sx={{ display: "flex",gap: 9,flexDirection: 'row', justifyContent: 'flex-start',  mt: 2,     }}>
        
        <CategoriesRectangle data={data} />          
         <ConditionsRectangle data={data}/>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ width: 290, height: 42, borderRadius: "10px", mt: "70px",bgcolor:'#CD0C0D' }}
        onClick={handleClick}
      >
        Редактировать
      </Button>
      <InfoDialog  open={open} onClose={handleClose} />
    </Box>
  );
};

export default InformationTab;