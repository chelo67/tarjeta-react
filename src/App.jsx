// src/App.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Avatar,
  Typography,
  Grid2,
  Chip,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
    <Container maxWidth="xs" sx={{ maxHeight: "100vh" }}>
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
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        <Grid2 item xs={3}>
          <Box>
            <Button
              variant="contained"
              sx={{ bgcolor: `${data.color_boton_contacto}` }}
            >
              <LocalPhoneIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 item xs={3}>
          <Box>
            <Button
              variant="contained"
              sx={{ bgcolor: `${data.color_boton_contacto}` }}
            >
              <EmailIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 item xs={3}>
          <Box>
            <Button
              variant="contained"
              sx={{ bgcolor: `${data.color_boton_contacto}` }}
            >
              <LanguageIcon />
            </Button>
          </Box>
        </Grid2>
        <Grid2 item xs={3}>
          <Box>
            <Button
              variant="contained"
              sx={{ bgcolor: `${data.color_boton_contacto}` }}
            >
              <PlaceIcon />
            </Button>
          </Box>
        </Grid2>
      </Grid2>

      {/* INFO CONTACTO */}
      <Box
        sx={{
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LocalPhoneIcon color="primary" fontSize="small" />
          <Typography variant="body2" padding={1}>
            112333333
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmailIcon color="primary" fontSize="small" />
          <Typography variant="body2" padding={1}>
            correo@correo.com
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LanguageIcon color="primary" fontSize="small" />
          <Typography variant="body2" padding={1}>
            https://www.tuweb.com
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlaceIcon color="primary" fontSize="small" />
          <Typography variant="body2" padding={1}>
            direccion 222, Ciudad
          </Typography>
        </Box>
      </Box>

      {/* RED SOCIAL */}
      <Box
        sx={{
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Chip
            icon={<FacebookIcon />}
            label="Facebook"
            clickable
          />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Chip
            icon={<LinkedInIcon />}
            label="LinkedIn"
            clickable
          />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Chip
            icon={<InstagramIcon />}
            label="Instagram"
            clickable
          />
        </a>
      </Box>

      <Box
        sx={{
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {/* PINTEREST */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Chip icon={<PinterestIcon />} 
            label="Pinterest"
            clickable 
          />
        </a>
        {/* twitter */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Chip icon={<XIcon />} 
            label="X-Twitter"
            clickable
          />
        </a>

        {/* WHATSAPP */}
        <Chip icon={<WhatsAppIcon/>} 
          label="Instagram"
          clickable
        />
      </Box>

      <BasicSpeedDial />
    </Container>
  );
}
