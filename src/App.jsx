import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  Grid2,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import BasicSpeedDial from "./components/SpeedDial";

export default function App() {
  return (
    <Container>
      {/* CABECERA */}
      <Box
        sx={{
          backgroundImage: "url(/src/bg_encabezado.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 150,
          width: "100%",
          borderRadius: "15px 15px 0 0",
          marginTop: "10px",
        }}
      ></Box>

      {/* nombre y puesto */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          marginTop: "-30px",
        }}
      >
        <Box>
          <Avatar
            alt="Remy Sharp"
            src="/src/foto_perfil.png"
            sx={{ width: 100, height: 100, border: "6px solid white" }}
          />
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h5" component="h1">
            Carolina Gonzalez
          </Typography>
          <Typography variant="subtitle1">asesora Inmobiliaria</Typography>
        </Box>
      </Box>

      {/* BOTONES CONTACTO */}
      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "10px",
        }}
      >
        <Grid2
          size={3}
        >
          <Box>
            <Button variant="contained" startIcon>
              <LocalPhoneIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 size={3}>
          <Box>
            <Button variant="contained" startIcon>
              <EmailIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 size={3}>
          <Box>
            <Button variant="contained" startIcon>
              <LanguageIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 size={3}>
          <Box>
            <Button variant="contained" startIcon>
              <PlaceIcon />
            </Button>
          </Box>
        </Grid2>
      </Grid2>

      <BasicSpeedDial />
    </Container>
  );
}
