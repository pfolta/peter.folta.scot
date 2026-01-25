import * as Icon from "@/components/Icon";
import profile from "@/profile.json";

interface LinkGroup {
    id: string;
    name: string;
    links: Link[];
}

interface Link {
    name: string;
    url: string;
    color: string;
    icon: Icon.IconType;
}

const links: LinkGroup[] = [
    {
        id: "code",
        name: "Code & Collaboration",
        links: [
            {
                name: "GitHub",
                url: profile.social.gitHub,
                color: "#333333",
                icon: Icon.GitHub
            },
            {
                name: "NPM",
                url: profile.social.npm,
                color: "#cb3837",
                icon: Icon.Npm
            },
            {
                name: "HackerRank",
                url: profile.social.hackerRank,
                color: "#32c766",
                icon: Icon.Hackerrank
            },
            {
                name: "Stack Exchange",
                url: profile.social.stackExchange,
                color: "#1e5397",
                icon: Icon.StackExchange
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
                color: "#0866fF",
                icon: Icon.Facebook
            },
            {
                name: "X (Twitter)",
                url: profile.social.twitter,
                color: "#000000",
                icon: Icon.X
            },
            {
                name: "LinkedIn",
                url: profile.social.linkedIn,
                color: "#0a66c2",
                icon: Icon.LinkedIn
            },
            {
                name: "Xing",
                url: profile.social.xing,
                color: "#0698a0",
                icon: Icon.Xing
            },
            {
                name: "Threads",
                url: profile.social.threads,
                color: "#000000",
                icon: Icon.Threads
            },
            {
                name: "TikTok",
                url: profile.social.tikTok,
                color: "#fe2c55",
                icon: Icon.Tiktok
            },
            {
                name: "Pinterest",
                url: profile.social.pinterest,
                color: "#e60023",
                icon: Icon.Pinterest
            },
            {
                name: "Reddit",
                url: profile.social.reddit,
                color: "#ff4500",
                icon: Icon.Reddit
            },
            {
                name: "Hacker News",
                url: profile.social.hackerNews,
                color: "#ff6600",
                icon: Icon.HackerNews
            },
            {
                name: "Tumblr",
                url: profile.social.tumblr,
                color: "#35465c",
                icon: Icon.Tumblr
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
                color: "#0099e5",
                icon: Icon.FiveHundredPx
            },
            {
                name: "Unsplash",
                url: profile.social.unsplash,
                color: "#111111",
                icon: Icon.Unsplash
            },
            {
                name: "Instagram",
                url: profile.social.instagram,
                color: "#e1306c",
                icon: Icon.Instagram
            },
            {
                name: "Flickr",
                url: profile.social.flickr,
                color: "#0063dc",
                icon: Icon.Flickr
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
                color: "#212b36",
                icon: Icon.MakerWorld
            },
            {
                name: "Printables",
                url: profile.social.printables,
                color: "#fa6831",
                icon: Icon.Printables
            },
            {
                name: "Thingiverse",
                url: profile.social.thingiverse,
                color: "#2b52fe",
                icon: Icon.Thingiverse
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
                color: "#171d25",
                icon: Icon.Steam
            },
            {
                name: "Duolingo",
                url: profile.social.duolingo,
                color: "#58cc02",
                icon: Icon.Duolingo
            },
            {
                name: "JetPunk",
                url: profile.social.jetPunk,
                color: "#d1d138",
                icon: Icon.JetPunk
            }
        ]
    }
];

export default links;
