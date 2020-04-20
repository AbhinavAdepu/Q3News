import React from "react";
import "./../App.css";
import ListItem from "@material-ui/core/ListItem";
import App from "./../App";
import DetailNews from "./DetailNews";
import roots from './../rsz_q3.jpg';

const NyListItem = props => {
  const { listArray } = props;
  const [openDetails, setOpenDetails] = React.useState(false);
  const [itemDetail, setItemDetail] = React.useState(null);

  return (
    <React.Fragment>
      <ul class="list-group">
        {listArray.length === 0
          ? "No records to show.."
          : listArray.map((item, i) => {
              return (
                <>
                  <div
                    className="flex-design paddingz"
                    onClick={() => {
                      setOpenDetails(true);
                      setItemDetail(item);
                    }}
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div class="rounded" style={{backgroundImage: `url(${item.media.length !== 0 &&
                      item.media[0]["media-metadata"] !== undefined ?
                      item.media[0]["media-metadata"][0].url : roots})`, backgroundRepeat: 'no-repeat'}}></div>
                    <li class="list-group-item list-group-item-primary">
                      <div className="news-title">
                        {item.title.length > 50
                          ? item.title.substring(0, 50) + "..."
                          : item.title}
                      </div>
                      <div className="flex-design">
                        <div className="news-by">
                          {item.byline === null ||
                          item.byline === undefined ||
                          item.byline === ""
                            ? "By NewYork Times"
                            : item.byline.length > 18
                            ? item.byline.substring(0, 15) + "..."
                            : item.byline}
                        </div>
                        <div className="flex-design">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#686868"
                              fill-rule="nonzero"
                              d="M19.76 20.029V8.995H4.24V20.03h15.52zm0-16.058c.604 0 1.129.2 1.573.601.445.4.667.874.667 1.418V20.03c0 .545-.222 1.01-.667 1.394A2.327 2.327 0 0 1 19.76 22H4.24c-.622 0-1.151-.192-1.587-.577-.435-.385-.653-.85-.653-1.394V5.99c0-.544.218-1.017.653-1.418.436-.4.965-.6 1.587-.6h1.093V2h2.24v1.971h8.854V2h2.24v1.971h1.093zm-2.187 7.043v1.972h-2.24v-1.972h2.24zm-4.48 0v1.972h-2.186v-1.972h2.186zm-4.426 0v1.972h-2.24v-1.972h2.24z"
                            />
                          </svg>
                          <div className="padding-left-four" id="publish-date">
                            {item.published_date}
                          </div>
                        </div>
                      </div>
                    </li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#9a9a9a"
                        fill-rule="nonzero"
                        d="M8 16.584L9.528 18 16 12 9.528 6 8 7.416 12.97 12z"
                      />
                    </svg>
                  </div>
                </>
              );
            })}
      </ul>
      {openDetails && (
        <DetailNews
          setOpenDetails={setOpenDetails}
          openDetails={openDetails}
          itemDetail={itemDetail}
        />
      )}
    </React.Fragment>
  );
};

export default React.memo(NyListItem);