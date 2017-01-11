# react-demo
react router redux


## 安装

### 安装包
cnpm i react react-dom react-router -S

cnpm i redux react-redux redux-logger -S

cnpm i webpack webpack-dev-server open-browser-webpack-plugin html-webpack-plugin -D

cnpm i babel-core babel-preset-es2015 babel-preset-react babel-loader babel-plugin-import -D

cnpm i css-loader style-loader extract-text-webpack-plugin -D

cnpm i file-loader url-loader -D

### 命令
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --progress --colors",
    "release": "webpack  --progress --colors --config webpack.production.config.js"
  },
```

## 技能点
### 热更新
- 安装
cnpm i babel-plugin-react-transform react-transform-hmr -D

- .babelrc
```json
{
  "presets": ["es2015", "react"],
  "env": {
    // only enable it when process.env.NODE_ENV is 'development' or undefined
    "development": {
      "plugins": [["react-transform", {
        "transforms": [{
          "transform": "react-transform-hmr",
          // if you use React Native, pass "react-native" instead:
          "imports": ["react"],
          // this is important for Webpack HMR:
          "locals": ["module"]
        }]
        // note: you can put more transforms into array
        // this is just one of them!
      }]]
    }
  }
}
```
[react 热更新](https://github.com/gaearon/react-transform-hmr)

### 兼容IE
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

- 安装
cnpm i babel-polyfill -S

- require
`require('babel-polyfill')`

基本能兼容到IE9,react v15及以上不再支持IE8

[react IE8](https://github.com/xcatliu/react-ie8)

### 按需加载

- 安装
cnpm i babel-plugin-import -S

- .babelrc
```json
["import",{
    "libraryName":"antd",
    "libraryDirectory": "lib",   // default: lib
    "style": true
},{
    "libraryName": "antd-mobile",
    "libraryDirectory": "component"
}]
```
[antd import](https://github.com/ant-design/babel-plugin-import)

### less css style file extract-text?


### ES7
- stage-0--4

- async yiead等语法





## 生产环境
- 环境变量
  - DefinePlugin
```js
        new webpack.DefinePlugin({//去除控制台警告
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
```

- 压缩js
  - UglifyJsPlugin
```js
        new webpack.DefinePlugin({//去除控制台警告
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
```  

- 去除注释
