import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Experions from "../assets/images/experience.png";
import Projects from "../assets/images/projects.png";
import Skils from "../assets/images/skills_3724593.png";
import Languages from "../assets/images/transcription_8750772.png";

const About = () => {
  const lightDheme = {
    backgroundColor: "#262840",
  };
  const colors = {
    color: "white",
  };
  return (
    <Container fluid maxWidth="xl" id="ABOUT" style={lightDheme}>
      <Grid container spacing={2} sx={{ paddingTop: 7 }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={12} sm={12}>
              <Box
                sx={{
                  display: { md: "flex", lg: "flex", sm: "flex", xs: "flex" },
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ marginTop: 2, marginBottom: 2, lineHeight: 3 }}
                  style={colors}
                  component="div"
                >
                  About{" "}
                  <item style={{ color: "#59B2F4", fontWeight: 560 }}>Me</item>
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              sx={{
                display: { md: "flex" },
                justifyContent: "center",
                marginBottom: 5,
              }}
            >
              <Grid xs={12} sm={12} md={8} lg={8}>
                <Box sx={{ textAlign: "justify" }}>
                  <Typography
                    variant="p"
                    component={"small"}
                    sx={{ textAlign: "justify", color: "white" }}
                  >
                    Hello there! I'm Muruganantham, a passionate full-stack
                    developer currently thriving at an IT company, where I've
                    contributed to over 10 + projects, including real-time
                    applications. Beyond my professional endeavors, I also enjoy
                    imparting knowledge as a full-stack development instructor,
                    helping students grasp complex concepts with ease. Known for
                    my logical thinking and robust problem-solving skills, I
                    specialize in both front-end and back-end development. My
                    expertise extends to object-oriented programming and
                    ensuring functionality meets high standards. Let's build
                    something amazing together!
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: 5 }}>
            <Grid md={3} sm={6} xs={12}>
              <Card sx={{ display: "flex", margin: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 0.7,
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Skils
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      10+ Skil's
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 71, height: 70, marginTop: 2 }}
                  image={Skils}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
              <Card sx={{ display: "flex", margin: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 0.7,
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Projects
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      15 + Projects
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 71, height: 70, marginTop: 2 }}
                  image={Projects}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
              <Card sx={{ display: "flex", margin: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 0.7,
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Experions
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      1+ Year's
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 71, height: 70, marginTop: 2 }}
                  image={Experions}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
            <Grid md={3} sm={6} xs={12}>
              <Card sx={{ display: "flex", margin: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 0.7,
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Language
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      2 Language's
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 71, height: 70, marginTop: 2 }}
                  image={Languages}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
};

export default About;
