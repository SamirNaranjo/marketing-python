import CasesList from "components/cases/CasesList";
import Header from "components/cases/Header";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Casos = () => {
    return (
        <Layout>
            <Navbar/>
                <div className="pt-28">
                    <Header/>
                    <CasesList/>
                </div>
            <Footer/>  
        </Layout>
    );
}

export default Casos;