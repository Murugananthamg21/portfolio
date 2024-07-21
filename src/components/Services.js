import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import lo from "../assets/images/13706.png";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Services = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const lightDheme = {
    backgroundColor: "#262840",
  };
  const colors = {
    color: "white",
  };
  return (
    <Container fluid maxWidth="xl" id="SERVICES" style={lightDheme}>
      <Grid container sx={{ paddingBottom: 6, paddingTop: 7 }}>
        <Grid xs={12} md={12} sm={12}>
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
              My{" "}
              <item style={{ color: "#59B2F4", fontWeight: 560 }}>
                Services
              </item>
            </Typography>
          </Box>
        </Grid>

        <Grid md={6} xs={12} sm={12}>
          <Card sx={{ margin: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img src={lo} style={{ width: 30 }} alt="Services" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Front-End Development"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                As a seasoned full-stack developer specializing in front-end
                technologies such as HTML, CSS, Bootstrap, JavaScript, and
                React.js, I bring a wealth of expertise to every project I
                undertake. With a keen eye for design and a commitment to
                creating seamless user experiences, I thrive on transforming
                complex ideas into intuitive interfaces. Whether crafting
                responsive layouts with Bootstrap, fine-tuning stylesheets with
                CSS, or harnessing the power of JavaScript for dynamic
                functionality, I am dedicated to delivering polished front-end
                solutions that exceed expectations. My proficiency in React.js
                allows me to build interactive web applications efficiently,
                leveraging its component-based architecture to ensure
                scalability and maintainability. Continuously staying abreast of
                industry trends and best practices, I am driven to push the
                boundaries of front-end development, translating vision into
                reality with every line of code.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={6} xs={12} sm={12}>
          <Card sx={{ margin: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img src={lo} style={{ width: 30 }} alt="Services" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Back-End Development"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                On the back end, I excel in PHP for server-side logic and
                dynamic content generation, harnessing AJAX to enhance user
                interactions without refreshing the entire page. MySQL and
                MongoDB are my choices for data storage and management, each
                suited to different project needs based on scalability and data
                structure requirements. My approach is deeply rooted in Agile
                methodologies, allowing me to collaborate effectively within
                teams and adapt quickly to evolving project requirements. I
                prioritize clean, efficient code and rigorous testing practices
                to ensure robust application performance and security.
                Continuously learning and exploring new technologies, I am
                committed to pushing the boundaries of what's possible in web
                development. With a passion for solving complex problems and
                delivering impactful solutions, I thrive in environments that
                value innovation and excellence
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
