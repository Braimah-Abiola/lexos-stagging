import { ChangelogDialog } from "@/components/common/changelog-dialog";
import Footer from "@/sections/footer";
import Navigation from "@/sections/navigation";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: 'swap',
});

const plexSans = IBM_Plex_Sans({
    variable: "--font-plex-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Lexos App",
    description: "Your application description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${manrope.variable} ${plexSans.variable}`}>
            <body className="antialiased font-plex-sans select-none">
                <Navigation />
                <main className="min-h-screen">
                    {children}
                </main>
                <ChangelogDialog
                    dialogId="changelog-qr-1"
                    title="QR Code Implementation!"
                    description="Faster processing, enhanced accuracy, and expanded item recognition are now even more powerful with our new QR code implementation from desktop to phone."
                    imageSrc="/assets/qr-update.png"
                />
                <Footer />
            </body>
        </html>
    );
}