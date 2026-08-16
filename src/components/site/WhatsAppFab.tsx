import { waLink } from "./Cta";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("analisar")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-20 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_14px_34px_-10px_rgba(0,0,0,0.55)] ring-1 ring-black/10 transition-transform duration-200 hover:scale-105 md:right-6 md:bottom-6 md:h-16 md:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 md:h-9 md:w-9" aria-hidden>
        <path
          fill="#fff"
          d="M16.04 4C9.93 4 4.98 8.95 4.98 15.06c0 2.13.6 4.12 1.65 5.81L4 28l7.31-2.53a11.02 11.02 0 0 0 4.73 1.07h.01c6.1 0 11.05-4.95 11.05-11.06C27.1 8.95 22.15 4 16.04 4Zm6.49 15.68c-.27.76-1.57 1.46-2.17 1.51-.6.05-1.16.27-3.9-.94-3.32-1.47-5.4-4.95-5.57-5.18-.16-.23-1.31-1.86-1.24-3.5.06-1.64.95-2.42 1.27-2.75.32-.33.7-.4.94-.4.24 0 .48.01.69.02.22.01.52-.08.8.65.29.76.97 2.6 1.06 2.79.09.19.14.41.02.65-.12.24-.24.4-.44.62-.2.22-.42.5-.6.66-.2.19-.4.4-.19.78.21.38.94 1.63 2.02 2.63 1.38 1.28 2.56 1.7 2.93 1.9.36.19.58.17.8-.06.22-.24.94-1.05 1.19-1.41.25-.36.5-.29.83-.16.33.13 2.09 1.05 2.45 1.24.36.19.6.28.69.43.09.15.09.87-.18 1.63Z"
        />
      </svg>
    </a>
  );
}
