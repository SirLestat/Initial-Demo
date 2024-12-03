import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "../../components/layouts/MainLayout.module.css";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
    </MainLayout>
  );
}
