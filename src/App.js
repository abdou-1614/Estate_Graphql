import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Buy from './components/Pages/Buy/Buy'
import Rent from './components/Pages/Rent/Rent'
import Navbar from './components/Navbar/Navbar'
import Property from './components/Pages/Property/Property'
function App() {
  const client = new ApolloClient({
    uri : 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
    <div className='py-2'>
      <Routes>
        <Route path='*' element={
          <main>
            <Navbar/>
            <h1 className='text-[2rem] text-center mt-20 font-bold'>404 Not Found</h1>
          </main>
        } />
        <Route path='/' element={<Home/>} />
        <Route path='/buy' element={<Buy/>} />
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/property'>
          <Route path=':propertyId' element={<Property/>} />
        </Route>
      </Routes>
    </div>
    </ApolloProvider>
  );
}

export default App;
