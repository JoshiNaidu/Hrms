import React, { useState } from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AttendanceDialog from "./AttendanceDialog";

export default function AttendancePanel() {
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleMark = () => {
    const today = new Date().toDateString();
    setAttendance({ ...attendance, [today]: "Present" });
    setOpen(false);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const day = date.toDateString();
      if (attendance[day] === "Present") return "present-day";
    }
    return "";
  };

  return (
    <Card sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="h6" gutterBottom>
        Attendance
      </Typography>

      <Button
        variant="contained"
        color="success"
        fullWidth
        sx={{ mb: 2, borderRadius: "12px" }}
        onClick={() => setOpen(true)}
      >
        Mark Attendance
      </Button>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
        className="styled-calendar"
      />

      <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
        <span className="legend present">Present</span>
        <span className="legend absent">Absent</span>
        <span className="legend leave">Leave</span>
        <span className="legend holiday">Holiday</span>
      </Box>

      <AttendanceDialog
        open={open}
        handleClose={() => setOpen(false)}
        handleMark={handleMark}
      />

      <style>
        {`
          .styled-calendar {
            border: none;
            width: 100%;
            background: #fefefe;
            border-radius: 12px;
            padding: 8px;
            font-family: Roboto, sans-serif;
          }
          .react-calendar__navigation button {
            color: #1976d2;
            min-width: 40px;
            font-weight: 600;
            font-size: 0.9rem;
          }
          .react-calendar__tile {
            padding: 10px 6px;
            font-size: 0.85rem;
            border-radius: 8px;
            transition: all 0.2s ease;
          }
          .react-calendar__tile--now {
            background: #fff3e0 !important;
            border-radius: 50%;
          }
          .present-day { background: #c8e6c9 !important; border-radius: 50%; }
          .legend {
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
          }
          .legend.present { background: #c8e6c9; }
          .legend.absent { background: #ffcdd2; }
          .legend.leave { background: #fff9c4; }
          .legend.holiday { background: #d1c4e9; }
        `}
      </style>
    </Card>
  );
}
