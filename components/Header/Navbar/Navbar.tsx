import Cart from "@/assets/icons/cart.png";
import Likes from "@/assets/icons/heart.png";
import User from "@/assets/icons/user.png";
import Logo from "@/assets/images/logo.png";
import { AppBar, Box, Button, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        marginTop: "80px",
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
        <Box sx={{ display: "flex", gap: "200px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image
              style={{ width: "40px", height: "40px" }}
              src={Logo}
              alt="location"
            ></Image>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "20px",
                fontWeight: "900",
                fontStyle: "normal",
              }}
            >
              ShopWays
            </p>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              placeholder="Search any things..."
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ marginRight: 0 }} position="end">
                    <Button
                      sx={{
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--primary)",
                        borderRadius: "20px",
                        padding: "16px 25px",
                        minWidth: "auto",
                      }}
                    >
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "500px",
                backgroundColor: "var(--bg-primary)",
                borderRadius: "20px",
                ".MuiOutlinedInput-root": {
                  paddingRight: 0,
                  border: "none",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
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
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Sign
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
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Likes
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
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Cart
            </p>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
