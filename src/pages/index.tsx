import Header from "@/components/Header";
import GameList from "@/components/list/GameList";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header label={""} />
      <GameList />
    </>
  );
};

export default Home;
