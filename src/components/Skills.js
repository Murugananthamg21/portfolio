import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Html from "../assets/images/294678_html5_icon.png";
import Css from "../assets/images/294692_css3_icon.png";
import Javascript from "../assets/images/javascript-js.svg";
import Bootstrap from "../assets/images/icons-hero.png";
import Ajax from "../assets/images/29-293609_transparent-ajax-logo-png-ajax-png-download.png";
import Php from "../assets/images/file-type-php2.svg";
import React_logo_lt from "../assets/images/react_logo-512.webp";
import Express_logo from "../assets/images/4422780_304c_2.jpg";
import Mongo_logo from "../assets/images/kuzt9r42or1fxvlq2-Meta_Generic.png";
import Node_logo from "../assets/images/node-js.svg";
import Mysql_list from "../assets/images/mysql.jpg";
import Material_ui_list from "../assets/images/material-ui-icon-2048x1626-on580ia9.png";
import Code_editor from "../assets/images/1688749943_vscode_story.jpg";
import Git_logo from "../assets/images/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d687474707325334125324625324663616d6f2e716969746175736572636f6e74656e742e636f6d253246373466333761646265326366333032656464386.png";

const Skills = () => {
  const darkTheme = {
    backgroundColor: "#15243b",
  };
  const colors = {
    color: "white",
  };

  const itemData = [
    {
      img: Html,
      title: "HTML",
      author: "@Front-End ",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: Css,
      title: "CSS",
      author: "@Front-End",
    },
    {
      img: Javascript,
      title: "JAVA SCRIPT",
      author: "@Front-End",
    },
    {
      img: Bootstrap,
      title: "Bootstarp",
      author: "@Front-end FrameWork",
      cols: 2,
    },
    {
      img: Ajax,
      title: "AJAX",
      author: "@Back-end Server-side",
      cols: 2,
    },
    {
      img: Php,
      title: "PHP",
      author: "@Back-end Server-side",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: React_logo_lt,
      title: "REACT JS",
      author: "@Front-End Library",
    },
    {
      img: Material_ui_list,
      title: "MATERIAL UI",
      author: "Back-End FrameWork",
    },
    {
      img: Express_logo,
      title: "EXPRESS JS",
      author: "Back-End FrameWork",
    },

    {
      img: Node_logo,
      title: "NODE JS",
      author: "@Back-End Enviranment",
    },
    {
      img: Mongo_logo,
      title: "MONGO DB",
      author: "@Back-End Database",
    },
    {
      img: Mysql_list,
      title: "MYSQL",
      author: "@Back-End Database",
    },
    {
      img: Git_logo,
      title: "GIT & GITHUB",
      author: "@get&github",
      cols: 2,
    },
    {
      img: Code_editor,
      title: "VS CODE EDITOR",
      author: "@code editor",
      cols: 2,
    },
  ];

  return (
    <div id="SKILLS">
      <Container fluid maxWidth="xl" style={darkTheme}>
        <Grid container sx={{ paddingTop: 7 }}>
          <Grid md={12} sm={12} xs={12} lg={12}>
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
                Technical{" "}
                <item style={{ color: "#59B2F4", fontWeight: 560 }}>
                  Skills
                </item>
              </Typography>
            </Box>
            <Container maxWidth="md">
              <Grid md={12} sm={12} lg={12}>
                <ImageList>
                  <ImageListItem key="Subheader" cols={4}></ImageListItem>
                  {itemData.map((item) => (
                    <ImageListItem
                      key={item.img}
                      sx={{ margin: 1, width: 180 }}
                    >
                      <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                          <IconButton
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                            aria-label={`info about ${item.title}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Skills;
