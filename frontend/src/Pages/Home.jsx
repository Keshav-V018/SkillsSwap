import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Worksection from "../components/Worksection";
import Categories from "../components/Categories";
import ExtraFeatures from "../components/ExtraFeatures";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navbar />

            <Herosection />

            <Worksection />

            <Categories />

            <ExtraFeatures />

            <Footer />
        </div>
    )
}

export default Home;