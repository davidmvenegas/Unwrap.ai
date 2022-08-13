import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Unclustered from './components/2-unclustered_tab/Unclustered'
import Clustered from './components/1-clustered_tab/Clustered'

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clustered/>} />
          <Route path='/unclustered' element={<Unclustered/>} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App