import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';


function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    valor: 1,
    categoria: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        toastAlerta('Produto atualizado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
        } else {
          toastAlerta('Erro ao atualizar a Produto', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);

        toastAlerta('Produto cadastrado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
        } else {
          toastAlerta('Erro ao cadastrar a Produto', 'erro');
        }
      }
    }
  }

  const carregandocategoria = categoria.tipo === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
      <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Descrição do Produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="descricao"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do Produto</p>
          <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.tipo}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandocategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandocategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;