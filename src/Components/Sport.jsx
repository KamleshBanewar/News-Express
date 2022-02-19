import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "./NewsCard";

function Sport() {
  const [data, setData] = useState([]);

  //   console.log(props.category);
  const fatchApi = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=2baff4fbc19c4a7cbc9b981c14100e3d`;
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
      <p class="text-center title my-4 text-decoration-underline fs-2">
        WorldNews - Sport
      </p>
      <div className="container my-3">
        <div className="row my-5">
          {data.map((ele, id) => {
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
    </>
  );
}

export default Sport;
