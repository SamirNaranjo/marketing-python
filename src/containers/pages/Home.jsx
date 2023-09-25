import BlogList from "components/home/BlogList";
import CTA from "components/home/CTA";
import Features from "components/home/Features";
import Header from "components/home/Header";
import Incentive from "components/home/Incentive";
import LogoCloud from "components/home/LogoCloud";
import UsesCases from "components/home/UsesCases";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Home = () => {
    return (
        <Layout>
            <Navbar/>
                <div className="pt-28">
                    <Header/>
                    <Incentive/>
                    <UsesCases/>
                    <Features/>
                    <CTA/>
                    <LogoCloud/>
                    <BlogList/>
                </div>
                <Footer/>  
        </Layout>
    );
}

export default Home;