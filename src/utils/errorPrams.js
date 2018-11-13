/*
 EC_NO_ERROR = 0,
 EC_HANDLED_FAILURE,

 EC_MT4SRV_NOT_READY,
 EC_UNKNOW_INSTRUCTION,

 EC_NO_LOGIN,
 EC_ILLEGAL_REQUEST,
 EC_ACCOUNT_NOT_EXISTS,
 EC_ACCOUNT_CHECK_FAILURE,
 EC_GROUP_CHECK_FAILURE,
 EC_SYMBOL_CHECK_FAILURE,
 EC_ORDER_CHECK_FAILURE,
 EC_ORDER_ALREADY_ACTIVATED,
 EC_ORDER_ALREADY_CLOSED,
 EC_ORDER_INVALID,

 EC_CACHE_EXCEPTION,
 EC_NO_HISTORY_TICKS,

 EC_SYMBOL_CONFIG_NOT_MATCH,

 EC_INVALID_DATA,            // invalid data
 EC_TECH_PROBLEM,            // server technical problem
 EC_OLD_VERSION,             // old client terminal
 EC_NO_CONNECT,              // no connection
 EC_NOT_ENOUGH_RIGHTS,       // no enough rights
 EC_TOO_FREQUENT,            // too frequently access to server
 EC_MALFUNCTION,             // mulfunctional operation
 EC_GENERATE_KEY,            // need key generation
 EC_SECURITY_SESSION,        // securied session authorization
 EC_PUBLIC_KEY_MISSING,      // need public key

 //--- mine status
 EC_ACCOUNT_DISABLED = 64,   // mine blocked
 EC_BAD_ACCOUNT_INFO,        // bad mine info

 //--- trade
 EC_TRADE_TIMEOUT = 128,  // trade transatcion timeou expired
 EC_TRADE_BAD_PRICES,        // order has wrong prices
 EC_TRADE_BAD_STOPS,         // wrong stops level
 EC_TRADE_BAD_VOLUME,        // wrong lot size
 EC_TRADE_MARKET_CLOSED,     // market closed
 EC_TRADE_DISABLE,           // trade disabled
 EC_TRADE_NO_MONEY,          // no enough money for order execution
 EC_TRADE_PRICE_CHANGED,     // price changed
 EC_TRADE_OFFQUOTES,         // no quotes
 EC_TRADE_BROKER_BUSY,       // broker is busy

 EC_TRADE_REQUOTE,           // requote 138
 EC_TRADE_ORDER_LOCKED,      // order is proceed by dealer and cannot be changed
 EC_TRADE_LONG_ONLY,         // allowed only BUY orders
 EC_TRADE_TOO_MANY_REQ,      // too many requests from one client
 //--- order status notification
 EC_TRADE_ACCEPTED,          // trade request accepted by server and placed in request queue
 EC_TRADE_PROCESS,           // trade request accepted by dealerd
 EC_TRADE_USER_CANCEL,       // trade request canceled by client
 //---
 EC_TRADE_MODIFY_DENIED,     // modification denied because order too close to market
 EC_TRADE_CONTEXT_BUSY,      // trade context busy (for client terminal only)
 EC_TRADE_EXPIRATION_DENIED, // expiration specifieng is denied
 EC_TRADE_TOO_MANY_ORDERS,   // too many orders
 EC_TRADE_HEDGE_PROHIBITED,  // hedge is prohibited
 EC_TRADE_PROHIBITED_BY_FIFO // prohibited by fifo rule
 */

export default class ErrorPrams {
    static errorDescribe(err) {
        const errobj = typeof err === 'object' ? err : { errno: err };
        const mes = this.parseError(errobj);
        return mes;
    }

    static parseError(errobj) {
        switch (errobj.errno * 1) {
            case 0:
                return '成功';
            case 1:
                return '账号或密码错误'; // 操作失败
            case 2:
                return 'MT4服务未就绪';
            case 3:
                return '未能识别指令';
            case 4:
                return '未登录';
            case 5:
                return '违规请求';
            case 6:
                return '帐户不存在';
            case 7:
                return '帐户检测失败';
            case 8:
                return '组检测失败';
            case 9:
                return '产品检测失败';
            case 10:
                return '订单检测失败';
            case 11:
                return '订单已激活';
            case 12:
                return '订单已关闭'; // 订单关闭,需要删除订单;
            case 13:
                return '订单不合法';
            case 14:
                return '缓存异常';
            case 15:
                return '无历史报价';
            case 16:
                return '产品配置不匹配';
            case 17:
                return '非法参数';
            case 18:
                return '技术性错误';
            case 19:
                return '版本过旧';
            case 20:
                return '无连接';
            case 21:
                return '权限不足';
            case 22:
                return '请求太繁杂';
            case 23:
                return '操作故障';
            case 24:
                return '必须私钥';
            case 25:
                return '须私密会话';
            case 26:
                return '公钥丢失';
            case 27:
                return '账户已经存在';
            case 28:
                return '手机号已注册';
            case 64:
                return '帐户已禁用';
            case 65:
                return '帐户信息无效';
            case 128:
                return '下单超时';
            case 129:
                return '价格错误';
            case 130:
                return '止损价格错误';
            case 131:
                return '手数错误';
            case 132:
                return '休市时间';
            case 133:
                return '交易禁止';
            case 134:
                return '余额不足';
            case 135:
                return '价格已改变';
            case 136:
                return '无报价';
            case 137:
                // return '权限不足';
                break;
            case 138:
                return '须重报价';
            case 139:
                return '订单锁定';
            case 140:
                return '只许长单交易';
            case 141:
                return '下单请求过多';
            case 142:
                return '下单已接受';
            case 143:
                return '下单被处理';
            case 144:
                return '用户取消下单';
            case 145:
                return '拒绝修改订单';
            case 147:
                return '不允许指定超时';
            case 148:
                return '订单过多';
            case 149:
                return '不允许对冲';
            case 150:
                return '不允许先入先出';
            default:
                return `常规错误(${errobj.error})`;
        }
        return `常规错误(${errobj.error})`;
    }
}
