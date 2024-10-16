import Canon from "@/assets/images/camera.png";
import Camera from "@/assets/images/canon.png";
// import Laptop from "@/assets/images/laptop.png";
// import Speaker from "@/assets/images/speacker.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const Banner = () => {
  return (
    <Box
      sx={{
        paddingTop: "160px",
        // height: "100vh",
        // display: { xs: "grid", md: "flex", sm: "flex", lg: "flex" },
        // justifyContent: {
        //   xs: "center",
        //   md: "space-between",
        //   sm: "space-between",
        //   lg: "space-between",
        // },
        alignItems: "center",
        margin: "0 15%",
        // backgroundColor: "red",
      }}
    >
      <Box
        sx={{
          height: "60vh",
          display: { xs: "grid", md: "flex", sm: "flex", lg: "flex" },
          justifyContent: {
            xs: "center",
            md: "space-between",
            sm: "space-between",
            lg: "space-between",
          },
          alignItems: "center",
          // backgroundColor: "blue",
        }}
      >
        <Box
          sx={{
            mt: { xs: "30px", sm: "-50px", md: "-50px", lg: "-50px" },
            pb: { xs: "30px", sm: "0px", md: "0px", lg: "0px" },
          }}
        >
          <Typography
            className="canon"
            sx={{
              color: "var(--color1)",
              fontSize: "50px",
              lineHeight: "65px",
              fontWeight: "bold",
              fontStyle: "normal",
              textAlign: { xs: "center", md: "left", sm: "left", lg: "left" },
            }}
          >
            Canon
          </Typography>
          <Typography
            className="canon"
            sx={{
              color: "var(--color1)",
              fontSize: "50px",
              lineHeight: "65px",
              fontWeight: "bold",
              fontStyle: "normal",
              textAlign: { xs: "center", md: "left", sm: "left", lg: "left" },
            }}
          >
            Camera
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              pt: { xs: "20px", sm: "40px", md: "40px", lg: "40px" },
            }}
          >
            <Button
              sx={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--primary)",
                borderRadius: "20px",
                padding: "20px 30px",
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
                fontStyle: "normal",
                textTransform: "none",
                "&:hover": {
                  background: "var(--bg-primary)",
                  color: "var(--color1)",
                  border: "1px solid var(--color1)",
                },
              }}
            >
              Shop now
            </Button>
            <Button
              sx={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--color1)",
                borderRadius: "20px",
                padding: "20px 30px",
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
                fontStyle: "normal",
                border: "1px solid var(--color1)",
                textTransform: "none",
                "&:hover": {
                  background: "var(--bg-secondary)",
                  color: "var(--primary)",
                  border: "none",
                },
              }}
            >
              View more
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              pt: "40px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "50%",
                margin: "0 5px",
                animation: "bounce 2s infinite",
              }}
            />
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "var(--bg-primary)",
                borderRadius: "50%",
                margin: "0 5px",
                animation: "bounce 2s infinite 0.5s",
                border: "1px solid var(--color1)",
              }}
            />
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "var(--bg-primary)",
                borderRadius: "50%",
                margin: "0 5px",
                animation: "bounce 2s infinite 1s",
                border: "1px solid var(--color1)",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "center", md: "right", sm: "right", lg: "right" },
            justifyContent: {
              xs: "center",
              md: "right",
              sm: "right",
              lg: "right",
            },
          }}
        >
          <Image className="camera" src={Camera} alt="Camera Canon" />
          <Box
            sx={{
              position: "relative",
              top: { xs: 80, sm: 190, md: 190, lg: 190 },
              right: { xs: 20, sm: 190, md: 190, lg: 90 },
              width: { xs: 70, sm: 90, md: 90, lg: 90 },
              height: { xs: 70, sm: 90, md: 90, lg: 90 },
              backgroundColor: "var(--bg-secondary)",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Only <br /> 100$
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          pt: { xs: "15px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            className="title"
            sx={{
              fontSize: "28px",
              fontWeight: "semibold",
              fontStyle: "normal",
              color: "var(--color1)",
            }}
          >
            Collections
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          pt: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Première Carte */}
        <Box
          sx={{
            // width: "300px",
            backgroundColor: "var(--bg-primary)",
            borderRadius: "20px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 50px",
            border: "1px solid var(--color1)",
            // background: "red",
          }}
        >
          <Image
            style={{
              borderRadius: "50%",
              padding: "10px",
            }}
            src={Canon}
            alt="camera canon"
            width={70}
            height={70}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "normal",
                color: "var(--color1)",
                marginBottom: "10px",
              }}
            >
              Camera
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "normal",
                color: "var(--color1)",
                marginBottom: "10px",
              }}
            >
              (4 items)
            </Typography>
          </Box>
        </Box>

        {/* Deuxième Carte */}
        <Box
          sx={{
            // width: "300px",
            backgroundColor: "var(--bg-primary)",
            borderRadius: "20px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 50px",
            border: "1px solid var(--color1)",
            // background: "red",
          }}
        >
          <Image
            style={{
              borderRadius: "50%",
              padding: "10px",
            }}
            src={Canon}
            alt="camera canon"
            width={70}
            height={70}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "normal",
                color: "var(--color1)",
                marginBottom: "10px",
              }}
            >
              Camera
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "normal",
                color: "var(--color1)",
                marginBottom: "10px",
              }}
            >
              (5 items)
            </Typography>
          </Box>
        </Box>

        {/* Troisième Carte */}
        <Box
          sx={{
            // width: "300px",
            backgroundColor: "var(--bg-primary)",
            borderRadius: "20px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 50px",
            border: "1px solid var(--color1)",
            // background: "red",
          }}
        >
          <Image
            style={{
              borderRadius: "50%",
              padding: "10px",
            }}
            src={Canon}
            alt="camera canon"
            width={70}
            height={70}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "normal",
                color: "var(--color1)",
                marginBottom: "10px",
              }}
            >
              Camera
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "normal",
                color: "var(--color1)",
                marginBottom: "10px",
              }}
            >
              (6 items)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
