import {
    IconDefinition,
    fa500px,
    faFacebookSquare,
    faFlickr,
    faFoursquare,
    faGithub,
    faHackerNews,
    faHackerrank,
    faInstagram,
    faLinkedin,
    faNpm,
    faPinterest,
    faReddit,
    faStackExchange,
    faSteamSquare,
    faThreads,
    faTiktok,
    faTumblrSquare,
    faUnsplash,
    faXTwitter,
    faXing
} from "@fortawesome/free-brands-svg-icons";

interface Link {
    id: string;
    name: string;
    url: string;
    icon?: IconDefinition;
}

interface Profile {
    id: string;
    name: string;
    links: Link[];
}

const profiles: Profile[] = [
    {
        id: "code",
        name: "Code & Collaboration",
        links: [
            {
                id: "github",
                name: "GitHub",
                icon: faGithub,
                url: "https://github.com/pfolta"
            },
            {
                id: "npm",
                name: "NPM (Node.js)",
                url: "https://www.npmjs.com/~pfolta",
                icon: faNpm
            },
            {
                id: "hackerrank",
                name: "HackerRank",
                url: "https://www.hackerrank.com/profile/pfolta",
                icon: faHackerrank
            },
            {
                id: "stackexchange",
                name: "Stack Overflow/Stack Exchange",
                url: "http://stackexchange.com/users/3834287/pfolta",
                icon: faStackExchange
            }
        ]
    },
    {
        id: "social",
        name: "Social Media",
        links: [
            {
                id: "facebook",
                name: "Facebook",
                icon: faFacebookSquare,
                url: "https://www.facebook.com/pfolta"
            },
            {
                id: "twitter",
                name: "Twitter",
                url: "https://twitter.com/pfoltaUK",
                icon: faXTwitter
            },
            {
                id: "linkedin",
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/peterfolta/",
                icon: faLinkedin
            },
            {
                id: "xing",
                name: "Xing",
                url: "https://www.xing.com/profile/Peter_Folta",
                icon: faXing
            },
            {
                id: "instagram",
                name: "Instagram",
                url: "https://www.instagram.com/pfolta",
                icon: faInstagram
            },
            {
                id: "threads",
                name: "Threads",
                url: "https://www.threads.net/@pfolta",
                icon: faThreads
            },
            {
                id: "tiktok",
                name: "TikTok",
                icon: faTiktok,
                url: "https://www.tiktok.com/@pfolta"
            },
            {
                id: "pinterest",
                name: "Pinterest",
                url: "https://www.pinterest.com/pfolta/",
                icon: faPinterest
            },
            {
                id: "reddit",
                name: "Reddit",
                url: "https://www.reddit.com/user/pfolta/",
                icon: faReddit
            },
            {
                id: "hackernews",
                name: "Hacker News",
                url: "https://news.ycombinator.com/user?id=pfolta",
                icon: faHackerNews
            },
            {
                id: "tumblr",
                name: "Tumblr",
                url: "https://www.tumblr.com/pfolta",
                icon: faTumblrSquare
            },
            {
                id: "foursquare",
                name: "Foursquare",
                url: "https://foursquare.com/peterf9657841",
                icon: faFoursquare
            }
        ]
    },
    {
        id: "photography",
        name: "Photography",
        links: [
            {
                id: "500px",
                name: "500px",
                url: "https://500px.com/p/pfolta?view=photos",
                icon: fa500px
            },
            {
                id: "unsplash",
                name: "Unsplash",
                url: "https://unsplash.com/@pfolta",
                icon: faUnsplash
            },
            {
                id: "flickr",
                name: "Flickr",
                url: "https://www.flickr.com/photos/pfolta",
                icon: faFlickr
            }
        ]
    },
    {
        id: "gaming",
        name: "Gaming",
        links: [
            {
                id: "steam",
                name: "Steam",
                url: "https://steamcommunity.com/id/pfolta/",
                icon: faSteamSquare
            },
            {
                id: "duolingo",
                name: "Duolingo",
                url: "https://www.duolingo.com/profile/peterfolta"
            },
            {
                id: "jetpunk",
                name: "JetPunk",
                url: "https://www.jetpunk.com/users/pfolta"
            }
        ]
    }
];

export default profiles;
