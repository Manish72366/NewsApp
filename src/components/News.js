import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
// The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array
//Looping through an array in JSX to display NewsItems from state
// Now this news will become old after some time so we are not going to do read news by this way we are going to use fetch API to fetch latest news.
export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "Hollywood Reporter"
      },
      "author": "Pamela McClintock",
      "title": "Box Office: ‘Haunted Mansion’ Spooked, ‘Barbie’ Scores Record $93M Second Weekend - Hollywood Reporter",
      "description": "'Haunted Mansion' has started off with a lackluster $24.2 million in another summer bummer for Disney. Elsewhere, 'Oppenheimer' earned a stellar $46.2 million in its sophomore outing.",
      "url": "https://www.hollywoodreporter.com/movies/movie-news/haunted-mansion-box-office-opening-haunted-mansion-1235547428/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Haunted-Mansion-Barbie-and-Oppenheimer-Split-H-2023.jpg?w=1024",
      "publishedAt": "2023-07-30T16:30:00Z",
      "content": "Barbie really is a pink unicorn. \r\nThe movie earned an estimated $93 million in its sophomore outing at the North American box office — one of the best second weekends of all time and the best second… [+5745 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Sophie Tanno",
      "title": "Italy minister says decision to join flagship Chinese scheme ‘wicked’ - CNN",
      "description": "Italy’s defense minister called his country’s decision to join a flagship Chinese infrastructure scheme “wicked,” as the government weighs up whether continue as part of the scheme.",
      "url": "https://www.cnn.com/2023/07/30/europe/italy-china-belt-and-road-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230730101840-guido-crosetto-061923.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-30T15:42:00Z",
      "content": "Italys defense minister called his countrys decision to join a flagship Chinese infrastructure scheme wicked, as the government weighs up whether continue as part of the scheme.\r\nIn an interview with… [+1731 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "The Associated Press",
      "title": "Ukraine again reported bringing war deep into Russia with attacks on Moscow and border region - The Associated Press",
      "description": "Ukraine has brought the war far from the front line into the heart of Russia again in drone penetrations Russian authorities said damaged two office buildings a few miles from the Kremlin. Also attacked was a pig breeding complex on the countries’ border. The…",
      "url": "https://apnews.com/article/russia-ukraine-war-drone-attack-moscow-4801c01e9f07ac882ab28d33666bf8d0",
      "urlToImage": "https://dims.apnews.com/dims4/default/53a0378/2147483647/strip/true/crop/6267x3525+0+326/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdb%2F1c%2F4b1e49103bbef3137e0756a99b56%2F4f743e754f59481e86a322a347047446",
      "publishedAt": "2023-07-30T15:27:00Z",
      "content": "Ukraine brought the war far from the front line into the heart of Russia again Sunday in drone penetrations that Russian authorities said damaged two office buildings a few miles (kilometers) from th… [+4516 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "Astronomers Shocked by “Weird” Phenomena: Hubble Sees Evaporating Planet Getting the Hiccups - SciTechDaily",
      "description": "Rambunctious Star Pummels Young World with Torrential Winds and Blistering Radiation Life around an ill-tempered red dwarf star is no fun for accompanying newborn planets. Call it a baptism of fire. Entangled magnetic fields cause a red dwarf to spit out \"sup…",
      "url": "https://scitechdaily.com/astronomers-shocked-by-weird-phenomena-hubble-sees-evaporating-planet-getting-the-hiccups/",
      "urlToImage": "https://scitechdaily.com/images/Planet-Red-Dwarf-Star-Concept-Art.jpg",
      "publishedAt": "2023-07-30T15:10:15Z",
      "content": "The exoplanet AU Mic b, in a young planetary system orbiting red dwarf star AU Microscopii, displays unpredictable atmospheric loss. Astronomers are studying this peculiar phenomenon to understand pl… [+4637 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Jacob Roach",
      "title": "It’s time to stop trying to play games without an SSD - Digital Trends",
      "description": "Ratchet and Clank Rift Apart now proves it. Your gaming PC absolutely needs an SSD installed in it.",
      "url": "http://www.digitaltrends.com/computing/stop-trying-to-play-games-without-an-ssd/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/07/ratchet-and-clank-respec-featured.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2023-07-30T15:00:38Z",
      "content": "PlayStation\r\nEveryone owes Sony an apology. When the PS5 was announced and Ratchet and Clank: Rift Apart was shown off as exclusive for the platform, there was a barrage of finger-pointing at Sony ov… [+6242 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "Terence Crawford vs. Errol Spence Jr. results, takeaways: Bud's masterclass leaves no need for a rematch - CBS Sports",
      "description": "While Spence is expected to exercise his rematch clause, he should reconsider given how one-sided the action was on Saturday",
      "url": "https://www.cbssports.com/boxing/news/terence-crawford-vs-errol-spence-jr-results-takeaways-buds-masterclass-leaves-no-need-for-a-rematch/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/07/30/a3ab85c8-5d65-4ace-aad7-4fd4956632cd/thumbnail/1200x675/9a6343cbc951c80e8bd76e50c7997b15/terence-crawford-spence-postfight.jpg",
      "publishedAt": "2023-07-30T14:36:00Z",
      "content": "After years of talk and anticipation, Terence Crawford battered, blooded and bruised Errol Spence Jr. on Saturday to become the first undisputed welterweight champion of the four-belt era. Anticipate… [+8286 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Reuters",
      "title": "Banks vote to limit accounting of emissions in bond and stock sales - New York Post ",
      "description": "The majority of banks comprising an industry working group backed a plan earlier this month to exclude two-thirds of the emissions linked to their capital markets businesses from being attributed t…",
      "url": "https://nypost.com/2023/07/30/banks-vote-to-limit-accounting-of-emissions-in-bond-and-stock-sales/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/banks-carbon-emissions-comp.jpg?quality=75&strip=all&1690711702&w=1024",
      "publishedAt": "2023-07-30T14:15:00Z",
      "content": "Banks working to develop global standards on accounting for carbon emissions in bond or stock sale underwriting have voted to exclude most of these emissions from their own carbon footprint, three pe… [+4526 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Sophia Saifi, Allegra Goodwin",
      "title": "At least 39 dead after blast rips through political gathering in Pakistan - CNN",
      "description": "At least 39 people died and over 120 were injured after a blast tore through a political convention organized by an Islamist party in northwestern Pakistan, police said.",
      "url": "https://www.cnn.com/2023/07/30/asia/pakistan-blast-bajaur-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230730093536-01-pakistan-blast-073023.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-30T14:13:00Z",
      "content": "At least 39 people died and over 120 were injured after a blast tore through a political convention organized by an Islamist party in northwestern Pakistan, police said. \r\nThe Inspector General of Po… [+1049 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Guardian staff reporter",
      "title": "Judge blocks Arkansas law allowing librarians to be charged over ‘harmful’ books - The Guardian US",
      "description": "Decision comes as lawmakers in conservative states are pushing for measures making it easier to ban or restrict access to books",
      "url": "https://www.theguardian.com/us-news/2023/jul/30/arkansas-judge-blocks-law-targeting-librarians",
      "urlToImage": "https://i.guim.co.uk/img/media/f04def2a571b23bb763255927adbed3cd36e5b7a/0_400_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3238561c23644e3d4adaefc1a9b9830a",
      "publishedAt": "2023-07-30T14:02:00Z",
      "content": "Arkansas is temporarily blocked from enforcing a law that would have allowed criminal charges against librarians and booksellers for providing harmful materials to minors, a federal judge ruled on Sa… [+7802 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Cait Freda, Kristina Partsinevelos",
      "title": "The fight over a bill targeting credit card fees pits payment companies against retailers - CNBC",
      "description": "Bipartisan support for the Credit Card Competition Act has surged since it was introduced last year.",
      "url": "https://www.cnbc.com/2023/07/30/credit-card-fee-fight-pits-payment-companies-against-retailers.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107278752-1690573907129-gettyimages-1035471438-VISA_SETTLES.jpeg?v=1690725395&w=1920&h=1080",
      "publishedAt": "2023-07-30T13:56:35Z",
      "content": "A bipartisan push in Washington to clamp down on credit card fees is pitting retailers against network payment processors and both sides are working hard to gain the attention of consumers.\r\nThe Cred… [+8749 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBCSports.com"
      },
      "author": "Josh Alper",
      "title": "Danielle Hunter agrees to new one-year deal with Vikings - NBC Sports",
      "description": "Trade talk was replaced by news of a contract agreement on Sunday morning.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/danielle-hunter-agrees-to-new-one-year-deal-with-vikings",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/0856a24/2147483647/strip/true/crop/6000x3375+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2Fa3%2F14%2F455eb5a94f029a070bfe8d227d05%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1440703502",
      "publishedAt": "2023-07-30T13:10:24Z",
      "content": "Word on Saturday was that the Vikings were exploring trade options for Danielle Hunter, but things wound up taking a different turn with the edge rusher and hes set to remain in Minnesota for the 202… [+556 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Erin Blakemore",
      "title": "Alzheimer's, dementia patients end up in ERs more often, study says - The Washington Post",
      "description": "The ER is often not the best place to care for adults with dementia due to long wait times, unfamiliar staff and a potentially disorienting environment, the study's authors say.",
      "url": "https://www.washingtonpost.com/wellness/2023/07/30/dementia-alzheimers-emergency-room-visits/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5DDN7WXCXXYVPIUSTSMOQSHXMQ.jpg&w=1440",
      "publishedAt": "2023-07-30T13:00:00Z",
      "content": "Comment on this story\r\nComment\r\nOlder people with dementia seek care in the emergency room twice as often as their peers, a new analysis suggests leading to what researchers call potentially avoidabl… [+2487 chars]"
    },
    {
      "source": {
        "id": "independent",
        "name": "Independent"
      },
      "author": "Gustaf Kilander",
      "title": "Trump road tests election lies defence at rally, as his CNN 'Hitler' lawsuit fails – news - The Independent",
      "description": "Follow the latest news in Trumpworld",
      "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-rally-erie-latest-news-today-b2384420.html",
      "urlToImage": "https://static.independent.co.uk/2023/07/30/00/f787a96be49c45e282536775647f5932.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2023-07-30T12:30:52Z",
      "content": "Trump turns indictments into core message to return to White House\r\nTrump remains the dominant early frontrunner for the Republican nomination and has only seen his lead grow as the charges have moun… [+1060 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nolanwritin.com"
      },
      "author": "Stephen Francis",
      "title": "Texas Rangers GM Chris Young is likely not finished after Max Scherzer trade - Nolan Writin'",
      "description": "As the 2023 MLB trade deadline approaches, Chris Young and the Texas Rangers have made some big moves, but they may not be done yet",
      "url": "https://nolanwritin.com/posts/texas-rangers-gm-chris-young-is-likely-not-finished-after-max-scherzer-trade-01h6jj530kts",
      "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_8139,h_4578,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/132/01h6jjef8v9bp16fajmj.jpg",
      "publishedAt": "2023-07-30T12:30:19Z",
      "content": "The Texas Rangers made their biggest trade deadline deal in ... well, about a month by snagging New York Mets All-Star Max Scherzer late Saturday afternoon. And while it certainly fills a huge need i… [+4891 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "African leaders leave Russia summit without grain deal or path to end the war in Ukraine - POLITICO",
      "description": "Russian President Vladimir Putin praised Africa as a rising center of power in the world.",
      "url": "https://www.politico.com/news/2023/07/30/africa-russia-summit-grain-deal-war-ukraine-00108892",
      "urlToImage": "https://static.politico.com/55/05/b2cdba704874a6b65dcbea986ba5/russia-africa-summit-45149.jpg",
      "publishedAt": "2023-07-30T12:29:24Z",
      "content": "Fewer than 20 of Africas 54 heads of state or government attended the Russia summit, while 43 attended the previous gathering in 2019, reflecting concerns over Russias invasion of Ukraine even as Mos… [+1602 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Mattha Busby",
      "title": "Elon Musk reinstates Kanye West’s Twitter account after ban - The Guardian",
      "description": "Social media platform rebranded as X lifts ban on rapper-producer imposed after swastika tweet",
      "url": "https://www.theguardian.com/music/2023/jul/30/elon-musk-reinstates-kanye-west-twitter-account-after-ban",
      "urlToImage": "https://i.guim.co.uk/img/media/b828edd850d4c75131eaaf01f6403fc79fef90c1/528_88_2425_1455/master/2425.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=06a040d1bdb009dff893d9eadb5a0769",
      "publishedAt": "2023-07-30T12:13:00Z",
      "content": "Kanye Wests account on the social media platform X, formerly known as Twitter, has been reinstated almost eight months after he tweeted an image of a swastika blended with a star of David.\r\nThe rappe… [+1957 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Andrew Osborn",
      "title": "Russia's Medvedev: We'd have to use a nuclear weapon if Ukrainian offensive was a success - Reuters",
      "description": "Former Russian President Dmitry Medvedev, who has sometimes raised the spectre of a nuclear conflict over Ukraine, said on Sunday that Moscow would have to use a nuclear weapon if Kyiv's ongoing counter-offensive was a success.",
      "url": "https://www.reuters.com/world/europe/russias-medvedev-wed-have-use-nuclear-weapon-if-ukrainian-offensive-was-success-2023-07-30/",
      "urlToImage": "https://www.reuters.com/resizer/6kVHAxwCzzC-1-KQMZ8ejwB2j2M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2O2L4KFCOJMVDADS6ETSGIKRF4.jpg",
      "publishedAt": "2023-07-30T12:08:00Z",
      "content": "MOSCOW, July 30 (Reuters) - Former Russian President Dmitry Medvedev, who has sometimes raised the spectre of a nuclear conflict over Ukraine, said on Sunday that Moscow would have to use a nuclear w… [+2317 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Niger coup leader warns regional and Western powers against military intervention - BBC",
      "description": "West African leaders set a seven-day deadline for the junta to reinstate the ousted president.",
      "url": "https://www.bbc.com/news/world-africa-66353284",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10C0/production/_130588240_47f0379e40331c11f7245cf9704fc450eebd83650_0_4708_32821000x697.jpg",
      "publishedAt": "2023-07-30T11:49:05Z",
      "content": "West African leaders have threatened military action against Niger's military junta after it took power in a coup last week\r\nThe leaders gave the junta seven days to reinstate President Mohamed Bazou… [+3051 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Yellow to face 'complete shutdown' in coming days, Teamsters warn in letter - KSDK News",
      "description": "Union workers fear that Yellow Freight may face a \"complete shutdown\" within a couple of days, a new letter revealed.The International Brotherhood of Teamste...",
      "url": "https://www.youtube.com/watch?v=ZFeomoMPYeo",
      "urlToImage": "https://i.ytimg.com/vi/ZFeomoMPYeo/hqdefault.jpg",
      "publishedAt": "2023-07-30T11:41:06Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Cardi B THROWS Mic At Fan Who Hurls Drink At Her On Stage - On Demand News",
      "description": "'Cardi B THROWS Mic At Fan Who Hurls Drink At Her On Stage'Cardi B has made headlines once again after footage circulating online shows the rapper hurling a ...",
      "url": "https://www.youtube.com/watch?v=n6y0Z6XIhD4",
      "urlToImage": "https://i.ytimg.com/vi/n6y0Z6XIhD4/maxresdefault.jpg",
      "publishedAt": "2023-07-30T11:38:49Z",
      "content": null
    }
  
  ]
  
  // every time a newsitem is made inside the news.js this constructor calls.
  constructor(){
    super();// without this webpage will show you an error.
    console.log("Hello i am a constructor");
    // this below is the state in the class.
    this.state = {
       articles : this.articles,
       loading : false
    }
  }
  // {this.state.articles.map((ele) => {console.log(ele)})}  this is the way in which you can get all the object from an array so each element is an object.
  render() {
    return (
      <div className="container my-3">
        <h2  style={{color : 'darkgreen'}}>NewsTiger - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map( (ele)=>
          {
            return <div className="col-md-4 my-3" key = {ele.url}> {/* col-md-4 means medium devices mai ye 4 column lega maximum a key should be return as unique id */}
            <NewsItem title={ele.title.slice(0,30)} description={ele.description.slice(0,80)} urlToImage = {ele.urlToImage} newsUrl = {ele.url}/>
           </div>
          })}
          
        </div>
      </div>
    );
  }
}

export default News;
