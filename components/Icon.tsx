"use client";

import { JSX, SVGProps } from "react";
import { IconType as ReactIconType } from "react-icons";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";

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

export const AddressCard = Icon(Fa6Icons.FaAddressCard);
export const Amazon = Icon(Fa6Icons.FaAmazon);
export const Bug = Icon(Fa6Icons.FaBug);
export const Duolingo = Icon(SiIcons.SiDuolingo);
export const Email = Icon(Fa6Icons.FaEnvelope);
export const Facebook = Icon(Fa6Icons.FaSquareFacebook);
export const FiveHundredPx = Icon(Fa6Icons.Fa500Px);
export const Flickr = Icon(Fa6Icons.FaFlickr);
export const Foursquare = Icon(Fa6Icons.FaFoursquare);
export const GitHub = Icon(Fa6Icons.FaGithub);
export const HackerNews = Icon(Fa6Icons.FaHackerNews);
export const Hackerrank = Icon(Fa6Icons.FaHackerrank);
export const Instagram = Icon(Fa6Icons.FaInstagram);
export const JetPunk = Icon(JetPunkSvg);
export const LinkedIn = Icon(Fa6Icons.FaLinkedin);
export const MakerWorld = Icon(MakerWorldSvg);
export const MapMarker = Icon(FaIcons.FaMapMarkerAlt);
export const Npm = Icon(Fa6Icons.FaNpm);
export const Pinterest = Icon(Fa6Icons.FaPinterest);
export const Printables = Icon(SiIcons.SiPrintables);
export const Reddit = Icon(Fa6Icons.FaRedditAlien);
export const StackExchange = Icon(Fa6Icons.FaStackExchange);
export const Steam = Icon(Fa6Icons.FaSteam);
export const Thingiverse = Icon(SiIcons.SiThingiverse);
export const Threads = Icon(Fa6Icons.FaThreads);
export const Tiktok = Icon(Fa6Icons.FaTiktok);
export const Tumblr = Icon(Fa6Icons.FaSquareTumblr);
export const Unsplash = Icon(Fa6Icons.FaUnsplash);
export const X = Icon(Fa6Icons.FaXTwitter);
export const Xing = Icon(Fa6Icons.FaXing);
