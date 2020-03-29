import React from 'react';
import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";

const Home = (props) => (

    <Layout>
      <div>
        <h1>Small Lego Digital Design</h1>
        <h3>Last bitcoin update</h3>
        {props.bpi.time.updated}
     </div>    
    </Layout>

);
          
Home.getInitialProps = async function(){
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const data = await res.json();
  console.log(data)
  return{
    bpi: data
  }
};

export default Home
