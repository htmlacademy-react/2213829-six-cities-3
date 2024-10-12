import Home from "../Home/Home"


type Props = {
    count: number
}

const App = (): JSX.Element => {
    return(
    <div className="page page--gray page--main">
        <Home cardItems={312}/>
    </div>
       )
}

export default App