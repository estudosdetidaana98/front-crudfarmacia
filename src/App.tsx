import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Catalogo from './paginas/catalogo/Catalogo';
import Formulariocategoria from './components/categorias/formulariocategorias/FormularioCategoria';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioprodutos/FormularioProduto';
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProduto';

function App() {
  return (
    <>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<Formulariocategoria />} />
              <Route path="/editarCategoria/:id" element={<Formulariocategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;