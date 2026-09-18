import { Archivo } from "next/font/google";
import "./globals.css";
import { config } from "./config";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: config.seo.titulo,
  description: config.seo.descricao,
  robots: "noindex, nofollow",
  openGraph: {
    title: config.seo.titulo,
    description: config.seo.descricao,
    type: "website",
  },
};

export const viewport = {
  themeColor: (config.tema && config.tema.fundo) || "#050814",
  width: "device-width",
  initialScale: 1,
};

function GA4({ id }) {
  if (!id) return null;
  const code = [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js',new Date());",
    "gtag('config','" + id + "');",
  ].join("");
  return (
    <>
      <script async src={"https://www.googletagmanager.com/gtag/js?id=" + id} />
      <script dangerouslySetInnerHTML={{ __html: code }} />
    </>
  );
}

function Pixel({ id }) {
  if (!id) return null;
  const code = [
    "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?",
    "n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;",
    "n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;",
    "t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,",
    "document,'script','https://connect.facebook.net/en_US/fbevents.js');",
    "fbq('init','" + id + "');fbq('track','PageView');",
  ].join("\n");
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

function temaVars() {
  const t = config.tema;
  if (!t) return undefined;
  const v = {};
  if (t.destaque) v["--gold"] = t.destaque;
  if (t.destaque2) v["--gold-2"] = t.destaque2;
  if (t.premio) v["--hl"] = t.premio;
  if (t.botaoFundo) v["--btn-bg"] = t.botaoFundo;
  if (t.botaoTexto) v["--btn-text"] = t.botaoTexto;
  if (t.fundo) v["--bg"] = t.fundo;
  if (t.fundo2) v["--bg-2"] = t.fundo2;
  if (t.card) v["--card"] = t.card;
  return v;
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={archivo.variable} style={temaVars()}>
      <head>
        <GA4 id={config.gaId} />
        <Pixel id={config.pixelId} />
      </head>
      <body>{children}</body>
    </html>
  );
}
