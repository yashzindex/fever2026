import React from "react";
import Link from "next/link";
import arrowBlack from "../../public/images/arrowBlack.svg";
import Image from "next/image";

type SimpleBtnProps = {
  btnText: string;
  btnLink: string;
  btnClass: string;
  arrowClass: string;
};

const SimpleBtn = ({
  btnText,
  btnClass,
  btnLink = "/",
  arrowClass,
}: SimpleBtnProps) => {
  return (
    <>
      <Link
        href={btnLink}
        className={`${btnClass} text-sm font-graphikMedium flex items-center gap-2 group hover:underline underline-offset-2  transition-all duration-300`}
      >
        {btnText}
        <Image
          src={arrowBlack}
          alt="icon"
          className={`${arrowClass} group-hover:ml-1 transition-all duration-300`}
        />
      </Link>
    </>
  );
};

export default SimpleBtn;
