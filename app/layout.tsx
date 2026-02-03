import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GridScan } from "@/components/GridScan";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OP Support - AI powered customer care chatbot builder",
  description:
    "OP Support is an AI powered customer care chatbot builder that integrates with your docs, links, and text to answer customer queries instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[#050509] min-h-screen font-sans text-zinc-100 antialiased`}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            className={undefined}
            style={undefined}
          />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
