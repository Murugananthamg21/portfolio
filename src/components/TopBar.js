import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TobImage from "../assets/images/17033333775024.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import download_link from '../assets/Resume.pdf'
import Tooltip from "@mui/material/Tooltip";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const TopBar = () => {
  const darkTheme = {
    backgroundColor: "#15243b",
  };
  const colors = {
    color: "white",
  };
  return (
    <Container maxWidth="xl" id="HOME" style={darkTheme}>
      <Grid container spacing={2} sx={{ paddingTop: 10, paddingBottom: 6 }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} lg={6} md={6} sm={12}>
              <Box
                sx={{
                  display: { md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ marginTop: 2 }}
                    style={colors}
                    component="div"
                  >
                    Hello , I am
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ marginTop: 2 }}
                    style={colors}
                    component="div"
                  >
                    Muruganatham .G
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ marginTop: 2 }}
                    style={colors}
                    component="div"
                  >
                    I'm a{" "}
                    <item style={{ color: "#59B2F4", fontWeight: 560 }}>
                      Full Stack Developer
                    </item>
                  </Typography>
                  <Typography
                    variant="small"
                    component={"p"}
                    sx={{ color: "white", marginTop: 2, lineHeight: 2 }}
                  >
                    I specialize in seamlessly integrating front-end finesse
                    with robust back-end functionality, transforming creative
                    concepts into dynamic web solutions. With expertise in PHP
                    and React JS, I am dedicated to delivering impactful user
                    experiences that exceed expectations.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  display: { md: "flex", xs: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Tooltip title="Click to Download" arrow>
                  <Button variant="outlined" component="a"
                    href={download_link} download >
                      <item style={{ marginRight: 5 }}>Download Resume </item>{" "}
                    <CloudDownloadIcon />
                  </Button>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={6} sm={12}>
              <Box
                sx={{
                  display: { md: "flex", xs: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={TobImage}
                  sx={{ width: 300, height: 300 }}
                />
              </Box>
              <Grid container>
                <Grid xs={12} sm={12} lg={12} md={12} style={colors} sx={{ marginTop:1, display:{ xs:"flex",md:"flex",sm:"flex" } ,justifyContent:"center" }} > 
                <Tooltip title="Contact Number" arrow>
                  <Typography variant="p" component={"p"}> 
                  <AddIcCallIcon />  +91 8220909225
                  </Typography>
               </Tooltip>
                 </Grid>
              </Grid>
              <Box
                sx={{
                  gap: 2,
                  display: { md: "flex", sm: "flex", xs: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 3,
                  marginLeft: 11,
                }}
              >
                  <Tooltip title="Linked In" arrow>
                <Button variant="outlined"  component={"a"} target="_blank"
                href="https://www.linkedin.com/in/murugan12/"
                >
                  <LinkedInIcon color="primary" sx={{ marginRight: 1 }} 
                  
                  />
                </Button>
                </Tooltip>
                <Tooltip title="GitHub" arrow>
                <Button variant="outlined" component={"a"} target="_blank"
                href='mailto:xyz@yourapplicationdomain.com?subject=Me&body=Hello!'
                >
                  <GitHubIcon />
                </Button>
                </Tooltip>
                <Tooltip title="Email" arrow>
                <Button variant="outlined"
                component={"a"} target="_blank"
                href='mailto:g.muruga1706@gmail.com?subject=Me&body=Hello!'
                
                >
                  <MailIcon />
                </Button>
                </Tooltip>
                <Tooltip title="Whatsapp" arrow>
                <Button variant="outlined" component={"a"} target="_blank"
                href="https://api.whatsapp.com/send?phone=8220909225"
                >
                  <WhatsAppIcon />
                </Button>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
};

export default TopBar;
