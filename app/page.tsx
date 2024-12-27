"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Link,
  Typography,
} from "@mui/material";
import { PortfolioCardProps } from "./type/portofolioCardProps";
import ArchlyricCard from "./components/ArchlyricCard ";
const data: PortfolioCardProps[] = [
  {
    projectName: "Nurse APP",
    projectDate: "December 2024",
    projectDescription:
      "This app helps nurses efficiently digitize the initial patient assessment, ensuring accuracy and streamlined care from the start.",
    image: "/images/medical-team.png",
    techStack: ["Flutter"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "FE",
  },
  {
    projectName: "Solusi Tukang",
    projectDate: "December 2024",
    projectDescription:
      "An app to help people in Malang easily find home repair services or construction contractors & worker.",
    image: "images/solusi-tukang.png",
    techStack: ["Flutter", "GETX", "HTTP"],
    githubLink: null,
    liveDemoLink:
      "https://play.google.com/store/apps/details?id=com.solusiciptamedia.solusitukang",
    isNDA: true,
    type: "FE",
  },
  {
    projectName: "Solusi Tukang Mitra",
    projectDate: "December 2024",
    projectDescription:
      "An app that helps workers in Malang connect with customers in need of home repairs.",
    image: "/images/logo_mitra.png",
    techStack: ["Flutter", "GETX", "DIO"],
    githubLink: null,
    liveDemoLink:
      "https://play.google.com/store/apps/details?id=com.solusiciptamedia.mitrasolusitukang",
    isNDA: true,
    type: "FE",
  },
  {
    projectName: "Intima",
    projectDate: "December 2024",
    projectDescription:
      "An app designed to help track employee of PT. Maelo Inti Trans delivery routes and movements, generate detailed reports, and manage item requests, providing a streamlined solution for efficient logistics and operations management.",
    image: "/images/logo_intima.png",
    techStack: ["Flutter", "GETX", "HTTP"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "FE",
  },
  {
    projectName: "EMS",
    projectDate: "December 2024",
    projectDescription:
      "Application for helping people around Malang find home repair services.",
    image: "/images/logo_ems.png",
    techStack: ["Flutter", "GETX", "HTTP"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "FE",
  },
  {
    projectName: "Solusi Pos",
    projectDate: "December 2024",
    projectDescription:
      "Application for helping people around Malang find home repair services.",
    image: "/images/solusi_pos.png",
    techStack: ["Flutter", "Riverpod"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "FE",
  },
];

// Reusable CardHeader component
const PortfolioHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <Card className="mx-12 my-4">
    <CardContent>
      <Typography variant="h4">{title}</Typography>
      {subtitle && (
        <Typography variant="body1" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      )}
    </CardContent>
  </Card>
);
export default function Home() {
  return (
    <>
      <Box display="flex" height="100vh">
        <Box
          width="30%"
          position="fixed"
          display="flex"
          className="mx-12"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box alignItems="center" justifyContent="center">
            <Typography variant="h6">FIKRI IRSYAD! ✌️</Typography>
            <Typography variant="body2" color="error">
              FRONT-END DEVELOPER
            </Typography>

            <Typography variant="h6">Social Links</Typography>
            <Grid2 spacing={2} container className="my-4">
              <Grid2>
                <Link
                  href="mailto:dfikriirsyad@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "48px", width: "48px", objectFit: "contain" }}
                    image="icon/mail-inbox-app.png"
                    alt="Email"
                  />
                </Link>
              </Grid2>
              <Grid2>
                <Link
                  href="https://github.com/karula-k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "48px", width: "48px", objectFit: "contain" }}
                    image="icon/github-mark.png"
                    alt="Github"
                  />
                </Link>
              </Grid2>
              <Grid2>
                <Link
                  href="https://www.linkedin.com/in/dzul-fikri-irsyad-28b2911b2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "48px", width: "48px", objectFit: "contain" }}
                    image="icon/LI-In-Bug.png"
                    alt="linked in"
                  />
                </Link>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
        <Box width="70%" sx={{ marginLeft: "30%" }}>
          <Card className="mx-12 my-4">
            <CardContent>
              <Typography variant="h6">Languages and Frameworks</Typography>
              <ul>
                <li>Flutter GET X</li>
                <li>Flutter Provider</li>
                <li>Flutter</li>
                <li>Flutter DIO</li>
                <li>Flutter HTTP</li>
              </ul>
            </CardContent>
          </Card>
          <PortfolioHeader
            title="Featured Projects"
            subtitle="Here are a few projects I’ve worked on, showcasing my front-end and back-end skills."
          />

          <Grid2 container spacing={2}>
            {data.length === 0 ? (
              <Typography>No projects available</Typography>
            ) : (
              data.map((project, index) => (
                <Grid2 key={index}>
                  <ArchlyricCard
                    projectName={project.projectName}
                    projectDate={project.projectDate}
                    projectDescription={project.projectDescription}
                    image={project.image}
                    techStack={project.techStack}
                    githubLink={project.githubLink}
                    liveDemoLink={project.liveDemoLink}
                    type={project.type}
                    isNDA={project.isNDA}
                  />
                </Grid2>
              ))
            )}
          </Grid2>
        </Box>
      </Box>
    </>
  );
}
