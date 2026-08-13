export type TeamMember = {
  slug: string;
  name: string;
  title?: string;
  photo?: string;
  // Short one-line teaser shown on the About page grid card - kept tight so
  // it never needs mid-sentence truncation. The full `bio` below is
  // unabridged and lives on the member's /team/[slug] page.
  summary?: string;
  bio?: string[];
};

// Photo/bio status per the client's 2026 "Meet the Team" brief:
//  - Adam Aderholt: photo updated to Adam_about.png (About page team card
//    and his /team/adam-aderholt detail page only). The Contact page's
//    "talking directly to Adam" banner uses a separate photo field
//    (about.photo in data/about.ts, still adam-aderholt.jpg) and is
//    intentionally untouched.
//  - Shane Aderholt: bio and photo supplied (Shane.png).
//  - Billy Feltman: bio and photo supplied (billy.jpg).
//  - Neal Hargle: bio supplied, photo supplied (neal.jpg).
//  - Matthew Sheffield: bio and photo supplied (matthew-sheffield.jpg).
//  - Jerry Sanford: bio and photo supplied (jerry.jpg).
export const team: TeamMember[] = [
  {
    slug: "adam-aderholt",
    name: "Adam Aderholt",
    title: "Owner & Founder",
    photo: "/images/team/Adam_about.png",
    bio: [
      "Adam Aderholt is the owner and founder of High Ground Land Solutions and has spent nearly two decades working with land and the people who own it. His experience in land brokerage, property development, wildlife and habitat management, and hands-on land improvement gives him a unique perspective—not only on what land is worth, but on what it can become.",
      "An Alabama native, Adam grew up with a passion for the outdoors and an appreciation for the land. He earned a Bachelor of Science in Business Administration from The Citadel before commissioning into the United States Army, where he served in various roles throughout the United States and abroad. Following his military service, Adam worked across several business sectors, including serving as managing member of a business valuation firm, before ultimately focusing his career on land.",
      "Throughout his career, Adam has worked with commercial, agricultural, recreational, timberland, and conservation properties and has helped landowners acquire, develop, improve, and manage properties throughout Alabama. He is a Certified Prescribed Burn Manager and a member of the Central Alabama Prescribed Burn Association. Adam also has additional experience in horticulture, site reclamation, pond management, wildlife habitat improvement, and property development. Adam is also a skilled heavy equipment operator, giving him firsthand knowledge of the work required to turn a plan for a property into a finished project.",
      "As a landowner himself, Adam understands that every property represents an investment of time, money, and often something much more personal. He understands the needs and expectations of landowners because he approaches his own property with many of the same goals—improving its function, productivity, wildlife habitat, value, and long-term enjoyment.",
      "Adam founded High Ground Land Solutions from the belief that understanding land goes far beyond buying and selling it. Every property has its own challenges, opportunities, and potential, and he enjoys working with landowners to develop a vision for their property and then helping bring that vision to life.",
      "Today, Adam remains actively involved in High Ground's projects, from planning and evaluating properties to operating equipment and working alongside the crew and the company's forestry and wildlife professionals. For Adam, the most rewarding part of the work is seeing a property improve over time and knowing those improvements will be enjoyed by the landowner, their family, and future generations.",
    ],
  },
  {
    slug: "shane-aderholt",
    name: "Shane Aderholt",
    photo: "/images/team/Shane.png",
    summary:
      "A certified welder and heavy equipment operator who grew up learning the land alongside his dad, Adam — now serving as a U.S. Army Infantryman.",
    bio: [
      "Long before High Ground Land Solutions had a name, Shane Aderholt was alongside his dad, Adam, learning the land and the value of a hard day's work. From riding along on equipment as a young boy to eventually operating it himself, Shane grew up around land, machinery, and the outdoors. What started as simply following Dad around became years of hands-on experience, and over time, Shane became Adam's right-hand man and an important part of the growth of High Ground Land Solutions.",
      "Shane is a certified welder and an accomplished heavy equipment operator with hands-on experience in land clearing, road construction, property improvement, and equipment maintenance and repair. He also serves as a torch man on High Ground's prescribed burn crew, where he has gained valuable experience using fire as a tool for land and wildlife habitat management. Whether operating equipment, welding and repairing something in the field, or working a fire line, Shane developed his skills by doing the work alongside his dad and even before there was a High Ground crew.",
      "In 2025, Shane made the decision to step away from his day-to-day role at High Ground to serve something greater than himself, enlisting in the United States Army. He currently serves as an Infantryman with the 25th Infantry Division, stationed in Hawaii.",
      "Although his military service has taken him far from Alabama, Shane will always be an important part of High Ground and its story. From a young boy riding alongside his dad to becoming a skilled tradesman and equipment operator—and now a soldier serving his country—Shane represents many of the values High Ground was built on: hard work, responsibility, service, and a respect for the land.",
    ],
  },
  {
    slug: "billy-feltman",
    name: "Billy Feltman",
    photo: "/images/team/billy.jpg",
    summary:
      "Five decades of hands-on experience in equipment, wells, and septic systems — clients call him “a magician on a bulldozer.”",
    bio: [
      "If experience had an encyclopedia, around High Ground we'd probably just call it Mr. Billy. A man of many talents and more than five decades of hands-on experience, Billy has built a reputation for being able to figure out just about anything involving land, equipment, water, or dirt. Some of our clients have even referred to him as “a magician on a bulldozer”—and anyone who has watched him work understands why.",
      "Mr. Billy began his career as a machine operator and mechanic in 1973 and started drilling wells in 1975, a trade he continues to this day. After decades of drilling throughout the area, there are few wells in the surrounding three counties that he either hasn't drilled himself or doesn't know something about. In the early 1990s, he expanded further into heavy equipment operation, and in 1999 he became certified to install septic systems. His ability to read terrain, understand soils and drainage, and know how to shape a piece of ground comes from a lifetime of actually doing the work.",
      "His experience isn't limited to equipment. Mr. Billy has also been a gas station and restaurant owner and, in more recent years, he and his better half opened Tyro Sports Grill. Somehow, through all of that, he has also found time to travel throughout North America hunting just about every kind of game imaginable. His lifetime spent outdoors gives him an appreciation for recreational and hunting properties that goes well beyond moving dirt.",
      "Mr. Billy has been part of the High Ground story since the beginning. In 2013, he teamed up with Adam on The Eagle's Nest, the project that ultimately planted the seed for what would become High Ground Land Solutions. Since then, his knowledge, steady hand, problem-solving ability, and old-school work ethic have made him an invaluable part of the team and a mentor to those working alongside him.",
      "And when Mr. Billy finally does take a little time away from a bulldozer, excavator, or well rig, there's a good chance you'll find him turning steaks at the restaurant—or trying his luck at the casino.",
    ],
  },
  {
    slug: "neal-hargle",
    name: "Neal Hargle",
    photo: "/images/team/neal.jpg",
    summary:
      "An Alabama Registered Forester and Certified Wildlife Biologist with more than 20 years of natural resource management experience.",
    bio: [
      "Neal Hargle is a resident of Tuscaloosa County in West Alabama and has more than 20 years of experience in natural resource management. He earned his B.S. in Forestry/Wildlife Management from Mississippi State University and his M.Ed. from Auburn University.",
      "Neal is an Alabama Registered Forester, Certified Wildlife Biologist, and Prescribed Burn Manager. He is also a member of the Central Alabama Prescribed Burn Association and is passionate about wildlife management, forestry, prescribed fire, and conservation.",
      "Outside of his professional career, Neal enjoys spending time outdoors and making memories with his soulmate, Gwynne Faile Hargle, and their daughter, Abigail Lee “Abby.” He also enjoys spending time with their dogs and horses and embracing the outdoors with his family.",
    ],
  },
  {
    slug: "matthew-sheffield",
    name: "Matthew Sheffield",
    photo: "/images/team/matthew-sheffield.jpg",
    summary:
      "A West Alabama native pursuing a degree in Forestry and Conservation Field Biology, bringing a former athlete's discipline to land management.",
    bio: [
      "Matthew Sheffield is a West Alabama native with a few years of hands-on experience in the land management field. He earned his Associate of Science degree from Bevill State Community College and is currently pursuing a degree in Forestry and Conservation Field Biology at the University of West Alabama.",
      "With a passion for forestry, wildlife management, conservation, and land stewardship, Matthew enjoys working in the field and gaining hands-on experience in natural resource management. As a former collegiate athlete, he brings the same discipline, work ethic, and dedication from athletics into his work in the land management field.",
      "Outside of his professional and academic pursuits, Matthew enjoys hunting, fishing, and spending time outdoors.",
    ],
  },
  {
    slug: "jerry-sanford",
    name: "Jerry Sanford",
    photo: "/images/team/jerry.jpg",
    summary:
      "A certified welder, chainsaw operator, and CDL holder — one of the most dependable, hardest-working hands on the crew.",
    bio: [
      "If there's one thing you need to know about Jerry, it's that he knows how to work. Dependable, skilled, and never afraid of a difficult job, Jerry is the kind of person you want beside you when there's work to be done. He is a certified welder, certified in chainsaw operations, and holds a Commercial Driver's License, making him a versatile and valuable member of the High Ground Land Solutions crew.",
      "Jerry is an exceptional sawyer and, in Adam's words, “the best chainsaw cutter man I've seen.” His skill with a saw, ability to work safely in challenging conditions, and understanding of how to approach difficult cutting situations make him an important part of High Ground's land clearing and property improvement work.",
      "He is also an experienced torch man on High Ground's prescribed burn crew. When it's time to put fire on the ground, there aren't many places Jerry won't take a drip torch. His willingness to work through difficult terrain and conditions, combined with his experience and respect for fire, makes him someone the crew can depend on when executing a prescribed burn.",
      "Above all, Jerry brings an old-fashioned work ethic to High Ground. He shows up, works hard, and does what it takes to get the job done right—and that makes him an important part of the High Ground team.",
    ],
  },
];
