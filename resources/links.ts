import * as Icon from "@/components/Icon";
import profile from "@/profile.json";

const links = [
    {
        id: "code",
        name: "Code & Collaboration",
        links: [
            {
                name: "GitHub",
                url: profile.social.gitHub,
                icon: Icon.GitHub
            },
            {
                name: "NPM",
                url: profile.social.npm,
                icon: Icon.Npm
            },
            {
                name: "HackerRank",
                url: profile.social.hackerRank,
                icon: Icon.Hackerrank
            },
            {
                name: "Stack Exchange",
                url: profile.social.stackExchange,
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
                icon: Icon.Facebook
            },
            {
                name: "X",
                url: profile.social.twitter,
                icon: Icon.X
            },
            {
                name: "LinkedIn",
                url: profile.social.linkedIn,
                icon: Icon.LinkedIn
            },
            {
                name: "Xing",
                url: profile.social.xing,
                icon: Icon.Xing
            },
            {
                name: "Threads",
                url: profile.social.threads,
                icon: Icon.Threads
            },
            {
                name: "TikTok",
                url: profile.social.tikTok,
                icon: Icon.Tiktok
            },
            {
                name: "Pinterest",
                url: profile.social.pinterest,
                icon: Icon.Pinterest
            },
            {
                name: "Reddit",
                url: profile.social.reddit,
                icon: Icon.Reddit
            },
            {
                name: "Hacker News",
                url: profile.social.hackerNews,
                icon: Icon.HackerNews
            },
            {
                name: "Tumblr",
                url: profile.social.tumblr,
                icon: Icon.Tumblr
            },
            {
                name: "Foursquare",
                url: profile.social.foursquare,
                icon: Icon.Foursquare
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
                icon: Icon.FiveHundredPx
            },
            {
                name: "Unsplash",
                url: profile.social.unsplash,
                icon: Icon.Unsplash
            },
            {
                name: "Instagram",
                url: profile.social.instagram,
                icon: Icon.Instagram
            },
            {
                name: "Flickr",
                url: profile.social.flickr,
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
                icon: Icon.MakerWorld
            },
            {
                name: "Printables",
                url: profile.social.printables,
                icon: Icon.Printables
            },
            {
                name: "Thingiverse",
                url: profile.social.thingiverse,
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
                icon: Icon.Steam
            },
            {
                name: "Duolingo",
                url: profile.social.duolingo,
                icon: Icon.Duolingo
            },
            {
                name: "JetPunk",
                url: profile.social.jetPunk,
                icon: Icon.JetPunk
            }
        ]
    }
];

export default links;
