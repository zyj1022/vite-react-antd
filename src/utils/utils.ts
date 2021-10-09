import omit from 'omit.js'

/**
 * 数组对象去重
 * @arr 数组
 * @key 去重关键字，默认为key
 * arrObjectReduce(arr, 'id')
 */
export function arrObjectReduce(arr: Array<any>, key: string = 'key') {
  let obj: any = {}
  return arr.reduce((cur, next) => {
    obj[next[key]] ? '' : (obj[next[key]] = true && cur.push(next))
    return cur
  }, [])
}
/**
 * @desc 函数防抖 非立即执行
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
export function debounce(func: Function, wait: number) {
  let timeout: any
  return function () {
    const _this = this
    const _args = arguments
    // console.log('debounce', _this, _args);
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(_this, _args)
    }, wait)
  }
}

export function throttle(func: Function, wait: number) {
  let timeout: any
  return function () {
    let _this = this
    let _args = arguments
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null
        func.apply(_this, _args)
      }, wait)
    }
  }
}

// 树的扁平化遍历
/**
 * [generateList description]
 * @param  {[type]} data [源数组]
 * @param  {[type]} flat [拍平后的数组]
 */
export function generateList(data, flat) {
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    flat.push(omit(node, ['children']))
    if (node.children) {
      generateList(node.children, flat)
    }
  }
  return flat
}

/**
 * 格式化埋点参数
 * http://stream.jd.com/
 * @param {*} params 埋点参数
 * log(
      ...streamParams({
          funcPath: '5',
          selectedItem: record.orderId
      })
    );
 */
export function streamParams(params: any) {
  if (!params.appId) {
    params.appId = 'jc2m_select_1630983922886'; // 埋点ID
  }

  const sortedParams = {
    appId: params.appId,
    funcPath: params.funcPath,
    selectedItem: params.selectedItem,
  };

  const obj = sortedParams;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key] && params[key] != '-') {
      obj[key] = params[key];
    } else {
      obj[key] = '-';
    }
  }

  return Object.values(obj);
}

// 埋点
export const onEventTrack = (funcPath: any, selectedItem='') => {
  const params = streamParams({
    funcPath,
    selectedItem,
  });
  log(...params);
};

export function trace(targetName, param, logName = 'log') {
  // 开发环境调试传入值
  if (window.location.search.indexOf(`${log}`) > -1 || window.location.hash.indexOf(`${log}`) > -1) {
    console.log(`${targetName}`, param);
  }
}

// 判断是否全部为空格
export function isAllSpace(str: string) {
  if (str == '') return true;
  let reg = '^[ ]+$';
  return new RegExp(reg).test(str);
}

// 去除字符串中首尾的空格
export function trimStrSpace(str: string) {
  if (str) {
    str = str.replace(/^\s+/, '');
    for (let i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }
  }
  return str;
}

/**
@ function:检测特殊字符
@ param
@ str:待检测字符串
*/
export function isHasSpecialStr(str: string) {
  var myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;
  if (myReg.test(str)) {
    return true;
  }
  return false;
}

/**
 * 数组对象升降序方法
 * @param {*} key 用于排序的数组的key值
 * @param {*} desc 布尔值，为true是升序排序，false是降序排序
 * 使用 // arr.sort(compare('age'));
 */
export function compare(key: string, desc = true) {
  return function (a: any, b: any) {
    let value1 = a[key];
    let value2 = b[key];
    if (desc == true) {
      return value1 - value2; // 升序排列
    } else {
      return value2 - value1; // 降序排列
    }
  };
}

// object 排序
export function objCompare(key: string) {
  return (obj1, obj2) => {
    let value1 = parseFloat(obj1[key]);
    let value2 = parseFloat(obj2[key]);
    if (value2 > value1) {
      return 1;
    } else if (value2 < value1) {
      return -1;
    } else {
      return 0;
    }
  };
}

/**
 *
 * @param {string} str
 */
export function UrlSearch(str: string) {
  var name, value;
  var str = location.href; //取得整个地址栏
  var num = str.indexOf('?');
  str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
  var arr = str.split('&'); //各个参数放到数组里
  for (var i = 0; i < arr.length; i++) {
    num = arr[i].indexOf('=');
    if (num > 0) {
      name = arr[i].substring(0, num);
      value = arr[i].substr(num + 1);
      this[name] = value;
    }
  }
}
