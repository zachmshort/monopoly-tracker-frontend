import { Josefin_Sans, Sulphur_Point } from "next/font/google";

const sulpherBold = Sulphur_Point({
  subsets: ["latin"],
  weight: ["700"],
});
const josephinBold = Josefin_Sans({
  weight: ["700"],
  subsets: ["latin"],
});
const sulpherLight = Sulphur_Point({
  subsets: ["latin"],
  weight: ["300"],
});
export { sulpherBold, josephinBold, sulpherLight };
