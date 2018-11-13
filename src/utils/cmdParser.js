/**
 * 正常  买入高价（cmd：BUY） 卖出低价（SELL）
 * 平常时 买入低价 卖出高价   所以需要和正常相反， 于是cmd 取相反类型，来解决这问题。
 * */
const tradeListCMDParse = cmd => {
    switch (`${cmd}`) {
        case 'BUY':
        case 'BUY_LIMIT':
        case 'BUY_STOP':
            return 'SELL';
        case 'SELL':
        case 'SELL_STOP':
        case 'SELL_LIMIT':
            return 'BUY';
        default:
            return 'BUY';
    }
};
/**
 *  buy => 买入
 *  sell =>  卖出
 * */
const cmdTextParse = cmd => {
    switch (`${cmd}`) {
        case 'BUY':
            return '买入';
        case 'SELL':
            return '卖出';
        case 'BALANCE':
        default:
            return cmd;
    }
};

module.exports = {
    tradeListCMDParse,
    cmdTextParse,
};
