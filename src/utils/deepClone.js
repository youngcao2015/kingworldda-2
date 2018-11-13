function deepClone(obj) {
    const newObj = obj instanceof Array ? [] : {};
    // obj属于基本数据类型,直接返回obj
    if (typeof obj !== 'object') {
        return obj;
    }
    // obj属于数组或对象，遍历它们
    Object.keys(obj).forEach(key => {
        newObj[key] =
            typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    });
    return newObj;
}

module.exports = {
    deepClone,
};
