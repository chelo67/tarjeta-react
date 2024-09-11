import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
  { icon: <WhatsAppIcon  />, name: "Whatsapp" },
  { icon: <SaveIcon />, name: "Guardar contacto" },
  { icon: <ShareIcon />, name: "Compartir" },
  { icon: <QrCode2Icon />, name: "Codigo Qr" },
];

export default function BasicSpeedDial() {
  // Estado para controlar la visibilidad de los modales
  const [open, setOpen] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false); // Nuevo estado para el modal de compartir

  // Estados para el codigo QR, el archivo de contacto y el número de WhatsApp
  const [codigoQr, setCodigoQr] = useState(null);
  const [contacto, setContacto] = useState(null);
  const [wsp, setWsp] = useState(null); // Nuevo estado para el número de WhatsApp

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDataFromAPI();
      if (data) {
        if (data.codigo_qr) setCodigoQr(data.codigo_qr);
        if (data.contacto) setContacto(data.contacto);
        if (data.wsp) setWsp(data.wsp); // Guardar el número de WhatsApp desde la API
      }
    };

    getData();
  }, []);

  // Funciones para abrir y cerrar los modales
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenShare = () => setOpenShareModal(true); // Abre el modal de compartir
  const handleCloseShare = () => setOpenShareModal(false); // Cierra el modal de compartir

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

  // Función para enviar mensaje por WhatsApp
  const handleWhatsApp = () => {
    if (wsp) {
      const message = "hola! quisiera realizar una consulta";
      const link = `https://wa.me/${wsp}?text=${encodeURIComponent(message)}`;
      window.open(link, "_blank");
    } else {
      alert("Número de WhatsApp no disponible.");
    }
  };

  return (
    <Box sx={{ height: 1, transform: "translateZ(10px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: -40, right: -10 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={
              action.name === "Codigo Qr"
                ? handleOpen
                : action.name === "Guardar contacto"
                ? handleDownload
                : action.name === "Compartir"
                ? handleOpenShare
                : action.name === "Whatsapp"
                ? handleWhatsApp // Aquí llamamos a la función para WhatsApp
                : null
            }
          />
        ))}
      </SpeedDial>

      {/* Modal para el código QR */}
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

      {/* Nuevo Modal para compartir */}
      <Modal
        open={openShareModal}
        onClose={handleCloseShare}
        aria-labelledby="share-modal-title"
        aria-describedby="share-modal-description"
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
          <Typography id="share-modal-title" variant="h6" component="h2">
            Compartir Tarjeta
          </Typography>
          <Typography id="share-modal-description" sx={{ mt: 2, fontSize: 12 }}>
            Puedes compartir este enlace por correo, redes sociales, etc.
          </Typography>

          <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "space-around" }}>
            {/* Whatsapp */}
            <a
              href={`https://wa.me/${wsp}?text=Te%20comparto%20esta%20tarjeta%20https://chelo67.github.io/demo1-tarjeta/`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://chelo67.github.io/demo1-tarjeta"
              target="_blank"
            >
              <FacebookIcon sx={{ fontSize: 40, color: "#4267B2" }} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://chelo67.github.io/demo1-tarjeta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: 40, color: "#0e76a8" }} />
            </a>
          </Box>

          <Button onClick={handleCloseShare} sx={{ mt: 2 }} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
