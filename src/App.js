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
import "react-animated-slider/build/horizontal.css";
import DetailNews from "./components/DetailNews";
import Button from "@material-ui/core/Button";

const App = () => {
  const content = [
    {
      title: "Ensuring that we have the most Vulnerable homeless",
      abstract:
        "We started the charity 'We Are' as a bridge between the youth and the homeless who have a desire to serve in the town of Korutala. Tomatoes were then raised and distributed in cooperation with donors as part of an effort to satisfy the hunger of homeless people living on the road. Donors who would like to make a donation have asked for your help.",
      media: [
        {
          "media-metadata": [
            {
              url:
                "https://github.com/AbhinavAdepu/NYTimes_Task_Xebia/blob/master/src/svg/news2.PNG?raw=true"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "110 people attacked three saints in mumbai phalgar.",
      abstract:
        "Killing and killing until they are seriously injured.? Showing the guard to be safe? Running behind the police to protect the damage they hit? What is wrong with the weights? What is your opinion on the attack on the saints.!",
      media: [
        {
          "media-metadata": [
            {
              url:
                "https://raw.githubusercontent.com/AbhinavAdepu/NYTimes_Task_Xebia/master/MUMNews.PNG"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "Will China use corona as a bio war??",
      abstract:
        "February 1981, published in a book published in China on February Corona??? Will China use corona as a bio war?? Give your response as an average indian towards China's trend.",
      image: "",
      media: [
        {
          "media-metadata": [
            {
              url:
                "https://scontent.ffjr1-3.fna.fbcdn.net/v/t1.0-9/90812945_120283676249806_7589649318785581056_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=94OQmqYMHGoAX_hJ0mn&_nc_ht=scontent.ffjr1-3.fna&oh=79b41aac15267b1279ffd03ceef72047&oe=5EC32382"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "The pain of God that is seen",
      abstract:
        "The pain of God that is seen :- to save from corona virus Can't you stop coming out of the house by knowing our health and families that are taking care of our health and families? We are in hospital for you - you are at home for us",
      media: [
        {
          "media-metadata": [
            {
              url:
                "https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/91140881_119407719670735_2205955723609767936_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=h5xUfuTJeoMAX8gxGZD&_nc_ht=scontent.ffjr1-4.fna&oh=3e4ee2b683123062ef336c6284ba50aa&oe=5EC4E1A9"
            }
          ]
        }
      ],
      published_date: "20/04/2020",
      byline: "Kalyan Vanatadapula"
    },
    {
      title: "Victory to escape",
      abstract:
        "As a part of the janata office, the s under the guidance of extend district. Mr. Vivek garu, the woman who is suffering from full pregnant woman has been noticed and sent to the government hospital in police vehicle.",
      media: [
        {
          "media-metadata": [
            {
              url:
                "https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/90194672_118958469715660_4662023593482256384_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=veUEBXskN4oAX8tvEsT&_nc_ht=scontent.ffjr1-4.fna&oh=8a894db2f88d10eb9944af20f34b0814&oe=5EC406ED"
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
        <div
          className="blinking"
          style={{ left: 0, position: "absolute", zIndex: 10 }}
        >
          <b style={{ left: 0 }}>Latest News..</b>
        </div>
        <Slider style={{ width: "200px" }} autoplay={3000} duration={1000}>
          {content.map((item, index) => (
            <div>
              <img
                height="100%"
                width="100%"
                src={item.media[0]["media-metadata"][0].url}
              />
              <div className="center">
                <h6 style={{ color: "#fff", background: "#000" }}>
                  {item.title}
                </h6>
                <Button
                  variant="contained"
                  onClick={() => detailedNewsOpen(item)}
                  color="secondary"
                >
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </Slider>
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
