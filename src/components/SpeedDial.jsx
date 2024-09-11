import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
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
  { icon: <SaveIcon />, name: "Save" },

  { icon: <ShareIcon />, name: "Share" },
];

export default function BasicSpeedDial() {
  // Estado para controlar la visibilidad del modal
  const [open, setOpen] = useState(false);

  // estado para el codigo QR
  const [codigoQr, setCodigoQr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDataFromAPI();
      if (data && data.codigo_qr) {
        setCodigoQr(data.codigo_qr);
      }
    };

    getData();
  }, []);

  // Funciones para abrir y cerrar el modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 1, transform: "translateZ(10px)", flexGrow: 1 }}>
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
            onClick={action.name === "Share" ? handleOpen : null}
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
        <Box sx={{ ...style, width: "95" ,display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "10px", border: "none"}}>
          <Typography id="modal-title" variant="h6" component="h2">
            Comparte esta tarjeta
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2, fontSize: 12 }}>
            escanea el codigo QR para compartir esta tarjeta
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
