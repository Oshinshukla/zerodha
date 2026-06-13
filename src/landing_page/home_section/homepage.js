import Hero from './hero';
import Award from './award';
import OpenAcc from './open_acc';
import Pricing from './pricing';
import Education from './education';
import Stats from './stats';
import Navbar from '../navbar';
import Footer from '../footer';

function Homepage() {
    return (
        <> 
        <Navbar />
        <Hero/>
        <Award/>
        <OpenAcc />
        <Pricing />
        <Education />
        <Stats />
        <Footer />
        </>
    );
}
export default Homepage;