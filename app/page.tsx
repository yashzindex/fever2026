import Banner from "./sections/banner";
import Header from "./components/header";
import Client from "./sections/client";
import ThisFever from "./sections/thisFever";
import GetAvoid from "./sections/getAvoid";
import get from "@/public/images/getBg.png";
import avoid from "@/public/images/avoidBg.png";
import Counter from "./sections/counter";
import Platform from "./sections/platform";
import PlugPlay from "./sections/plugPlay";
import MailBg from "./sections/mailBg";
import Footer from "./components/footer";

const getContent = {
  title: "What you get",
  subText: "Drive Revenue, Loyalty, and Innovation",
  list: [
    "Stronger customer loyalty",
    "New revenue streams",
    "Higher revenue",
    "Greater efficiency",
    "and more room to innovate",
  ],
};

const avoidContent = {
  title: "What you avoid",
  subText: "Your own Integrated, Secure, and Compliant Platform",
  list: [
    "Data silos",
    "Complex integrations",
    "Technical risks",
    "Compliance issues",
    "or Added overhead",
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Client />
      <ThisFever />
      <GetAvoid
        getContent={getContent}
        avoidContent={avoidContent}
        getImage={get}
        avoidImage={avoid}
      />
      <Counter />
      <Platform />
      <PlugPlay />
      <MailBg />
      <Footer />
    </>
  );
}
