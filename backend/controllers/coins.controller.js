import fetch from "node-fetch";

export const getCoins = async (req, res) => {
  const { currency } = req.query;
  try {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
      currency || "usd"
    }`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
      },
    });

    if (!response.ok) {
      res.status(500).send({ error: "Failed to fetch data from CoinGecko" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Inernal Server Error" });
  }
};

export const getCoinDetail = async (req, res) => {
  const { coinId } = req.params;

  try {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Inernal Server Error" });
  }
};

export const getCoinHistory = async (req, res) => {
  const { coinId } = req.params;
  const { currency } = req.query;
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${
      currency || "usd"
    }&days=10&interval=daily`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ofDE6ZkNDUyo9csPV9GKT2z2",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Inernal Server Error" });
  }
};
