const isRealName = name => {
    const regular = /^[\u4e00-\u9fa5]{2,4}$/;
    return regular.test(name);
};

const isValidIdCardNumber = number => {
    const regular = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return regular.test(number);
};

module.exports = {
    isRealName,
    isValidIdCardNumber,
};
