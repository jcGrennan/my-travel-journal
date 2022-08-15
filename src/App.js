// importing components and data for the Journal component

import Header from "./components/Header"
import Journal from "./components/Journal"
import data from "./data"

// composing and exporting App

function App() {
 
    // mapping the data to the reusable Journal component using the array map method

  const locs = data.map((loc, i) => {
    const isLast = data.length - 1 === i
    return ( 
            <Journal
                key={loc.id}
                {...loc}
                last={isLast}
            />
    )
})

return (
    <div>
        <Header />
        <main>
            {locs}
        </main>
    </div>
)
}

export default App;
