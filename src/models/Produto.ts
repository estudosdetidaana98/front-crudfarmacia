import Categoria from './Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  valor: number;
  descricao: string;
  categoria: Categoria | null;
}