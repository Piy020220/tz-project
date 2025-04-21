import { Button } from "@mui/material";

interface CustomButtonProps {
    currentTab: number;
    
  }
  
   export const CustomButton: React.FC<CustomButtonProps> = ({ currentTab }) => {
    const handleClick = () => {
      switch (currentTab) {
        case 0:
          console.log("Открыть форму: Информация");
          break;
        case 1:
          console.log("Открыть форму: Реквизиты");
          break;
        case 2:
          console.log("Открыть форму: Контакты");
          break;
        case 3:
          console.log("Открыть форму: Документы");
          break;
        default:
          console.log("Неизвестный таб");
      }
    };
  
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{ width: 290, height: 42, borderRadius: "10px", mt:'70px' }}
        onClick={handleClick}
      >
        Редактировать
      </Button>
    );
  };
  export default CustomButton;