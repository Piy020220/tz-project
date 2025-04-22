// src/components/ConditionAlert.tsx
import { Alert, AlertTitle, Box, SxProps } from "@mui/material";

interface ConditionAlertProps {
  title: string;
  children?: React.ReactNode;
  sx?: SxProps; 
}

const ConditionAlert: React.FC<ConditionAlertProps> = ({ title, children, sx }) => {
  return (
    <Box
      sx={{
        position: "relative", 
        ...((sx as object) || {}), 
      }}
    >
      <Alert
        severity="info"
        variant="standard"      
        icon={false}
        sx={{
          width: 360,
          height: 84,
          px: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <AlertTitle sx={{ fontWeight: 500, mb: 0.5 }}>{title}</AlertTitle>
        {children}
      </Alert>

      
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 30,
          right: 30,
          height: "1px",
          backgroundColor: "rgba(0,0,0,0.12)",
        }}
      />
    </Box>
  );
};

export default ConditionAlert;

