import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "./NewsCard";

function AllNews() {
  const [data, setData] = useState([]);

  //   console.log(props.category);
  const fatchApi = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2baff4fbc19c4a7cbc9b981c14100e3d`;
    const res = await fetch(url);
    const resjson = await res.json();
    //   console.log(resjson);
    setData(resjson.articles);
  };

  useEffect(() => {
    fatchApi();
  }, []);

  //   console.log(data);

  return (
    <>
      <p className="text-center title my-4 text-decoration-underline fs-2">
        WorldNews - Top Headlines Today
      </p>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {data.map((ele) => {
                return (
                  <div className="col-md-4" key={ele.url}>
                    <NewsCard
                      img={ele.urlToImage}
                      title={ele.title}
                      description={ele.description}
                      link={ele.url}
                      newssource={ele.source.name}
                      date={ele.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNews;
