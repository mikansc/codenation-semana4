const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const cart = require('./controller');

function getShoppingCart(ids, productsList) {
  const data = cart.cartFilter(ids, productsList);

  const products = cart.getProdNameAndCategory(data),
    promotion = cart.getPromotion(data),
    fullPrice = cart.getRegularPrice(data),
    promoPrice = cart.getTotalPrice(data, promotion);

  return {
    products,
    promotion,
    totalPrice: promoPrice.toFixed(2),
    discountValue: (fullPrice - promoPrice).toFixed(2),
    discount: `${(((fullPrice - promoPrice) / fullPrice) * 100).toFixed(2)}%`,
  };
}

module.exports = { getShoppingCart };
