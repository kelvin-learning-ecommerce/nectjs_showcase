import axios from "axios";
import GameListItem from "./GameListItem";
import { useSelector, useDispatch } from "react-redux";
import { getGameListData } from "@/state/action/gameListAction";
import React, { useState, useEffect } from "react";
import Loader from "../loader";

interface GameListProps {}

const GameList: React.FC = () => {
  const gameListData = useSelector((state: any) => state?.data.gameListData);
  const dispatch = useDispatch();

  const fetchGameListData = async () => {
    await axios
      .get(
        "https://api.rawg.io/api/games?page=1&page_size=20&key=02ef6ba5d13444ee86bad607e8bce3f4"
      )
      .then((res) => {
        dispatch(getGameListData(res.data));
        console.log(res.data);
      });
  };

  useEffect(() => {
    fetchGameListData();
  }, []);

  return (
    <>
      <h1>Footballers:</h1>
      {!gameListData && gameListData == undefined ? (
        <>
          <Loader />
        </>
      ) : (
        gameListData.map((individualPlayerData: any) => {
          return (
            <>
              <h3>Name: {individualPlayerData.name}</h3>
              <h4>released date: {individualPlayerData.released}</h4>
              <h4>metacritic score: {individualPlayerData.metacritic}</h4>
            </>
          );
        })
      )}
    </>
  );
};

export default GameList;
