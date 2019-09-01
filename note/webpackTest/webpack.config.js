
module.exports = {
    entry: './src/js/entry.js',
    output: {
        filename: '[name].js',
        path: __dirname + '/out',
        publicPath: './out', 
    },
    // // 构建本地服务器
    // devServer: {
    //     contentBase: "./out",        //本地服务器所加载的页面所在的目录
    //     historyApiFallback: true,       //不跳转,单页面开发时有有时，可以直接默认跳转到index
    //     inline: true                    //实时刷新
    // },
    module: {
        rules: [
            {
                test: /.js$/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['url-loader?limit=8192&name=/[name].[ext]']
            }
        ]
    },
    // mode: 'development', //生产模式
    mode: 'production', //发布模式
}