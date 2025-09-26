import Image from "next/image";
import Link from "next/link";
import arrowWhite from "../../public/images/arrowWhite.svg";

type BlackBtn = {
  btnText: string;
  btnLink: string;
  btnClass: string;
  arrowClass: string;
};

const BlackBtn = ({
  btnText,
  btnClass,
  btnLink = "/",
  arrowClass,
}: BlackBtn) => {
  return (
    <Link
      href={btnLink}
      className={`${btnClass} bg-foreground text-background text-sm font-graphikMedium inline-flex items-center gap-2 py-3 px-4 border border-black rounded-lg group transition-all duration-300`}
    >
      {btnText}
      <Image
        src={arrowWhite}
        alt="icon"
        className={`${arrowClass} group-hover:-rotate-45 transition-all duration-300`}
      />
    </Link>
  );
};

export default BlackBtn;
