import axios, { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";
import { GetStaticProps } from "next";
import { serializeResponse } from "@/libs/serializeResponse";

const GameList = () => {
  const [{ data, loading, error }, refetch] = useAxios<PokemonList>(
    {
      baseURL: "https://pokeapi.co",
      url: "/api/v2/pokemon?limit=10&offset=0",
    },
    {
      manual: true,
    }
  );

  // refetch();

  return (
    <div>
      <h1>Users Page</h1>
      <button onClick={() => refetch()}>Load Users</button>
      {loading && <p>Loading...</p>}
      {!!error && <p>{error.message}</p>}
      {!!data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </div>
  );
};

export default GameList;

export const getServerSideProps: GetStaticProps = async () => {
  // axios config, must be exactly the same as the one used in useAxios hook so that it creates the same key.
  const config: AxiosRequestConfig = {
    baseURL: "https://pokeapi.co",
    url: "/api/v2/pokemon?limit=10&offset=0",
  };
  // execute the http request
  const response = await axios(config);

  // serialize the response
  return {
    props: {
      __CACHE__: [serializeResponse(config, response)],
    },
  };
};
