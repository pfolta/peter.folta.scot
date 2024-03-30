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
import { SiDuolingo } from "react-icons/si";

import { Icon } from "@/components";
import Jetpunk from "@/resources/Jetpunk";

const profiles = [
    {
        id: "code",
        name: "Code & Collaboration",
        links: [
            {
                name: "GitHub",
                icon: Icon(FaGithub),
                url: "https://github.com/pfolta"
            },
            {
                name: "NPM",
                url: "https://www.npmjs.com/~pfolta",
                icon: Icon(FaNpm)
            },
            {
                name: "HackerRank",
                url: "https://www.hackerrank.com/profile/pfolta",
                icon: Icon(FaHackerrank)
            },
            {
                name: "Stack Exchange",
                url: "http://stackexchange.com/users/3834287/pfolta",
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
                url: "https://www.facebook.com/pfolta",
                icon: Icon(FaSquareFacebook)
            },
            {
                name: "Twitter",
                url: "https://twitter.com/pfoltaUK",
                icon: Icon(FaXTwitter)
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/peterfolta/",
                icon: Icon(FaLinkedin)
            },
            {
                name: "Xing",
                url: "https://www.xing.com/profile/Peter_Folta",
                icon: Icon(FaXing)
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/pfolta",
                icon: Icon(FaInstagram)
            },
            {
                name: "Threads",
                url: "https://www.threads.net/@pfolta",
                icon: Icon(FaThreads)
            },
            {
                name: "TikTok",
                url: "https://www.tiktok.com/@pfolta",
                icon: Icon(FaTiktok)
            },
            {
                name: "Pinterest",
                url: "https://www.pinterest.com/pfolta/",
                icon: Icon(FaPinterest)
            },
            {
                name: "Reddit",
                url: "https://www.reddit.com/user/pfolta/",
                icon: Icon(FaRedditAlien)
            },
            {
                name: "Hacker News",
                url: "https://news.ycombinator.com/user?id=pfolta",
                icon: Icon(FaHackerNews)
            },
            {
                name: "Tumblr",
                url: "https://www.tumblr.com/pfolta",
                icon: Icon(FaSquareTumblr)
            },
            {
                name: "Foursquare",
                url: "https://foursquare.com/peterf9657841",
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
                url: "https://500px.com/p/pfolta?view=photos",
                icon: Icon(Fa500Px)
            },
            {
                name: "Unsplash",
                url: "https://unsplash.com/@pfolta",
                icon: Icon(FaUnsplash)
            },
            {
                name: "Flickr",
                url: "https://www.flickr.com/photos/pfolta",
                icon: Icon(FaFlickr)
            }
        ]
    },
    {
        id: "gaming",
        name: "Gaming",
        links: [
            {
                name: "Steam",
                url: "https://steamcommunity.com/id/pfolta/",
                icon: Icon(FaSteam)
            },
            {
                name: "Duolingo",
                url: "https://www.duolingo.com/profile/peterfolta",
                icon: Icon(SiDuolingo)
            },
            {
                name: "JetPunk",
                url: "https://www.jetpunk.com/users/pfolta",
                icon: Icon(Jetpunk)
            }
        ]
    }
];

export default profiles;
