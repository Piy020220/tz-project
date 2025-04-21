import { Alert, Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CustomAlertProps {
  status?: "active" | "disabled";
}

const TittleContentsts: React.FC<CustomAlertProps> = ({ status = "active" }) => {
  const isDisabled = status === "disabled";

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 950,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingX: 2,
        marginBottom: 6,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 400,
          fontSize: "2.125rem",
          lineHeight: "124%",
          letterSpacing: "0.25px",
          color: "#000000DE",
        }}
      >
        ООО “Молочный Мир”
      </Typography>

      <Alert
        severity="error"
        icon={false} 
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 2,
          padding: 2,
          backgroundColor: "#FDEDED",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {/* Левая часть */}
        <Box sx={{ display: "flex", gap: 2, flex: 1, minWidth: 300 }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              padding: "10px",
              display: "flex",
              justifyContent:'space-between',
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <ErrorOutlineIcon
              sx={{
                width: 22,
                height: 22,
                color: isDisabled ? "#999" : "#D32F2F",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: "150%",
                letterSpacing: "0.15px",
                color: "#5F2120",
              }}
            >
              Статус аккаунта
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: "143%",
                letterSpacing: "0.17px",
                color: "#5F2120",
              }}
            >
              Для продолжения работы, необходимо заполнить профиль и отправить на модерацию
            </Typography>
          </Box>
        </Box>

        {/* Правая часть */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-end",
            minWidth: 246,
          }}
        >
          <Button
            variant="contained"
            disabled
            sx={{
              width: "246px",
              borderRadius: "10px",
              justifyContent: "space-between",
              backgroundColor: "var(--action-disabledBackground, #0000001F)",
              paddingLeft: "15px",
              paddingRight: "10px",
              textTransform: "none",
              height: 32,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "26px",
                  letterSpacing: "0.46px",
                  textTransform: "uppercase",
                  color: "var(--action-disabled, #00000061)",
                }}
              >
                Отправить на модерацию
              </Typography>
            </Box>

            <Box
              sx={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowForwardIcon sx={{ width: 20, height: 20 }} />
            </Box>
          </Button>

          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "#5F2120",
            }}
          >
            Прогресс: 0%
          </Typography>
        </Box>
      </Alert>
    </Box>
  );
};

export default TittleContentsts;
