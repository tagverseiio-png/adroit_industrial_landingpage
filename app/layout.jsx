import './globals.css';
import FloatingActions from '../components/FloatingActions';

export const metadata = {
  title: 'Adroit Design | Industrial Architectural Design, PEB, Civil, MEP, HVAC, FPS & PMC',
  description: 'Adroit Design delivers industrial architectural design, interiors, civil, PEB, MEP, HVAC, FPS, PMC and specialized industrial projects — engineered and executed end-to-end by one accountable team.',
  keywords: 'industrial architectural design, industrial civil contractor, PEB pre-engineered buildings, MEP contractor, HVAC design and installation, fire protection system FPS, PMC project management consultancy, industrial interior design, industrial project execution company, specialized industrial projects',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
        
        {/* Google Analytics Script Placeholders */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXX');
            `,
          }}
        />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "Adroit Design",
          "description": "Industrial architectural design and engineering firm delivering interiors, civil, PEB, MEP, HVAC, FPS, PMC and specialized industrial projects end-to-end.",
          "url": "https://www.adroitdesign.example/industrial",
          "telephone": "+91-90000-00000",
          "priceRange": "₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Add your office address here",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600000",
            "addressCountry": "IN"
          },
          "areaServed": "Chennai, Tamil Nadu, India",
          "sameAs": [
            "https://www.instagram.com/adroitdesign",
            "https://www.linkedin.com/company/adroitdesign"
          ]
        }) }} />
      </head>
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
