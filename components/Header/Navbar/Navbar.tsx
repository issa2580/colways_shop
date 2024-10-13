import Cart from "@/assets/icons/cart.png";
import Likes from "@/assets/icons/heart.png";
import User from "@/assets/icons/user.png";
import Logo from "@/assets/images/logo.png";
import { AppBar, Box } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        marginTop: "85px",
        backgroundColor: "var(--bg-nav)",
        color: "var(--primary)",
        height: "80px",
        py: "auto",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Image
              style={{ width: "40px", height: "40px" }}
              src={Logo}
              alt="location"
            ></Image>
            <p>ShopWays</p>
          </Box>
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
            <Image src={User} alt="location"></Image>
            <p>Sign</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Image src={Likes} alt="location"></Image>
              <p
                style={{
                  position: "relative",
                  backgroundColor: "var(--bg-secondary)",
                  color: "var(--primary)",
                  borderRadius: "50%",
                  minWidth: "25px",
                  textAlign: "center",
                }}
              >
                0
              </p>
            </Box>
            <p>Likes</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Image src={Cart} alt="location"></Image>
              <p
                style={{
                  position: "relative",
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "50%",
                  minWidth: "25px",
                  textAlign: "center",
                }}
              >
                0
              </p>
            </Box>
            <p>Cart</p>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
