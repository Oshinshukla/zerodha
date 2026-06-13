import hero from './hero';
import award from './award';
import openAcc from './open_acc';
import pricing from './pricing';
import education from './education';
import stats from './stats';
import navbar from '../../navbar';
import footer from '../../footer';
function homepage() {
    return (
        <> 
        <navbar />
        <footer />
        <hero/>
        <award/>
        <openAcc />
        <pricing />
        <education />
        <stats />


        </>
    );
}
export default homepage;