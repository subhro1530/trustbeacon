import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Head>
        <title>TrustGuard AI - AI-Powered Detection of Online Harms</title>
        <meta
          name="description"
          content="Leveraging AI to detect and mitigate online harms, ensuring a safer digital space for everyone."
        />
        <link rel="icon" href="/favicon.ico" />  {/* ✅ Add favicon link */}
      </Head>
      <Navbar />
      <Box as="main">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <TestimonialsSection />
      </Box>
      <Footer />
    </>
  );
}
