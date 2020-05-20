import React, { useEffect } from "react";
import "./App.css";
import { NYTIMESSERVICE } from "./services/nyservice";
import Spinner from "./components/Loader";
import NyListItem from "./components/NyListItem";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import NoResults from "./components/InternalServorError";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import DetailNews from "./components/DetailNews";
import Button from "@material-ui/core/Button";
import FlipPage from "react-flip-page";

const App = () => {
  const content = [
    {
      title: "మహీంద్రా లాక్ డౌన్ ఆఫర్",
      abstract:
        "తెలంగాణ: వినియోగదారులను ఆకట్టుకునేలా,అమ్మకాలను పెంచుకునేందుకు మహీంద్రా వినూత్న పథకాలను ప్రవేశపెట్టింది.మహీంద్రా SUV కొనుగోలు చేసిన సంవత్సరం తర్వాత EMI రూపంలో డబ్బు చెల్లించే విధంగా ఆఫర్ ప్రకటించింది.100% ఆన్ రోడ్ ఫండింగ్ తో పాటు వ్యాపార వర్గాలను, సామాన్య ప్రజలను ఆశ్చర్యపరిచింది.",
      media: [
        {
          "media-metadata": [
            {
              video: false,
              url: require("./news_images/mahindra.jpeg")
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "వలసకార్మికుల కన్నీటి కష్టాలు",
      abstract:
        "తెలంగాణ: లాక్ డౌన్ వల్ల వలస కార్మికులు సొంత గూటికి వెళ్లే ప్రయత్నాలు చేస్తూనే ఉన్నారు.చిన్న,పెద్ద అనే తేడా లేకుండా నడకబాటలో ప్రయాణాన్ని కొనసాగిస్తున్నారు.ఉపాధి లేక తినడానికి తిండి లేక వారి కష్టాలు కన్నీళ్లతో నిండిపోయాయి.ప్రభుత్వం ఏర్పాటు చేసిన శ్రామిక్ రైళ్లలో స్థలం సరిపోక వందల కిలోమీటర్లు నడిచి వెళ్తూ ఉన్నారు.",
      media: [
        {
          "media-metadata": [
            {
              video: false,
              url: require("./news_images/news1.jpeg")
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "మెసేజ్ లింక్ లతో తస్మాత్ జాగ్రత్త.!",
      abstract:
        "తెలంగాణ: హైదరాబాద్ లో రెచ్చిపోతున్న సైబర్ నేరగాళ్లు. రీచార్జ్ లింకులు పంపిస్తూ లక్షలు మాయం చేస్తున్నారు. ఎల్బీనగర్ లోని ఓ ప్రభుత్వ ఉపాధ్యాయుడికి రీఛార్జి చేసుకోమని స్పామ్ లింక్ పంపగా దానిపై క్లిక్ చేసి paytm ఓపెన్ చేయగానే OTP హాక్ చేసి రూ'లక్షలు దోచేశారు.దీనిపై బాధితుడు పోలీసులకు ఫిర్యాదు చేశాడు.",
      media: [
        {
          "media-metadata": [
            {
              video: false,
              url: require("./news_images/beware.jpeg")
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "తెలుగు పాటలకు చిందేస్తూ సందడి చేస్తున్న డేవిడ్ వార్నర్",
      abstract:
        "తెలంగాణ: తెలుగు పాటలపై మనసు పారేసుకున్న ఆస్ట్రేలియా క్రికెటర్ డేవిడ్ వార్నర్. మొన్న అల వైకుంఠపురం లోని 'బుట్టబొమ్మ' మరియు 'రాములో రాముల' కి చిందు వేయగా.. తాజాగా NTR పుట్టినరోజు సందర్భంగా జనతా గ్యారేజ్ సినిమాలోని 'పక్కా లోకల్' పాటకి చిందులు వేసి హైదరాబాద్ మీద ఉన్న మమకారాన్ని తెలియచేస్తూ అందరిని ఆశ్చర్యపరుస్తున్నాడు.",
      media: [
        {
          "media-metadata": [
            {
              video: false,
              url: require("./news_images/warner.jpeg")
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "శక్తివంతమైన దేశంగా జపాన్ ఎలా మారింది?",
      abstract:
        "తెలంగాణ: ప్రపంచంలోనే మూడో శక్తివంతమైన దేశంగా జపాన్ ఎలా మారింది?ప్రపంచంలోనే మూడో శక్తివంతమైన దేశంగా జపాన్ ఎలా మారింది?ప్రపంచంలోనే మూడో శక్తివంతమైన దేశంగా జపాన్ ఎలా మారింది?",
      media: [
        {
          "media-metadata": [
            {
              video: true,
              url: "https://www.youtube.com/embed/8ymXpIKceMQ"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "#ఆకలితో #ఉన్న #చిన్నారి #మొహంలో #చిరునవ్వు",
      abstract:
        "తెలంగాణ: హైదరాబాద్ మేడ్చల్ ఔటర్ రింగ్ రోడ్డు వద్ద వలస కార్మికుల కుటుంబానికి చెందిన చిన్నారి అలసిపోయి ఉన్న క్రమంలో నాకు ఆహారం దొరికిందనే తన ఆనందం వర్ణనాతీతం.",
      media: [
        {
          "media-metadata": [
            {
              url:
                "https://scontent.ffjr1-2.fna.fbcdn.net/v/t1.0-9/97460335_139504204327753_7515342982950682624_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=o4kH5EyxKIcAX9ymO9K&_nc_ht=scontent.ffjr1-2.fna&oh=082ed248c6c4a0739e239b8dfbd99721&oe=5EEAEC72"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "లాక్ డౌన్ కారణంగా చాలా మంది యువతలో వచ్చిన మార్పు?",
      abstract:
        "తెలంగాణ: లాక్ డౌన్ కారణంగా చాలా మంది #యువతలో వచ్చిన ఒక #మార్పు." +
        "#స్వచ్ఛంద #సంస్థల #ద్వారా #సమాజసేవ" +
        "ఆకలితో అలమిటిస్తున్న అనాథలకు కడుపు నిండా అన్నం పెట్టి ఆదుకుంటున్న యువత",
      image: "",
      media: [
        {
          "media-metadata": [
            {
              video: true,
              url: "https://www.youtube.com/embed/uA86vucn9Mc"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "#త్వరలో #ప్రపంచానికి #శుభవార్త ",
      abstract:
        "తెలంగాణ: #త్వరలో #ప్రపంచానికి #శుభవార్త - #కరోనాకి #అమెరికా #చెక్ కరోనా స్టడీ :కరోనా వైరస్ ఫై అమెరికా విస్తృత పరిశోధనలు , 75 రీసెర్చ్ సంస్థలను ఒకే వేదిక మీదకు తెచ్చిన అమెరికా CDC .",
      media: [
        {
          "media-metadata": [
            {
              url:
                "https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/p960x960/95323677_134587621486078_6898683462765510656_o.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=zVvArYku0D8AX9A-U1G&_nc_ht=scontent.ffjr1-4.fna&_nc_tp=6&oh=b53835b4a583c46a8538c19c20e953be&oe=5EEC3C3D"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "రాష్ట్రీయ స్వయం సేవక్ సంఘ్(RSS)",
      abstract:
        "తెలంగాణ: కరోనా వైరస్ నుండి ప్రజలను కాపాతున్న వైద్య సిబ్బందికి రాష్ట్రీయ స్వయం సేవక్ సంఘ్(RSS) వారి గౌరవ వందనం",
      media: [
        {
          "media-metadata": [
            {
              video: true,
              url: "https://www.youtube.com/embed/Ivgtbc0pVk8"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    }
  ];

  const [getMostpopularArticles, setMostpopularArticles] = React.useState(null);
  const [mainData, setMainaData] = React.useState(null);
  const [ifException, setException] = React.useState(false);
  const [period, setPeriod] = React.useState(1);
  const [showsearchBase, setShowSearchBase] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [itemDetail, setItemDetail] = React.useState(null);
  const handlePeriodChange = event => {
    setMostpopularArticles(null);
    setPeriod(event.target.value);
    loadArticles(period);
  };

  const detailedNewsOpen = item => {
    setOpenDetails(true);
    setItemDetail(item);
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      loadArticles(period);
    }
    fetchData();
  }, []);
  const loadArticles = async param => {
    try {
      const res = await NYTIMESSERVICE.getMostpopularArticles(param);
      setMostpopularArticles(res.results);
      setMainaData(res.results);
    } catch (err) {
      setException(true);
    }
  };

  const searchChange = event => {
    const filtered = mainData.filter(function(x) {
      return (
        x.byline.toLowerCase().includes(event.target.value.toLowerCase()) ||
        x.published_date
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        x.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        x.abstract.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setMostpopularArticles(filtered);
    console.log(getMostpopularArticles);
  };
  return (
    <div className="App">
      <div className="head-bar">
        <nav role="navigation">
          <div className="navrolemain">
            <div className="navrole1">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="icon-q3"></div>
              <div className="head-text">ROOTS FOR EVERYTHING..</div>
              {
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFF"
                        d="M9.462 14.593c.933 0 1.793-.234 2.58-.7.786-.466 1.407-1.093 1.865-1.88.457-.786.686-1.645.686-2.578 0-.933-.229-1.793-.686-2.579-.458-.787-1.08-1.408-1.866-1.866-.786-.457-1.646-.685-2.579-.685-.933 0-1.792.228-2.579.685-.786.458-1.412 1.08-1.879 1.866-.466.786-.7 1.646-.7 2.579 0 .933.234 1.792.7 2.579.467.786 1.093 1.413 1.88 1.879.786.466 1.645.7 2.578.7zm6.859 0L22 20.272 20.272 22l-5.68-5.706v-.906l-.329-.302c-.64.567-1.376 1.002-2.208 1.304-.832.301-1.697.452-2.593.452-1.353 0-2.601-.329-3.745-.987-1.143-.659-2.043-1.546-2.702-2.662C2.338 12.041 2 10.788 2 9.435c0-1.354.334-2.602 1.001-3.745.668-1.143 1.573-2.044 2.716-2.702C6.861 2.329 8.11 2 9.462 2c1.354 0 2.607.338 3.759 1.015 1.116.659 1.998 1.555 2.647 2.689.65 1.134.974 2.377.974 3.73 0 .915-.15 1.789-.452 2.62-.302.833-.737 1.57-1.304 2.21l.302.329h.933z"
                      />
                    </svg>
                    <InputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                      style={{
                        width: showsearchBase ? "100%" : "20px",
                        transition: "all 0.5s ease 0s",
                        color: "#fff",
                        fontSize: "18px"
                      }}
                      onChange={searchChange}
                      onFocus={() => {
                        setShowSearchBase(true);
                      }}
                      onBlur={() => {
                        setShowSearchBase(false);
                      }}
                    />
                  </div>
                </>
              }
            </div>
            <div className="navrole2">
              <div className="vert-menu"></div>
              <FormControl
                style={{
                  position: "relative",
                  zIndex: "11",
                  right: "3px",
                  width: "26px",
                  height: "19px",
                  top: "-33px"
                }}
              >
                <Select
                  style={{
                    opacity: 0
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={period}
                  onChange={handlePeriodChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </nav>
      </div>
      <div
        style={{
          top: "72px",
          position: "fixed",
          height: "87px",
          zIndex: 2,
          width: "100%"
        }}
      >
        <FlipPage
          className="book"
          showSwipeHint
          uncutPages
          orientation="vertical"
          width="100%"
          height="640"
          pageBackground="#fffdf8"
          animationDuration="400"
        >
          {content.map((item, index) => (
            <div>
              {item.media[0]["media-metadata"][0].video ? (
                <iframe
                  style={{ width: "100%", height: "250px" }}
                  src={item.media[0]["media-metadata"][0].url + "?controls=0"}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <img
                  height="320"
                  width="100%"
                  src={item.media[0]["media-metadata"][0].url}
                />
              )}
              <div className="center">
                <p style={{ color: "#000" }}>
                  <b>{item.title}</b>
                </p>
                <p style={{ color: "#000" }}>{item.abstract}</p>
                {/* 
                <Button
                  variant="contained"
                  onClick={() => detailedNewsOpen(item)}
                  color="secondary"
                >
                  Read more
                </Button> */}
              </div>
            </div>
          ))}
        </FlipPage>
      </div>
      <div className="result-section">
        {getMostpopularArticles && (
          <NyListItem listArray={getMostpopularArticles} />
        )}
      </div>
      {getMostpopularArticles === null && <Spinner></Spinner>}
      {ifException && <NoResults></NoResults>}
      {openDetails && (
        <DetailNews
          setOpenDetails={setOpenDetails}
          openDetails={openDetails}
          itemDetail={itemDetail}
        />
      )}
    </div>
  );
};

export default React.memo(App);
