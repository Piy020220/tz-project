import { Alert, AlertTitle, Box } from "@mui/material";
import {InformationFormData} from '../Schema'

interface CategoriesRectangleProps {
  data: InformationFormData | null;
}

export const CategoriesRectangle = ({ data }: CategoriesRectangleProps) => {
  return (
    <Box
    sx={{
      borderRadius: "10px",
      display: "flex",
      p:2,
      border: "2px solid #0000001F",
      justifyContent: 'flex-start' 
      }}
    >
<Alert
        severity="info"
        variant="outlined"
        icon={false} 
        sx={{
          width: 470,
          height: 196,
          border: "none",  
        }}
      >
        <AlertTitle>Категории</AlertTitle>
        {data?.category || 'Категории отобразятся при добавлении товара'}
      </Alert>
  
    </Box>
  );
};

export default CategoriesRectangle;
