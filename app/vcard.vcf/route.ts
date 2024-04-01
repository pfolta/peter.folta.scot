import { readFileSync } from "fs";
import { resolve } from "path";
import vCardJS from "vcards-js";

import packageInfo from "@/package.json";

const { author, homepage } = packageInfo;

const vCard = vCardJS();
vCard.version = "4.0";
vCard.source = `${homepage}/vcard.vcf`;
vCard.firstName = "Peter";
vCard.lastName = "Folta";
vCard.title = "Senior Software Engineer";
vCard.email = author.email;
vCard.url = author.url;
vCard.socialUrls.facebook = "https://www.facebook.com/pfolta";
vCard.socialUrls.linkedIn = "https://www.linkedin.com/in/peterfolta/";
vCard.socialUrls.twitter = "https://twitter.com/pfoltaUK";
vCard.photo.embedFromString(readFileSync(resolve("public/images/me.jpg")).toString("base64"), "JPEG");

const GET = () =>
    new Response(vCard.getFormattedString(), {
        headers: {
            "Content-Type": "text/vcard"
        }
    });

export { GET };
