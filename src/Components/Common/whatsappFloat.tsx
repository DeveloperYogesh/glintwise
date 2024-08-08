"use client";

import { usePathname } from "next/navigation";
import React from "react";
import whatsappFloat from "@/Images/whatsappFloat.webp";
import Image from "next/image"

const WhatsappButton = () => {
  const path = usePathname();
  const whatsappUrl = `https://api.whatsapp.com/send?phone=8668187362&text=I%20need%20doorstep%20car%20wash`;

  return (
    <a
      href={whatsappUrl}
      title={"Whatsapp Air Brill"}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform"
    >
      <Image
        src={whatsappFloat}
        alt="WhatsApp"
        className="w-full h-full"
      />
    </a>
  );
};

export default WhatsappButton;
