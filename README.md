# Lapat - Stellar Account Activation Platform

<div align="center">

![Lapat Logo](/public/logo.png)

**Removing barriers to entry for the Stellar ecosystem through sponsored account creation**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-blue.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-blue.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Features](#-features)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Overview

Lapat is a platform that solves the bootstrap problem for new users entering the Stellar ecosystem. By connecting sponsors with new users, Lapat enables frictionless account creation without requiring users to already own cryptocurrency.

The platform serves three key stakeholders:

1. **Developers** - Integrate Lapat into their dApps to provide seamless onboarding for users
2. **Sponsors** - Fund new account creation in exchange for brand visibility
3. **End Users** - Receive free Stellar accounts with minimum balance funding

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Application                        │
│                                                                 │
│  ┌───────────────┐    ┌───────────────┐    ┌───────────────┐    │
│  │  Developer    │    │   Sponsor     │    │  How It Works │    │
│  │  Interface    │    │   Interface   │    │  Information  │    │
│  └───────┬───────┘    └───────┬───────┘    └───────────────┘    │
│          │                    │                                  │
│  ┌───────▼───────────────────▼───────┐    ┌───────────────┐    │
│  │                                    │    │               │    │
│  │         Action Modals              │◄───┤    Roadmap    │    │
│  │                                    │    │               │    │
│  └────────────────┬──────────────────┘    └───────────────┘    │
│                   │                                             │
└───────────────────┼─────────────────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────────────────┐
│                                                                 │
│                      Stellar Network API                        │
│                                                                 │
│  ┌───────────────┐    ┌───────────────┐    ┌───────────────┐    │
│  │  Account      │    │  Transaction  │    │  Anti-Abuse   │    │
│  │  Creation     │    │  Processing   │    │  Measures     │    │
│  └───────────────┘    └───────────────┘    └───────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## ✨ Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Developer Integration** | Simple API for dApps to request account creation | ✅ |
| **Sponsor Dashboard** | Analytics and management for sponsors | ✅ |
| **Anti-Abuse System** | Email verification and rate limiting | ✅ |
| **Interactive Roadmap** | Visual representation of the project phases | ✅ |
| **Responsive Design** | Mobile and desktop friendly interface | ✅ |
| **Dark/Light Mode** | Automatic theme switching based on system preferences | ✅ |
| **Account Metrics** | Real-time statistics on account creation | ✅ |

### Security Features

| Security Measure | Description |
|-----------------|-------------|
| **Email Validation** | One-time password verification |
| **Rate Limiting** | Prevents abuse through request throttling |
| **IP Monitoring** | Tracks suspicious patterns |
| **Pattern Detection** | Identifies and blocks abuse attempts |
| **Regular Audits** | Periodic review of activation patterns |

## 🛠️ Installation

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/lapat.git
cd lapat
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/
├── public/               # Static assets
│   ├── phases/           # Phase images
│   └── ...               # Other static files
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── roadmap/      # Roadmap page
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── phases/       # Phase content components
│   │   └── ...           # UI components
│   └── ...
├── package.json          # Project dependencies
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 📝 Usage

### For Developers

```javascript
// Example integration code
const createStellarAccount = async (email) => {
  // Generate keypair locally
  const keypair = StellarSdk.Keypair.random();
  
  // Send only the public key to Lapat
  const response = await fetch('https://api.lapat.io/create-account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      publicKey: keypair.publicKey(),
      email: email
    })
  });
  
  return response.json();
};
```

### For Sponsors

Sponsors can register through the web interface and deposit XLM to fund new account creation. The dashboard provides real-time analytics on:

- Number of accounts funded
- User retention metrics
- Brand exposure statistics
- ROI calculations

## 🔌 API Integration

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/api/create-account` | POST | Request account creation | `publicKey`, `email` |
| `/api/verify-email` | POST | Verify email with OTP | `email`, `otp` |
| `/api/sponsor/register` | POST | Register as a sponsor | `name`, `email`, `website` |
| `/api/sponsor/deposit` | POST | Add funds to sponsor pool | `amount`, `sponsorId` |

## 🗺️ Roadmap

The project is developed in 5 phases:

1. **Phase 1: Foundation** - Core infrastructure and basic account creation
2. **Phase 2: Sponsor Integration** - Sponsor dashboard and branding features
3. **Phase 3: Developer Tools** - SDK and API improvements for developers
4. **Phase 4: Enhanced User Experience** - Customized onboarding and analytics
5. **Phase 5: Ecosystem Expansion** - Integration with other Stellar services

Detailed information about each phase is available on the [Roadmap page](/roadmap).

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">

Built with ❤️ for the Stellar Community

</div>
