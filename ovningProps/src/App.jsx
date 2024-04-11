import Bokhandeln from "./bokhandeln/Bokhandeln"
import Bokningsform from "./bokningsform/Bokningsform"
import InsultGenerator from "./shakespeareanInsult/InsultGenerator"
import SplitBill from "./splitBill/SplitBill"


function App() {
    return (
        <>
            <Bokhandeln />
            <Bokningsform />
            <SplitBill />
            <InsultGenerator />
        </>
    )
}

export default App
