import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MIDTrust Lab",
  description: "Get in touch with the Multimodal Intelligence & Distributed Trust Lab for collaborations, inquiries, or joining the team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
