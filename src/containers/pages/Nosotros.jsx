import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";

const Nosotros = () => {
    return (
        <Layout>
            <Navbar/>
                <div className="pt-28">
                    Nosotros
                </div>
            <Footer/>  
        </Layout>
    );
}

export default Nosotros;