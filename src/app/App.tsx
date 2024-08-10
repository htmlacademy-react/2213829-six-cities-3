import LocationItem from "../location-item/location-item"

type Props = {
    count: number
}

const App: React.FC<Props> = ({count}) => {
    return(
        <>
        <LocationItem/>
        </>
    )
}

export default App