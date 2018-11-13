const calculateFloatUtil = {
    accMul: function(arg1, arg2) {
        // 乘法
        // 精准乘法
        let m = 0;
        const s1 = arg1.toString();
        const s2 = arg2.toString();
        try {
            m += s1.split('.')[1].length;
        } catch (e) {}
        try {
            m += s2.split('.')[1].length;
        } catch (e) {}
        return (
            (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
            Math.pow(10, m)
        );
    },
    accAdd: function(arg1, arg2) {
        // 加法
        let r1;
        let r2;
        let m;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        // return(arg1 * m + arg2 * m) / m;
        return (this.accMul(arg1, m) + this.accMul(arg2, m)) / m;
    },
    accSub: function(arg1, arg2) {
        // 精准减法,依赖精准乘法
        let r1;
        let r2;
        let m;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        // return(arg1 * m - arg2 * m) / m;
        return (this.accMul(arg1, m) - this.accMul(arg2, m)) / m;
    },
};

export default calculateFloatUtil;
