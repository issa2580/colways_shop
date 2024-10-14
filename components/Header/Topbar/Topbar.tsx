import Group from "@/assets/icons/group.png";
import Location from "@/assets/icons/location.png";
import { AppBar, Box } from "@mui/material";
import Image from "next/image";

const Topbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "var(--bg-primary)",
        height: "80px",
        py: "auto",
        color: "var(--color5)",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 5%",
        }}
      >
        <Box>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: "400",
              fontStyle: "normal",
            }}
          >
            Call us: (+221) 77-235-29-58
          </p>
        </Box>
        <Box sx={{ display: "flex", gap: "50px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Image src={Location} alt="location"></Image>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Our store
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Image src={Group} alt="location"></Image>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Track your orders
            </p>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Topbar;
