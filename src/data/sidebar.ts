import {
  Home,
  Repeat,
  Clapperboard,
  Library,
  History,
  PlaySquare,
  Clock,
  ListVideo,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react";
import { LargeSideBarSections } from "../utils/types";

export const subscriptions = [
  {
    channelName: "Fireship",
    id: "Fireship",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Caleb Curry",
    id: "CalebCurry",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Web Dev Simplified",
    id: "WebDevSimplified",
    imgUrl:
      "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Kevin Powell",
    id: "KevinPowell",
    imgUrl:
      "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Sonny Sangha",
    id: "SonnySangha",
    imgUrl:
      "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Traversy Media",
    id: "TraversyMedia",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj-mo",
  },
];

export const playlists = [
  { id: "1", name: "Frontend & Backend" },
  { id: "2", name: "Favorites" },
  { id: "3", name: "React" },
  { id: "4", name: "Non-Dev" },
  { id: "5", name: "TypeScript" },
];

export const SMALL_SIDE_BAR_ITEMS = [
  { Icon: Home, title: "Home", url: "/" },
  { Icon: Repeat, title: "Shorts", url: "/shorts" },
  { Icon: Clapperboard, title: "Subscriptions", url: "/subscriptions" },
  { Icon: Library, title: "Library", url: "/library" },
];

export const LARGE_SIDE_BAR_SECTIONS: LargeSideBarSections[] = [
  {
    id: 1,
    title: "",
    items: [
      { IconOrImgUrl: Home, title: "Home", url: "/", isActive: true },
      {
        IconOrImgUrl: Clapperboard,
        title: "Subscriptions",
        url: "/subscriptions",
        isActive: false,
      },
    ],
    visibleItemCount: 2,
  },
  {
    id: 2,
    title: "",
    items: [
      {
        IconOrImgUrl: Library,
        title: "Library",
        url: "/library",
        isActive: false,
      },
      {
        IconOrImgUrl: History,
        title: "History",
        url: "/history",
        isActive: false,
      },
      {
        IconOrImgUrl: PlaySquare,
        title: "Your Videos",
        url: "/your-videos",
        isActive: false,
      },
      {
        IconOrImgUrl: Clock,
        title: "Watch Later",
        url: "/playlist?list=WL",
        isActive: false,
      },
      ...playlists.map((playlist) => ({
        id: playlist.id,
        IconOrImgUrl: ListVideo,
        title: playlist.name,
        url: `/playlist?list=${playlist.id}`,
      })),
    ],
    visibleItemCount: 5,
  },
  {
    id: 3,
    title: "Subscriptions",
    items: [
      ...subscriptions.map((subscription) => ({
        id: subscription.id,
        IconOrImgUrl: subscription.imgUrl,
        title: subscription.channelName,
        url: `/@${subscription.id}`,
      })),
    ],
    visibleItemCount: 5,
  },
  {
    id: 4,
    title: "Explore",
    items: [
      {
        IconOrImgUrl: Flame,
        title: "Trending",
        url: "/trending",
        isActive: false,
      },
      {
        IconOrImgUrl: ShoppingBag,
        title: "Shopping",
        url: "/shopping",
        isActive: false,
      },
      { IconOrImgUrl: Music2, title: "Music", url: "/music", isActive: false },
      {
        IconOrImgUrl: Film,
        title: "Movies & TV",
        url: "/movies-tv",
        isActive: false,
      },
      { IconOrImgUrl: Radio, title: "Live", url: "/live", isActive: false },
      {
        IconOrImgUrl: Gamepad2,
        title: "Gaming",
        url: "/gaming",
        isActive: false,
      },
      { IconOrImgUrl: Newspaper, title: "News", url: "/news", isActive: false },
      {
        IconOrImgUrl: Trophy,
        title: "Sports",
        url: "/sports",
        isActive: false,
      },
      {
        IconOrImgUrl: Lightbulb,
        title: "Learning",
        url: "/learning",
        isActive: false,
      },
      {
        IconOrImgUrl: Shirt,
        title: "Fashion & Beauty",
        url: "/fashion-beauty",
        isActive: false,
      },
      {
        IconOrImgUrl: Podcast,
        title: "Podcasts",
        url: "/podcasts",
        isActive: false,
      },
    ],
    visibleItemCount: 5,
  },
];
