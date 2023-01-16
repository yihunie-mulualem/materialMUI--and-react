import {Button,Typography,useMediaQuery} from "@mui/material";
import { useTheme } from "@emotion/react";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
  } from "../../styles/banner";

    function Banner(){
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down("md"));
    return(

        <BannerContainer>
            <BannerImage src="bg.png"/>
            <BannerContent>
                <Typography variant="h6">
                    Huge Collection
                </Typography>
                <BannerTitle>
                    new bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
                </BannerDescription>
                <BannerShopButton color="primary"> shop now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
  }
  export default Banner;