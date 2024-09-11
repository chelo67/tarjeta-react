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
    <Container maxWidth="xs" sx={{ maxHeight: "100vh", marginBottom: "0" }}>
      {/* CABECERA */}
      {data.imagen_top && (
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
      )}

      {/* Nombre y puesto */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          marginTop: "-30px",
        }}
      >
        {data.foto && (
          <Avatar
            alt={data.nombre}
            src={data.foto}
            sx={{ width: 100, height: 100, border: "6px solid white" }}
          />
        )}
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {data.nombre && (
            <Typography variant="h5" component="h1">
              {data.nombre}
            </Typography>
          )}
          {data.puesto && (
            <Typography variant="subtitle1" sx={{ marginTop: "-8px" }}>
              {data.puesto}
            </Typography>
          )}
          {data.logo_empresa && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <img src={data.logo_empresa} alt="" width="60px" />
              {data.nombre_empresa && <Typography>{data.nombre_empresa}</Typography>}
            </Box>
          )}
        </Box>
      </Box>

      {/* Botones de contacto */}
      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
          gap: "20px",
        }}
      >
        
          <>
            {data.telefono && (
            <Grid2 item xs={3}>
              <Button variant="contained" sx={{ bgcolor: data.color_boton_contacto }}>
                <LocalPhoneIcon />
              </Button>
            </Grid2>
            )}
            {data.enlace_email && (
            <Grid2 item xs={3}>
              <Button variant="contained" sx={{ bgcolor: data.color_boton_contacto }}>
                <EmailIcon />
              </Button>
            </Grid2>
            )}
            {data.enlace_web && (
            <Grid2 item xs={3}>
              <Button variant="contained" sx={{ bgcolor: data.color_boton_contacto }}>
                <LanguageIcon />
              </Button>
            </Grid2>
            )}
            {data.direccion && (
            <Grid2 item xs={3}>
              <Button variant="contained" sx={{ bgcolor: data.color_boton_contacto }}>
                <PlaceIcon />
              </Button>
            </Grid2>
            )}
          </>
        
      </Grid2>

      {/* Info contacto */}
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
        {data.telefono && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LocalPhoneIcon color="primary" fontSize="small" />
            <Typography variant="body2" padding={1}>
              {data.telefono}
            </Typography>
          </Box>
        )}

        {data.enlace_email && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <EmailIcon color="primary" fontSize="small" />
            <Typography variant="body2" padding={1}>
              {data.enlace_email}
            </Typography>
          </Box>
        )}

        {data.enlace_web && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LanguageIcon color="primary" fontSize="small" />
            <Typography variant="body2" padding={1}>
              {data.enlace_web}
            </Typography>
          </Box>
        )}

        {data.direccion && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PlaceIcon color="primary" fontSize="small" />
            <Typography variant="body2" padding={1}>
              {data.direccion}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Redes sociales */}
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "10px" }}>Redes Sociales</Typography>
      <Box
        sx={{
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {data.facebook && (
          <a href={data.facebook} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Chip icon={<FacebookIcon />} label="Facebook" clickable />
          </a>
        )}
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Chip icon={<LinkedInIcon />} label="LinkedIn" clickable />
          </a>
        )}
        {data.instagram && (
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Chip icon={<InstagramIcon />} label="Instagram" clickable />
          </a>
        )}
      </Box>
      {/* Redes sociales */}
      <Box
        sx={{
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {data.pinterest && (
          <a href={data.pinterest} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Chip icon={<PinterestIcon />} label="Pinterest" clickable />
          </a>
        )}
        {data.x_twitter && (
          <a href={data.x_twitter} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Chip icon={<LinkedInIcon />} label="X Twitter" clickable />
          </a>
        )}
      </Box>

      <BasicSpeedDial />
    </Container>
  );
}
