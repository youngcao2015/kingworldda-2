import { processColor } from 'react-native';

/**
 * 默认的调色板颜色数组
 *
 * @type {*[]}
 */
const colors = [
    processColor('#1eade5'),
    processColor('#d87a80'),
    processColor('#e5cf0d'),
    processColor('#95706d'),
    processColor('#dc69aa'),
    processColor('#9a7fd1'),
    processColor('#588dd5'),
    processColor('#f5994e'),
    processColor('#59678c'),
    processColor('#7eb00a'),
    processColor('#2ec7c9'),
];

const colorPalette1 = [
    '#c12e34',
    '#e6b600',
    '#0098d9',
    '#2b821d',
    '#005eaa',
    '#339ca8',
    '#cda819',
    '#32a487',
];
const colorPalette2 = [
    '#d87c7c',
    '#919e8b',
    '#d7ab82',
    '#6e7074',
    '#61a0a8',
    '#efa18d',
    '#787464',
    '#cc7e63',
    '#724e58',
    '#4b565b',
];
const colorPalette3 = [
    '#E01F54',
    '#001852',
    '#f5e8c8',
    '#b8d2c7',
    '#c6b38e',
    '#a4d8c2',
    '#f3d999',
    '#d3758f',
    '#dcc392',
    '#2e4783',
    '#82b6e9',
    '#ff6347',
    '#a092f1',
    '#0a915d',
    '#eaf889',
    '#6699FF',
    '#ff6666',
    '#3cb371',
    '#d5b158',
    '#38b6b6',
];
const colorPalette4 = [
    '#2ec7c9',
    '#b6a2de',
    '#5ab1ef',
    '#ffb980',
    '#d87a80',
    '#8d98b3',
    '#e5cf0d',
    '#97b552',
    '#95706d',
    '#dc69aa',
    '#07a2a4',
    '#9a7fd1',
    '#588dd5',
    '#f5994e',
    '#c05050',
    '#59678c',
    '#c9ab00',
    '#7eb00a',
    '#6f5553',
    '#c14089',
];
const colorPalette5 = [
    '#C1232B',
    '#27727B',
    '#FCCE10',
    '#E87C25',
    '#B5C334',
    '#FE8463',
    '#9BCA63',
    '#FAD860',
    '#F3A43B',
    '#60C0DD',
    '#D7504B',
    '#C6E579',
    '#F4E001',
    '#F0805A',
    '#26C0C0',
];
const colorPalette6 = [
    '#dd6b66',
    '#759aa0',
    '#e69d87',
    '#8dc1a9',
    '#ea7e53',
    '#eedd78',
    '#73a373',
    '#73b9bc',
    '#7289ab',
    '#91ca8c',
    '#f49f42',
];

/**
 * 返回一个随机顺序的颜色数组
 *
 * @param number 返回的颜色数组中颜色个数，即数组长度
 * @returns {Array}
 */
const getRandomColors = number => {
    const temp_colors = [];
    const colorsLength = colors.length;
    for (let j = 0; j < number; j++) {
        const color = colors[randomNum(0, colorsLength - 1)];

        if (j === 0) {
            temp_colors[0] = color;
        } else if (j === 1) {
            if (color !== temp_colors[0]) {
                temp_colors[1] = color;
            } else {
                j--;
            }
        } else {
            if (color !== temp_colors[j - 1] && color !== temp_colors[0]) {
                temp_colors[j] = color;
            } else {
                j--;
            }
        }
    }
    return temp_colors;
};

/**
 * 返回一个固定顺序的颜色数组（和colors调色板数组颜色顺序一样）
 *
 * @param number 返回的颜色数组中颜色个数，即数组长度
 * @returns {Array}
 */
const getSequentialColors = number => {
    const temp_colors = [];
    const colorsLength = colors.length;
    for (let j = 0; j < number; j++) {
        temp_colors[j] = colors[j % colorsLength];
    }
    return temp_colors;
};

/**
 * 返回指定的颜色（颜色数组中包含一个颜色值）
 *
 * @param index 调色板颜色数组中某种颜色的下标
 * @returns {Array}
 */
const getSpecifiedColor = index => {
    const temp_colors = [];
    temp_colors[0] = colors[index];
    return temp_colors;
};

// 生成从[min,max]的随机数
// Math.floor(Math.random()*minNum+1); 可以用替换为
// parseInt(Math.random()*(max-min+1)+min,10);
const randomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

module.exports = {
    getRandomColors,
    randomNum,
    getSequentialColors,
    getSpecifiedColor,
};
