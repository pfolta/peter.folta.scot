import { readFileSync } from "fs";
import { resolve } from "path";
import vCardsJs from "vcards-js";

import profile from "@/profile.json";

const vCard = vCardsJs();
vCard.version = "4.0";
vCard.source = `${profile.url}/vcard.vcf`;
vCard.photo.embedFromString(readFileSync(resolve("public/images/me.jpg")).toString("base64"), "JPEG");
vCard.firstName = profile.firstName;
vCard.lastName = profile.lastName;
vCard.formattedName = profile.name;
vCard.title = profile.title;
vCard.email = profile.email;
vCard.url = profile.url;

["linkedIn", "facebook", "twitter"].forEach((social) => (vCard.socialUrls[social] = profile.social[social as keyof typeof profile.social]));

const vCardSerialized = vCard.getFormattedString();

const GET = () =>
    new Response(vCardSerialized, {
        headers: {
            "Content-Type": "text/vcard"
        }
    });

export { GET };
export const dynamic = "force-static";
