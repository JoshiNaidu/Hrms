import React from "react";
import { Card, CardContent, Avatar, Typography, Divider } from "@mui/material";

export default function SideBar() {
  return (
    <Card sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar
          sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
          src="https://i.pravatar.cc/100"
        />
        <Typography variant="h6">Akash Sharma</Typography>
        <Typography variant="body2" color="text.secondary">
          Software Engineer
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2">Company: Flo HRMS</Typography>
        <Typography variant="body2" color="text.secondary">
          Employee ID: 12345
        </Typography>
      </CardContent>
    </Card>
  );
}
