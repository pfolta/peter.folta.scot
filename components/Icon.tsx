"use client";

import { JSX, SVGProps } from "react";
import { IconType as ReactIconType } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
    Fa500Px,
    FaAddressCard,
    FaAmazon,
    FaBug,
    FaEnvelope,
    FaFlickr,
    FaFoursquare,
    FaGithub,
    FaHackerNews,
    FaHackerrank,
    FaInstagram,
    FaLinkedin,
    FaNpm,
    FaPinterest,
    FaRedditAlien,
    FaSquareFacebook,
    FaSquareTumblr,
    FaStackExchange,
    FaSteam,
    FaThreads,
    FaTiktok,
    FaUnsplash,
    FaXTwitter,
    FaXing
} from "react-icons/fa6";
import { SiDuolingo, SiPrintables, SiThingiverse } from "react-icons/si";
import styled from "styled-components";

import { JetPunk as JetPunkSvg, MakerWorld as MakerWorldSvg } from "@/resources/icons";

type SVGIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;
type IconType = ReactIconType | SVGIconType;

const Icon = (icon: IconType) => styled(icon)`
    margin-right: 0.25em;
    vertical-align: -0.125em;

    height: 1em;
    width: 1em;
    stroke: currentColor;
    fill: currentColor;
`;

export default Icon;
export type { IconType };

export const AddressCard = Icon(FaAddressCard);
export const Amazon = Icon(FaAmazon);
export const Bug = Icon(FaBug);
export const Duolingo = Icon(SiDuolingo);
export const Email = Icon(FaEnvelope);
export const Facebook = Icon(FaSquareFacebook);
export const FiveHundredPx = Icon(Fa500Px);
export const Flickr = Icon(FaFlickr);
export const Foursquare = Icon(FaFoursquare);
export const GitHub = Icon(FaGithub);
export const HackerNews = Icon(FaHackerNews);
export const Hackerrank = Icon(FaHackerrank);
export const Instagram = Icon(FaInstagram);
export const JetPunk = Icon(JetPunkSvg);
export const LinkedIn = Icon(FaLinkedin);
export const MakerWorld = Icon(MakerWorldSvg);
export const MapMarker = Icon(FaMapMarkerAlt);
export const Npm = Icon(FaNpm);
export const Pinterest = Icon(FaPinterest);
export const Printables = Icon(SiPrintables);
export const Reddit = Icon(FaRedditAlien);
export const StackExchange = Icon(FaStackExchange);
export const Steam = Icon(FaSteam);
export const Thingiverse = Icon(SiThingiverse);
export const Threads = Icon(FaThreads);
export const Tiktok = Icon(FaTiktok);
export const Tumblr = Icon(FaSquareTumblr);
export const Unsplash = Icon(FaUnsplash);
export const X = Icon(FaXTwitter);
export const Xing = Icon(FaXing);
