# MIDTrust Lab Website

The official website for the **Multimodal Intelligence & Distributed Trust Lab (MIDTrust Lab)** at the Shenzhen University of Information Technology.

## 🚀 Project Overview

MIDTrust Lab is an interdisciplinary research environment focused on advancing trustworthy, human-centered AI systems. This website serves as the digital hub for showcasing the lab's research, team, publications, and academic activities.

### Core Research Themes
- **Multimodal Intelligence**: Integrating visual, linguistic, and emotional signals.
- **Computer Vision & Facial Analysis**: Advanced visual recognition.
- **Large Language Models**: Intelligent systems and NLP.
- **Trustworthy AI**: Transparency, accountability, and fairness.
- **Cybersecurity**: Information security and threat detection.
- **Distributed Trust**: Blockchain-assisted security and decentralized trust.

## 🛠️ Technical Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: Optimized for Vercel/Node.js environments.
- **Content Management**: Data-driven architecture using JSON for scalable updates.
- **Email System**: Server-side actions integrated with Formspree.

## 📁 Project Structure

```text
src/
├── app/               # Next.js App Router pages and layouts
│   ├── about/         # Lab identity and mission
│   ├── contact/       # Inquiry form and contact details
│   ├── news/          # Lab activities and achievements
│   ├── projects/      # Research projects showcase
│   ├── publications/   # Research papers and outputs
│   ├── research/      # Detailed research themes
│   └── team/          # Member profiles
├── components/        # Reusable UI components
│   ├── home/          # Homepage specific sections
│   └── layout/        # Header, Footer, and Global layout
└── data/              # JSON content files (Single source of truth)
    ├── site-config.json
    ├── research.json
    ├── team.json
    └── ...
```

## ⚙️ Getting Started

### Prerequisites
- Node.js 18.x or later
- npm / yarn / pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/haider-bitcoding/MIDTrustLab.git
   cd midt-lab-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

The contact form uses Formspree. To enable it:
1. Create a free account at [formspree.io](https://formspree.io/).
2. Create a new form and copy the **Form ID**.
3. Update the endpoint in `src/app/actions/contact.ts`:
   ```typescript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```

## 📝 License
Proprietary - MIDTrust Lab, Shenzhen University of Information Technology.
