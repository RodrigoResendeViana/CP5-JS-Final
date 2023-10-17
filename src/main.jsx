import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Produtos from './routes/Produtos.jsx'
import Pedido from './routes/Pedido.jsx'
import Sobre from './routes/Sobre.jsx'
import InserirProduto from './routes/InserirProduto.jsx'
import InserirPedido from './routes/InserirPedido.jsx'
import EditarProduto from './routes/EditarProduto.jsx'
import EditarPedido from './routes/EditarPedido.jsx'
import ExcluirProduto from './routes/ExcluirProduto.jsx'
import ExcluirPedido from './routes/ExcluirPedido.jsx'

const router= createBrowserRouter([
  
  {
    path: '/', element: <App/>, 
    errorElement:<Error/>,

    children:[

      {path: '/', element: <Home/>},
      {path: '/Login', element: <Login/>},
      {path: '/Produtos', element: <Produtos/>},
      {path: '/Pedido', element: <Pedido/>},
      {path: '/Sobre', element: <Sobre/>},
      {path: '/Produtos/InserirProduto', element: <InserirProduto/>},
      {path: '/Pedido/InserirPedido', element: <InserirPedido/>},
      {path: '/Produtos/EditarProduto/:id', element: <EditarProduto/>},
      {path: '/Pedido/EditarPedido/:id', element: <EditarPedido/>},
      {path: '/Produtos/ExcluirProduto/:id', element: <ExcluirProduto/>},
      {path: '/Pedido/ExcluirPedido/:id', element: <ExcluirPedido/>},

    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
