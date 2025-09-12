import * as React from "react";
import { Box, Grid } from "@mui/material";
import SideBar from "./SideBar";
import PostWall from "./PostWall";
import AttendancePanel from "./AttendancePanel";
import SideNav from "./Layout/SideNav";
import SonusHrms from '../assets/SonusHrms.png';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh", p: { xs: 1, sm: 2, md: 3 },
    // bgcolor: "#B2DFEE"
     }}>
      <Box sx={{ display:'flex',justifyContent:'space-between' }}>
        <img src={SonusHrms} alt="HRMS Logo" width={150} height="50" style={{marginBottom: '20px'}} />
        <SideNav />
      </Box>
      <Grid container spacing={2}>
        {/* Left Sidebar → 20% */}
        <Grid size={{ xs: 12, md: 3 }} sx={{position: { md: "sticky" }}} order={{ xs: 1, md: 1 }} >
          <SideBar />
        </Grid>

        {/* Center Wall → 60% */}
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 3, md: 1 }}>
          <PostWall />
        </Grid>

        {/* Right Sidebar → 20% */}
        <Grid size={{ xs: 12, md: 3 }} sx={{position: { md: "sticky" }}} order={{ xs: 2, md: 1 }}>
          <AttendancePanel />
        </Grid>
      </Grid>
    </Box>
  );
}