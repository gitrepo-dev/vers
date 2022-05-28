import React from "react";
import { homeProps } from "./home.types";
import Header from 'layouts/header'
const Card = React.lazy(() => import('components/card'));

const Home: React.FC<homeProps> = ({ foo }) => {
  return (
    <><Header /><Card /></>
  )
}

export default Home;
