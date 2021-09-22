import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from "services/getTrendingTerms";
import Category from "../Category";
import useNearScreen from "hooks/useNearScreen";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trends" options={trends} />;
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
}
