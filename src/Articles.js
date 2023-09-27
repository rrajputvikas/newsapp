const articles = [
  {
    source: {
      id: "nbc-news",
      name: "NBC News",
    },
    author: "The Associated Press, David K. Li, Brittany Kubicko",
    title:
      "Judge drops murder charge against Philadelphia police officer who shot driver during traffic stop - NBC News",
    description:
      "A judge on Tuesday dismissed all charges, including a murder allegation, against Mark Dial, the Philadelphia officer accused of killing motorist, Eddie Irizarry, last month.",
    url: "https://www.nbcnews.com/news/us-news/judge-drops-murder-charge-philadelphia-police-officer-shot-driver-traf-rcna117395",
    urlToImage:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-09/230926-philadelphia-police-mark-dial-mn-1200-c6a40b.jpg",
    publishedAt: "2023-09-26T16:36:31Z",
    content:
      "A judge on Tuesday dismissed all charges, including murder, against the Philadelphia police officer who had been accused of wrongfully killing a motorist last month.\r\nMark Dial had pulled over 27-yea\u2026 [+2146 chars]",
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: "USA TODAY",
    title:
      "Ukraine, Russia war live updates: EU targets X for 'disinformation' - USA TODAY",
    description: null,
    url: "https://www.usatoday.com/story/news/world/ukraine/2023/09/26/ukraine-russia-war-live-updates/70968159007/",
    urlToImage: null,
    publishedAt: "2023-09-26T16:30:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Lauren Feiner, Annie Palmer",
    title: "FTC and 17 states sue Amazon on antitrust charges - CNBC",
    description:
      'The lawsuit is a major milestone for FTC Chair Lina Khan, who rose to prominence for her 2017 Yale Law Journal note, "Amazon\'s Antitrust Paradox."',
    url: "https://www.cnbc.com/2023/09/26/ftc-and-17-states-sue-amazon-on-antitrust-charges.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107159164-1669831872804-gettyimages-1445795074-img_0531_28a51d8a-76e6-41a2-92eb-7471fc68ef28.jpeg?v=1695744240&w=1920&h=1080",
    publishedAt: "2023-09-26T16:04:00Z",
    content:
      "The Federal Trade Commission has filed its long-anticipated antitrust lawsuit against Amazon.\r\nIn a sweeping complaint filed in federal court in Seattle on Tuesday, the FTC and attorneys general from\u2026 [+6906 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Charles Pulliam-Moore",
    title:
      "The Creator retreads familiar AI panic territory to stunningly inert effect - The Verge",
    description:
      "20th Century Studios\u2019 The Creator \u2014 out September 29th from Gareth Edwards \u2014 is visually muscular, but the movie plays like an unfocused rehash of AI panic fears.",
    url: "https://www.theverge.com/23889089/the-creator-movie-review-gareth-edwards",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/BdnfCdJ8sBZBVJ0CqdOj6xakXbM=/0x0:8154x6115/1200x628/filters:focal(4074x3034:4075x3035)/cdn.vox-cdn.com/uploads/chorus_asset/file/24950839/TL_00318_R.jpeg",
    publishedAt: "2023-09-26T16:00:00Z",
    content:
      "Gareth Edwards new dystopian sci-fi epic is a gorgeous morass of AI doomerism thats lacking in the way of novel ideas.\r\nByCharles Pulliam-Moore, a reporter focusing on film, TV, and pop culture. Befo\u2026 [+6096 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Clare Foran, Morgan Rimmer, Kristin Wilson, Haley Talbot",
    title: "House and Senate on collision course as shutdown nears - CNN",
    description:
      "With just five days to go, the House and Senate are on a collision course as a government shutdown approaches.",
    url: "https://www.cnn.com/2023/09/26/politics/mccarthy-government-shutdown-latest/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230914112926-02-kevin-mccarthy-091423.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-09-26T15:55:00Z",
    content:
      "With just five days to go, the House and Senate are on a collision course as a government shutdown approaches. \r\nThe Senate is working to negotiate a stopgap measure on a bipartisan basis but theres \u2026 [+4878 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Lauren del Valle",
    title: "JPMorgan pays $75 million to settle sex-trafficking lawsuit - CNN",
    description:
      "JPMorgan Chase has reached a settlement with the US Virgin Islands over a lawsuit alleging the bank enabled Jeffrey Epstein\u2019s sex-trafficking crimes.",
    url: "https://www.cnn.com/2023/09/26/business/jpmorgan-jeffrey-epstein-us-virgin-islands/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230926100729-jpmorgan-chase-headquarters-0526.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-09-26T15:52:00Z",
    content:
      "JPMorgan Chase has reached a settlement with the US Virgin Islands over a lawsuit alleging the bank enabled Jeffrey Epsteins sex-trafficking crimes. \r\nThe settlement includes significant commitments \u2026 [+1809 chars]",
  },
  {
    source: {
      id: "nbc-news",
      name: "NBC News",
    },
    author: "Lawrence Hurley",
    title:
      "Supreme Court rejects Alabama\u2019s bid to use congressional map with just one majority-Black district - NBC News",
    description:
      "The Supreme Court rejected Alabama's bid to use a congressional map that includes one majority-Black district.",
    url: "https://www.nbcnews.com/politics/supreme-court/supreme-court-rejects-alabamas-bid-use-congressional-map-just-one-majo-rcna105688",
    urlToImage:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-09/230919-alabama-voting-mn-1415-17effb.jpg",
    publishedAt: "2023-09-26T15:25:22Z",
    content:
      "WASHINGTON The Supreme Court on Tuesday handed a defeat to Alabama Republicans for the second time in three months, rejecting their latest attempt to use a congressional map that includes only one ma\u2026 [+3805 chars]",
  },
  {
    source: {
      id: null,
      name: "NPR",
    },
    author: "",
    title: "Senate Democrats to Bob Menendez: Resign - NPR",
    description:
      "Democrats are abandoning New Jersey Sen. Bob Menendez in the wake of his federal indictment in a corruption scheme involving his wife and local businessmen.",
    url: "https://www.npr.org/2023/09/26/1201727844/senate-democrats-to-bob-menendez-resign",
    urlToImage:
      "https://media.npr.org/assets/img/2023/09/26/gettyimages-1239075546_wide-d5e9435332c9530acfb91fa63bc0269c508c7594-s1400-c100.jpg",
    publishedAt: "2023-09-26T15:04:23Z",
    content:
      "A growing number of Senate Democrats are calling for the resignation of Sen. Bob Menendez, R-NJ, following his indictment on corruption charges.\r\nDrew Angerer/Getty Images\r\nA growing number of Senate\u2026 [+3474 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Stefan Sykes",
    title:
      "'Taylor Swift: The Eras Tour\u2019 concert film set for global theatrical release - CNBC",
    description:
      "Taylor Swift's highly anticipated The Eras Tour concert film will expand beyond North America for a worldwide premiere date next month.",
    url: "https://www.cnbc.com/2023/09/26/taylor-swifts-the-eras-tour-concert-film-set-for-global-theatrical-release.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107278486-1690547921244-gettyimages-1564524171-haywardphoto262531_amowakrl_zvbili5f.jpeg?v=1695743136&w=1920&h=1080",
    publishedAt: "2023-09-26T15:03:08Z",
    content:
      "Taylor Swift's highly anticipated concert film is getting a global release.\r\nThe pop superstar's upcoming movie, which chronicles her record-breaking and economy-boosting The Eras Tour, was slated to\u2026 [+1770 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Devlin Barrett",
    title: "Hunter Biden sues Rudy Giuliani over laptop - The Washington Post",
    description:
      "The president\u2019s son is suing Giuliani and lawyer Bob Costello over their alleged misuse of Hunter Biden\u2019s computer data.",
    url: "https://www.washingtonpost.com/national-security/2023/09/26/hunter-biden-lawsuit-giuliani-laptop/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7XONZORHICLG7FZN3EYNLLTDBQ_size-normalized.jpg&w=1440",
    publishedAt: "2023-09-26T14:51:00Z",
    content:
      "Comment on this story\r\nComment\r\nHunter Biden has filed a lawsuit against Rudy Giuliani and Giulianis former lawyer, Bob Costello, charging that the two men misused his personal computer data the late\u2026 [+2225 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      '"Few Nations Setting The Agenda Won\'t Go Unchallenged": S Jaishankar At UN - NDTV',
    description:
      "Making a strong pitch for India's inclusion as a permanent member of the United Nations Security Council, External Affairs Minister S Jaishankar has said that the days when a few nations set the agenda and expected others to fall in line are over.",
    url: "https://www.ndtv.com/india-news/few-nations-setting-the-agenda-wont-go-unchallenged-s-jaishankar-at-un-4425899",
    urlToImage:
      "https://c.ndtvimg.com/2023-09/bvqh6e9g_s-jaishankar_625x300_24_September_23.jpg",
    publishedAt: "2023-09-26T14:50:38Z",
    content:
      "Mr Jaishankar called for making the security council contemporary.\r\nNew Delhi: Making a strong pitch for India's inclusion as a permanent member of the United Nations Security Council, External Affai\u2026 [+2714 chars]",
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: "Adrianna Rodriguez",
    title:
      "RSV vaccines for baby, pregnancy: What to get this season and when - USA TODAY",
    description:
      "Pregnant people have two shot options this RSV season: The maternal vaccine is given during pregnancy and the infant shot is given after birth.",
    url: "https://www.usatoday.com/story/news/health/2023/09/26/rsv-vaccines-for-baby-pregnancy/70960060007/",
    urlToImage:
      "https://www.usatoday.com/gcdn/presto/2023/01/12/USAT/060eeb6c-f3be-4830-b563-7cdc5896307c-GettyImages-1323431279.jpg?crop=2146,1207,x0,y189&width=2146&height=1207&format=pjpg&auto=webp",
    publishedAt: "2023-09-26T14:39:17Z",
    content:
      "On Friday, the Centers for Disease Control and Prevention recommended a vaccine for people in late pregnancy that will protect their babies from respiratory syncytial virus, or RSV, after birth.\r\nLas\u2026 [+4632 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Kevin Breuninger",
    title:
      "Trump blasts special counsel's gag order request in federal election case - CNBC",
    description:
      "Lawyers for former President Donald Trump accused the Biden administration of trying to muzzle its main opponent through the proposed special counsel gag order.",
    url: "https://www.cnbc.com/2023/09/26/trump-blasts-special-counsel-gag-order-bid-in-january-6-election-case-.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107301922-16949073552023-09-16t003401z_750581729_rc2893ahg424_rtrmadp_0_usa-election-republicans.jpeg?v=1695737995&w=1920&h=1080",
    publishedAt: "2023-09-26T14:19:55Z",
    content:
      'Attorneys for Donald Trump urged a judge not to impose a partial gag order on the former president in his federal election interference case, claiming that prosecutors are trying to "unconstitutional\u2026 [+3687 chars]',
  },
  {
    source: {
      id: null,
      name: "NBCSports.com",
    },
    author: "Josh Alper",
    title:
      'Sean McDermott: Dolphins offensive schematics "almost revolutionary" - NBC Sports',
    description:
      "The Bills defense forced five turnovers and had nine sacks in Sunday's rout of the Commanders, but there wasn't much time for head coach Sean McDermott and his staff to enjoy that performance before they turned their attention to Week Four.",
    url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/sean-mcdermott-dolphins-offensive-schematics-almost-revolutionary",
    urlToImage:
      "https://nbcsports.brightspotcdn.com/dims4/default/7197c1e/2147483647/strip/true/crop/5003x2814+0+261/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F91%2F41%2F2e49eea34c6fb9760071397e31c1%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1700518709",
    publishedAt: "2023-09-26T14:18:44Z",
    content:
      "The Bills defense forced five turnovers and had nine sacks in Sundays rout of the Commanders, but there wasnt much time for head coach Sean McDermott and his staff to enjoy that performance before th\u2026 [+1294 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Amy Woodyatt",
    title:
      "New \u2018supercontinent\u2019 could wipe out humans and make Earth uninhabitable, study suggests - CNN",
    description:
      "The formation of a new \u201Csupercontinent\u201D could wipe out humans and all other mammals still alive in 250 million years, researchers have predicted.",
    url: "https://www.cnn.com/2023/09/26/world/supercontinent-earth-intl-scli-climate-scn/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230926122548-01-tectonic-event-bristol-study.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-09-26T14:15:00Z",
    content:
      "The formation of a new supercontinent could wipe out humans and all other mammals still alive in 250 million years, researchers have predicted.\r\nUsing the first-ever supercomputer climate models of t\u2026 [+3713 chars]",
  },
  {
    source: {
      id: null,
      name: "CBS Sports",
    },
    author: "",
    title:
      "Jalen Hurts, Jason Kelce among multiple Eagles who played with flu-like symptoms in Monday night win - CBS Sports",
    description:
      "Philadelphia defeated the Bucs despite several players feeling under the weather",
    url: "https://www.cbssports.com/nfl/news/jalen-hurts-jason-kelce-among-multiple-eagles-who-played-with-flu-like-symptoms-in-monday-night-win/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2023/09/26/732cb480-55a2-41b0-8648-2d3a1ddd9e3f/thumbnail/1200x675/726e4b996eee7391f4df3f418f54361a/hurts.jpg",
    publishedAt: "2023-09-26T13:55:58Z",
    content:
      "Philadelphia Eagles quarterback Jalen Hurts is used to powering through opposing defenses like he did on Monday night to score his 29th career rushing touchdown from a yard out, the most in NFL histo\u2026 [+2066 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Sarah Perez",
    title:
      "Google Podcasts to shut down in 2024 with listeners migrated to YouTube Music - TechCrunch",
    description:
      "Google announced this morning it will be shutting down its Google Podcasts app later in 2024 as part of its broader transition to move its streaming",
    url: "https://techcrunch.com/2023/09/26/google-podcasts-to-shut-down-in-2024-with-listeners-migrated-to-youtube-music/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-1079623010.jpg?resize=1200,799",
    publishedAt: "2023-09-26T13:45:14Z",
    content:
      "Google announced this morning it will be shutting down its Google Podcasts app later in 2024 as part of its broader transition to move its streaming listeners over to YouTube Music. The company earli\u2026 [+3024 chars]",
  },
  {
    source: {
      id: "axios",
      name: "Axios",
    },
    author: "Axios",
    title: "SAG-AFTRA authorizes strike against video game companies - Axios",
    description: null,
    url: "https://www.axios.com/2023/09/26/video-game-actors-strike-sag-aftra",
    urlToImage: null,
    publishedAt: "2023-09-26T13:36:09Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "NBCSports.com",
    },
    author: "Mike Florio",
    title:
      "Taylor Swift's presence at Chiefs game boosts Travis Kelce, NFL - NBC Sports",
    description:
      "After a couple of weeks of scattered rumors of a budding romance between Chiefs tight end Travis Kelce and Taylor Swift, she showed up at a Chiefs game on Sunday.",
    url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/taylor-swifts-presence-at-chiefs-game-boosts-travis-kelce-nfl",
    urlToImage:
      "https://nbcsports.brightspotcdn.com/dims4/default/0e16425/2147483647/strip/true/crop/1920x1080+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fhdliveextra-a.akamaihd.net%2FHD%2Fimage_sports%2FNBCU_Sports_Group_-_nbcsports%2F402%2F7%2Fnbc_pft_kelceswift_230926.jpg",
    publishedAt: "2023-09-26T13:35:35Z",
    content:
      "After a couple of weeks of scattered rumors of a budding romance between Chiefs tight end Travis Kelce and Taylor Swift, she showed up at a Chiefs game on Sunday. And everyone basically lost their mi\u2026 [+1128 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Post",
    },
    author: "Brooke Steinberg",
    title:
      "Risks of long COVID have been 'distorted' due to 'flawed research': study - New York Post ",
    description:
      "The \u201Cflaws\u201D have led to consequences such as increased public anxiety, misdiagnoses, increased healthcare spending and a \u201Cdiversion of funds\u201D from those who are actually suf\u2026",
    url: "https://nypost.com/2023/09/26/long-covid-risks-distorted-due-to-flawed-research-study/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000045416925.jpg?quality=75&strip=all&w=1024",
    publishedAt: "2023-09-26T13:20:00Z",
    content:
      "The risks of long COVID have been \u201Cdistorted\u201D due to a flawed body of research, according to experts.\r\nScientists from the US, UK and Denmark are pointing to overly broad definitions and a lack of co\u2026 [+3590 chars]",
  },
];

export default articles;