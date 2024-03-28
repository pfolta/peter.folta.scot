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

const profiles = [
    {
        id: "code",
        name: "Code & Collaboration",
        links: [
            {
                name: "GitHub",
                icon: FaGithub,
                url: "https://github.com/pfolta"
            },
            {
                name: "NPM",
                url: "https://www.npmjs.com/~pfolta",
                icon: FaNpm
            },
            {
                name: "HackerRank",
                url: "https://www.hackerrank.com/profile/pfolta",
                icon: FaHackerrank
            },
            {
                name: "Stack Exchange",
                url: "http://stackexchange.com/users/3834287/pfolta",
                icon: FaStackExchange
            }
        ]
    },
    {
        id: "social",
        name: "Social Media",
        links: [
            {
                name: "Facebook",
                icon: FaSquareFacebook,
                url: "https://www.facebook.com/pfolta"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/pfoltaUK",
                icon: FaXTwitter
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/peterfolta/",
                icon: FaLinkedin
            },
            {
                name: "Xing",
                url: "https://www.xing.com/profile/Peter_Folta",
                icon: FaXing
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/pfolta",
                icon: FaInstagram
            },
            {
                name: "Threads",
                url: "https://www.threads.net/@pfolta",
                icon: FaThreads
            },
            {
                name: "TikTok",
                icon: FaTiktok,
                url: "https://www.tiktok.com/@pfolta"
            },
            {
                name: "Pinterest",
                url: "https://www.pinterest.com/pfolta/",
                icon: FaPinterest
            },
            {
                name: "Reddit",
                url: "https://www.reddit.com/user/pfolta/",
                icon: FaRedditAlien
            },
            {
                name: "Hacker News",
                url: "https://news.ycombinator.com/user?id=pfolta",
                icon: FaHackerNews
            },
            {
                name: "Tumblr",
                url: "https://www.tumblr.com/pfolta",
                icon: FaSquareTumblr
            },
            {
                name: "Foursquare",
                url: "https://foursquare.com/peterf9657841",
                icon: FaFoursquare
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
                icon: Fa500Px
            },
            {
                name: "Unsplash",
                url: "https://unsplash.com/@pfolta",
                icon: FaUnsplash
            },
            {
                name: "Flickr",
                url: "https://www.flickr.com/photos/pfolta",
                icon: FaFlickr
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
                icon: FaSteam
            },
            {
                name: "Duolingo",
                url: "https://www.duolingo.com/profile/peterfolta",
                icon: SiDuolingo
            },
            {
                name: "JetPunk",
                url: "https://www.jetpunk.com/users/pfolta"
            }
        ]
    }
];

export default profiles;
