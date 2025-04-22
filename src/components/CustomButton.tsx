import { Button, SxProps } from "@mui/material";

interface CustomButtonProps {
    currentTab: number;
    onClick?: () => void; // ✅ добавь это
    sx?: SxProps;
    text:string;
    variant:string;
    
    
  }
  const CustomButton = ({ text, onClick, sx }: CustomButtonProps) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{
          borderRadius: "10px",
          height: 42,
          ...sx, // применим кастомные стили
        }}
      >
        {text}
      </Button>
    );
  };
  
  export default CustomButton;
  