import React from "react";

interface PlatformLogoProps {
  type: string;
  className?: string;
}

export const PlatformLogo: React.FC<PlatformLogoProps> = ({ type, className = "w-5 h-5" }) => {
  switch (type) {
    case "dynamics":
      // Microsoft Dynamics / Microsoft 4-square
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="2" width="9" height="9" fill="#F25022" rx="1.5" />
          <rect x="13" y="2" width="9" height="9" fill="#7FBA00" rx="1.5" />
          <rect x="2" y="13" width="9" height="9" fill="#00A4EF" rx="1.5" />
          <rect x="13" y="13" width="9" height="9" fill="#FFB900" rx="1.5" />
        </svg>
      );

    case "openai":
      // OpenAI ChatGPT
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1636a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813l-.0048 6.7219z" />
        </svg>
      );

    case "copilot":
      // Microsoft Copilot Ribbon
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M19 7a5 5 0 0 0-8.9-3.1L3.6 14.5a3 3 0 0 0 4.2 4.2l6.5-6.5a2 2 0 0 1 2.8 0l1.9 1.9a1 1 0 0 0 1.4-1.4L18.5 10.8A5 5 0 0 0 19 7z"
            fill="url(#copilotGrad)"
          />
          <defs>
            <linearGradient id="copilotGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0078D4" />
              <stop offset="0.5" stopColor="#7FBA00" />
              <stop offset="1" stopColor="#FFB900" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "gemini":
      // Google Gemini Sparkle Star
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
            fill="url(#geminiGrad)"
          />
          <defs>
            <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1B73E8" />
              <stop offset="0.5" stopColor="#8AB4F8" />
              <stop offset="1" stopColor="#D93025" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "claude":
      // Anthropic Claude
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#D97706">
          <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
          <circle cx="12" cy="10" r="2.5" fill="#FFFBEB" />
        </svg>
      );

    case "github-copilot":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case "cursor":
      // Cursor Cube
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#38BDF8" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 22V12" stroke="#38BDF8" strokeWidth="2" />
          <path d="M21 7L12 12L3 7" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      );

    case "make":
      // Make.com Purple M
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#A855F7">
          <path d="M4 6C4 4.895 4.895 4 6 4H8L12 11L16 4H18C19.105 4 20 4.895 20 6V18C20 19.105 19.105 20 18 20H16V12L13 17H11L8 12V20H6C4.895 20 4 19.105 4 18V6Z" />
        </svg>
      );

    case "n8n":
      // n8n Node Connectors
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#EA580C">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="7" r="3" />
          <circle cx="18" cy="17" r="3" />
          <line x1="9" y1="12" x2="15" y2="7" stroke="#EA580C" strokeWidth="2" />
          <line x1="9" y1="12" x2="15" y2="17" stroke="#EA580C" strokeWidth="2" />
        </svg>
      );

    case "gamma":
      // Gamma App Icon
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#EC4899">
          <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="#F43F5E" opacity="0.3" />
          <path d="M7 9L12 6L17 9L12 12L7 9Z" fill="#F43F5E" />
          <path d="M7 15L12 12L17 15L12 18L7 15Z" fill="#BE123C" />
        </svg>
      );

    case "napkin":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#10B981">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="#10B981" strokeWidth="2" fill="none" />
          <line x1="8" y1="9" x2="16" y2="9" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="14" x2="13" y2="14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "notebooklm":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#4285F4" strokeWidth="2" />
          <line x1="8" y1="8" x2="14" y2="8" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="12" x2="16" y2="12" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="16" x2="12" y2="16" stroke="#34A853" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "clipchamp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#06B6D4">
          <path d="M4 6H20V18H4V6Z" stroke="#06B6D4" strokeWidth="2" rx="2" />
          <polygon points="10,9 16,12 10,15" fill="#06B6D4" />
        </svg>
      );

    case "outlook":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#0284C7">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#0284C7" strokeWidth="2" fill="none" />
          <path d="M3 7L12 13L21 7" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "drawio":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#F97316">
          <rect x="3" y="4" width="7" height="6" rx="1.5" stroke="#F97316" strokeWidth="2" fill="none" />
          <rect x="14" y="14" width="7" height="6" rx="1.5" stroke="#F97316" strokeWidth="2" fill="none" />
          <path d="M10 7H14V14" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "webhooks":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="5" cy="12" r="3" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      );

    case "code-node":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8 7L3 12L8 17M16 7L21 12L16 17M14 4L10 20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "opreix":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="9" stroke="#0078D4" strokeWidth="2" />
          <path d="M12 6V12L16 14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    default:
      // Generic Tech / ERP Portal
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#38BDF8" strokeWidth="2" />
          <line x1="3" y1="9" x2="21" y2="9" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      );
  }
};
