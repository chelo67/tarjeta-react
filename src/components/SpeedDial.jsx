import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ShareIcon from "@mui/icons-material/Share";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { fetchDataFromAPI } from "../api/api";

// Estilos para el modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Acciones del SpeedDial
const actions = [
  { icon: <FileCopyIcon />, name: "Whatsapp" },
  { icon: <SaveIcon />, name: "Guardar contacto" },
  { icon: <ShareIcon />, name: "Compartir" },
  { icon: <QrCode2Icon />, name: "Codigo Qr" },
];

export default function BasicSpeedDial() {
  // Estado para controlar la visibilidad del modal
  const [open, setOpen] = useState(false);

  // Estados para el codigo QR y el archivo de contacto
  const [codigoQr, setCodigoQr] = useState(null);
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDataFromAPI();
      if (data) {
        if (data.codigo_qr) setCodigoQr(data.codigo_qr);
        if (data.contacto) setContacto(data.contacto);
      }
    };

    getData();
  }, []);

  // Funciones para abrir y cerrar el modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Función para descargar el archivo de contacto
  const handleDownload = () => {
    if (contacto) {
      const link = document.createElement("a");
      link.href = contacto; // URL del archivo que deseas descargar
      link.download = "contacto.vcf"; // Nombre predeterminado del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Elimina el enlace después de hacer clic
    } else {
      alert("No hay archivo de contacto disponible.");
    }
  };

  return (
    <Box sx={{ height: 1, transform: "translateZ(10px)", flexGrow: 1 }}>
      {/* <Backdrop open={open} /> */}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 10, right: -10 }}
        icon={<SpeedDialIcon />}
        
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.name === "Codigo Qr" ? handleOpen : action.name === "Guardar contacto" ? handleDownload : null}
          />
        ))}
      </SpeedDial>

      {/* Modal que se abre al hacer clic en "Share" */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "95",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Comparte esta tarjeta
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2, fontSize: 12 }}>
            Escanea el código QR para compartir esta tarjeta.
          </Typography>
          <Box sx={{ mt: 2, width: "100%", textAlign: "center" }}>
            {codigoQr ? (
              <img src={codigoQr} alt="qr" width="200px" />
            ) : (
              <p>Cargando código QR...</p>
            )}
          </Box>
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
