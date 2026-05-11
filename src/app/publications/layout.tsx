import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | MIDTrust Lab",
  description: "Research outputs, papers, and journals published by the MIDTrust Lab team.",
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
