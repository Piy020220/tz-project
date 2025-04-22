import { Alert, AlertTitle, Box } from "@mui/material";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import {InformationFormData} from '../Schema'


interface MainRectangleProps {
  data: InformationFormData | null;
}


const MainRectangle = ({ data }: MainRectangleProps) => (

<Box
sx={{ 
  display:'flex',
  flexDirection: 'row',
  justifyContent: "space-between", 
  alignItems: 'center',
  px: 2,    
  py:2, 
  gap: 5,
  border: "2px solid #0000001F",
  borderRadius: "8px"
}}
>
  <Box
  sx={{
    position: "relative",   
    width: 290,
    height: 200,
    mr: 2,                  
    overflow: "hidden",
    borderRadius: "8px",
    backgroundColor: "grey",
  }}
  >
    <Box
    component="img"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
        {!data?.image && (
        <PhotoOutlinedIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 64,
          height: 64,
          color: "rgba(255,255,255,0.8)",
        }}
          />
        )}
      </Box>

    <Alert
        severity="info"
        variant="outlined"
        icon={false} 
        sx={{
          width: 580,
          height: 200,
          flex: '0 0 auto',
          flexDirection: "column",
          border: "none",  
          
        }}
      >
        <AlertTitle >Описание</AlertTitle>
        {data?.description || "Расскажите о своей компании"}
      </Alert> 
    </Box>
  );

export default MainRectangle;
