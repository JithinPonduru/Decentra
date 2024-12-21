import Image from "next/image";
import Services from "./Services";
import ViewPage from "./ViewPage";
import EventShedule from "./EventShedule";
import ContactPage from "./ContactPage";
import Fotter from "./Fotter";
export default function LandingPage() {
  return (
    <div>
      <ViewPage />
      <Services />
      <EventShedule /> 
      <ContactPage />
      <Fotter />
    </div>
  );
}
