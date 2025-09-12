import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

export default function AttendanceDialog({ open, handleClose, handleMark }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Mark Attendance</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Last check-in: {new Date().toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Source: Web check-in
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleMark}
          variant="contained"
          color="success"
          sx={{ borderRadius: "10px" }}
        >
          Mark Attendance
        </Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="error"
          sx={{ borderRadius: "10px" }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
