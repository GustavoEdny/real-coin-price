const getRealCoinPrice = (fraction, purchasedPrice) => {
    const rest = 1 - fraction
    const parts = rest / fraction
    return (parts * purchasedPrice) + purchasedPrice
}

module.exports = getRealCoinPrice