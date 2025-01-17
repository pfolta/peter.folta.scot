import {
    Fa500Px,
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

import { Icon } from "@/components";
import profile from "@/profile.json";
import { Jetpunk, MakerWorld } from "@/resources/icons";

const links = [
    {
        id: "code",
        name: "Code & Collaboration",
        links: [
            {
                name: "GitHub",
                url: profile.social.gitHub,
                icon: Icon(FaGithub)
            },
            {
                name: "NPM",
                url: profile.social.npm,
                icon: Icon(FaNpm)
            },
            {
                name: "HackerRank",
                url: profile.social.hackerRank,
                icon: Icon(FaHackerrank)
            },
            {
                name: "Stack Exchange",
                url: profile.social.stackExchange,
                icon: Icon(FaStackExchange)
            }
        ]
    },
    {
        id: "social",
        name: "Social Media",
        links: [
            {
                name: "Facebook",
                url: profile.social.facebook,
                icon: Icon(FaSquareFacebook)
            },
            {
                name: "Twitter",
                url: profile.social.twitter,
                icon: Icon(FaXTwitter)
            },
            {
                name: "LinkedIn",
                url: profile.social.linkedIn,
                icon: Icon(FaLinkedin)
            },
            {
                name: "Xing",
                url: profile.social.xing,
                icon: Icon(FaXing)
            },
            {
                name: "Instagram",
                url: profile.social.instagram,
                icon: Icon(FaInstagram)
            },
            {
                name: "Threads",
                url: profile.social.threads,
                icon: Icon(FaThreads)
            },
            {
                name: "TikTok",
                url: profile.social.tikTok,
                icon: Icon(FaTiktok)
            },
            {
                name: "Pinterest",
                url: profile.social.pinterest,
                icon: Icon(FaPinterest)
            },
            {
                name: "Reddit",
                url: profile.social.reddit,
                icon: Icon(FaRedditAlien)
            },
            {
                name: "Hacker News",
                url: profile.social.hackerNews,
                icon: Icon(FaHackerNews)
            },
            {
                name: "Tumblr",
                url: profile.social.tumblr,
                icon: Icon(FaSquareTumblr)
            },
            {
                name: "Foursquare",
                url: profile.social.foursquare,
                icon: Icon(FaFoursquare)
            }
        ]
    },
    {
        id: "photography",
        name: "Photography",
        links: [
            {
                name: "500px",
                url: profile.social["500px"],
                icon: Icon(Fa500Px)
            },
            {
                name: "Unsplash",
                url: profile.social.unsplash,
                icon: Icon(FaUnsplash)
            },
            {
                name: "Flickr",
                url: profile.social.flickr,
                icon: Icon(FaFlickr)
            }
        ]
    },
    {
        id: "3dprinting",
        name: "3D Printing",
        links: [
            {
                name: "MakerWorld",
                url: profile.social.makerworld,
                icon: Icon(MakerWorld)
            },
            {
                name: "Printables",
                url: profile.social.printables,
                icon: Icon(SiPrintables)
            },
            {
                name: "Thingiverse",
                url: profile.social.thingiverse,
                icon: Icon(SiThingiverse)
            }
        ]
    },
    {
        id: "gaming",
        name: "Gaming",
        links: [
            {
                name: "Steam",
                url: profile.social.steam,
                icon: Icon(FaSteam)
            },
            {
                name: "Duolingo",
                url: profile.social.duolingo,
                icon: Icon(SiDuolingo)
            },
            {
                name: "JetPunk",
                url: profile.social.jetPunk,
                icon: Icon(Jetpunk)
            }
        ]
    }
];

export default links;
