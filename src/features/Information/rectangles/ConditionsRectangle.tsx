import { Box } from "@mui/material";
import ConditionAlert from "../subcomponents/ConditionAlert";
import {InformationFormData} from '../Schema'

interface ConditionsRectangleProps {
  data: InformationFormData | null;
}

const ConditionsRectangle = ({ data }: ConditionsRectangleProps ) => {
  
  return (
    <Box
      sx={{
        flexDirection: 'column', 
        border: "2px solid #0000001F",
        borderRadius: "10px",
        display: "flex",
        
        justifyContent: 'center' // равные пробелы
      }}
    >
      <ConditionAlert title="Налогообложение" >{data?.taxField || ""} </ConditionAlert>
      <ConditionAlert title="Минимальный заказ" >{data?.weight || ""} </ConditionAlert>
      <ConditionAlert title="Дополнительные условия продажи">{data?.additionalInfo || ""} </ConditionAlert>
    </Box>
  );
};

export default ConditionsRectangle;
