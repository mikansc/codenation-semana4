const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

// Funções --------------

// Função que recebe o array de IDs
// de produtos e filtra a lista de
// produtos, retornando somente os
// produtos com os IDs do array
const cartFilter = (ids, list) => list.filter((item) => ids.includes(item.id));

// Função que retira do array de
// produtos o nome do produto e a
// categoria, e retorna um objeto com
// essas informações
const getProdNameAndCategory = (list) =>
  list.map((item) => {
    return {
      name: item.name,
      category: item.category,
    };
  });

// Função que verifica qual a promoção:
// Se na lista tiver apenas um item, single look,
// Se na lista tiver mais de um, double...
// Ela verifica quantas categorias únicas
// a listagem passada como parametro possui.
const getPromotion = (list) => {
  const categories = [...new Set(list.map((item) => item.category))];
  return promotions[categories.length - 1];
};

// Função que busca o valor unitário
// com base na promoção selecionada
// e retorna preço regular se não
// encontrar a promoção no produto
const getProductPrice = (item, promotion) => {
  const hasPromotion = item.promotions.filter((promo) =>
    promo.looks.includes(promotion)
  );
  return hasPromotion[0] ? hasPromotion[0].price : item.regularPrice;
};

// Função que soma o valor total do carrinho,
// passando por cada produto da lista e somando
// o preço da PROMOÇÃO ou REGULAR, de acordo com
// o retorno da função getProductPrice()
const getTotalPrice = (list, promotion) => {
  return list.reduce((acc, item) => acc + getProductPrice(item, promotion), 0);
};

// Função que soma o preço regular de
// todos os itens da lista filtrada
const getRegularPrice = (list) => {
  return list.reduce((acc, item) => acc + item.regularPrice, 0);
};

module.exports = {
  cartFilter,
  getProdNameAndCategory,
  getPromotion,
  getTotalPrice,
  getRegularPrice,
};
