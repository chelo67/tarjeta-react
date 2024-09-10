// src/App.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  Grid,
  Grid2,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";
import BasicSpeedDial from "./components/SpeedDial";
import { fetchDataFromAPI } from "./api/api";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Llamar a la API usando la función importada
    fetchDataFromAPI().then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Mostrar loading mientras se cargan los datos
  }

  return (
    <Container maxWidth="xs">
      {/* CABECERA */}
      <Box
        sx={{
          backgroundImage: `url(${data.imagen_top})`,
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
            alt={data.nombre}
            src={data.foto}
            sx={{ width: 100, height: 100, border: "6px solid white" }}
          />
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="h5" component="h1">
            {data.nombre}
          </Typography>
          <Typography variant="subtitle1">{data.puesto}</Typography>
        </Box>
      </Box>

      {/* BOTONES CONTACTO */}
      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "10px",
        }}
      >
        <Grid2 item xs={3}>
          <Box>
            <Button variant="contained" sx={{ bgcolor: `${data.color_boton_contacto}` }}>
              <LocalPhoneIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 item xs={3}>
          <Box>
            <Button variant="contained" sx={{ bgcolor: `${data.color_boton_contacto}` }}>
              <EmailIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 item xs={3}>
          <Box>
            <Button variant="contained" sx={{ bgcolor: `${data.color_boton_contacto}` }}>
              <LanguageIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 item xs={3}>
          <Box>
            <Button variant="contained" sx={{ bgcolor: `${data.color_boton_contacto}` }}>
              <PlaceIcon />
            </Button>
          </Box>
        </Grid2>
      </Grid2>

      <BasicSpeedDial />
    </Container>
  );
}
