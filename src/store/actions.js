export const loadData = ({ commit }) => {
  let data = JSON.parse(localStorage.getItem("data"));

  if (data) {
    const stocks = data.stocks;
    const stockPortfolio = data.stockPortfolio;
    const funds = data.funds;

    const portfolio = {
      stockPortfolio,
      funds
    };

    commit("SET_STOCKS", stocks);
    commit("SET_PORTFOLIO", portfolio);
  }
};
