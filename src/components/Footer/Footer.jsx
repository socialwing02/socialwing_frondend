import React from "react";
import QuickLinks from "./QuickLinks";
import OurProgram from "./OurProgram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const insta = "https://www.instagram.com/socialwingads?igsh=djA5OTdxbGQ0cjBr";
const Facebook = "https://www.facebook.com/share/1EUJyeNzAW/?mibextid=LQQJ4d";
const linkdin = "";
const phoneNumber = "8015544800";
const whatsappLink = `https://wa.me/${phoneNumber}`;

function handleClick() {
  window.open(whatsappURL, "_blank");
}

export default function Footer() {
  return (
    <footer className="footer">
      <QuickLinks />
      <OurProgram />
      <div className="footerContact">
        <div>
          <h2>Social Media</h2>
          <div className="social-media">
            <a href={insta}>
              <InstagramIcon fontSize="large" sx={{ color: "gray" }} />
            </a>
            <a href={whatsappLink}>
              <WhatsAppIcon fontSize="large" sx={{ color: "gray" }} />
            </a>
            <a href={Facebook}>
              <FacebookIcon fontSize="large" sx={{ color: "gray" }} />
            </a>

            <LinkedInIcon fontSize="large" sx={{ color: "gray" }} />
          </div>
        </div>
      </div>
      {/* &copy; */}
    </footer>
  );
}
