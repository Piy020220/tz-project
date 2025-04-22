import {Box} from "@mui/material";

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

      <InfoDialog  open={open} onClose={handleClose} />
    </Box>
  );
};

export default InformationTab;