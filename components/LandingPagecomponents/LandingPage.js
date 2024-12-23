import Image from "next/image";
import Services from "./Services";
import ViewPage from "./ViewPage";
import EventShedule from "./EventShedule";
import ContactPage from "./ContactPage";
import Fotter from "./Fotter";
import NavBar from "./NavBar";
export default function LandingPage() {
  return (
    <div>
      <NavBar index={undefined} />
      <ViewPage />
      <Services />
      <EventShedule /> 
      <ContactPage />
      <Fotter />
    </div>
  );
}
