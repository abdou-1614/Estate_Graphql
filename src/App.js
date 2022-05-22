import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
function App() {
  const client = new ApolloClient({
    uri : 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
    <div className='py-2'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
    </ApolloProvider>
  );
}

export default App;
