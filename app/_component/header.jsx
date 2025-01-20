import { Image } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div>
      <Image src={"/logo.svg"} alt="logo" width={180} />
    </div>
  );
}
export default Header;
