import Image from "next/image";
import Header from "./components/Header/Header";
import ContentGoogle from "./components/content/ContentGoogle";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
    <div className="justify-between flex h-screen flex-col">

<div>
<Header/>

<ContentGoogle/>
</div>
<Footer/>
    </div>
    </>

  );
}
