import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>TrustGuard AI - AI-Powered Detection of Online Harms</title>
        <meta
          name="description"
          content="Leveraging AI to detect and mitigate online harms, ensuring a safer digital space for everyone."
        />
      </Head>
      <Navbar />
      <HeroSection />
    </>
  );
}
