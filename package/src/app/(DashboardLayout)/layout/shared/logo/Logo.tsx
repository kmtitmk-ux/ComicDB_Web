import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "243px",
        height: "50px",
        margin: "auto",
      }}
    >
      <LinkStyled href="/">
        <Image
          src="/images/logos/ComicDB.png"
          fill
          style={{ objectFit: "cover" }}
          alt=""
          priority
        />
      </LinkStyled>
    </div>
  );
};

export default Logo;
