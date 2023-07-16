import Header from "@/components/Header";
import GameList from "@/components/list/GameList";
import type { NextPage } from "next";

const HomeOld: NextPage = () => {
  return (
    <>
      <Header label={""} />
      <GameList />
    </>
  );
};

function Home(){
      return (<>
      <Header label={""} />
      <GameList />
    </>)
}

// Home.getInitialProps = async (ctx) => {
//     return {}
// }


export default Home;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../_app';
// import reportWebVitals from '../reportWebVitals';
// import store from '../store'
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// reportWebVitals();
