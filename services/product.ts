import { data } from "../data";

//função para  pegar todos os produtos
export const getAllProducts = () =>{
    return data.products;
}

//função para pegar um produto especifico
export const getProductsId = (id:number) =>{
    return data.products.find(item => item.id === id);
}

//função para pegar um produto de uma categoria especifica
export const getProductsByCategory = (idCategory: number) => {
    return data.products.filter(item => item.idCategory === idCategory);
}