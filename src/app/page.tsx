'use client'
import { motion } from "framer-motion";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { LeadSection } from "./components/LeadSection";
import { Footer } from "./components/Footer";
import { Faq } from "./components/Faq";
import { Workflow } from "./components/Workflow";

export default function Home() {
  return (
    // Exemplo de como aplicar no Hero
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Services />
      <Workflow/>
      <LeadSection />
      <Faq/>/
      <Footer />
    </motion.div>
  );
}
