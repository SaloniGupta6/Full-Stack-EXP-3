import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState } from "react";

export default function ModalDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to continue?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
