import React from "react";
import { Header, Footer, Main,SocialIcons } from "../components";
function HomePage() {
  return (
    <div className="bg-zinc-900">
      <Header />
      <Main />
      <SocialIcons />
      <Footer />
    </div>
  );
}

export default HomePage;
