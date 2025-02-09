import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import loader from "sass-loader";

export default {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash].js',
        clean: true,
    },
    module: {
        rules: [
        {
            exclude: /node_modules/,
            test: /\.tsx$/,
            loader: 'babel-loader',
        },
        {
            exclude: /node_modules/,
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
            ]
        },
        {
            exclude: /node_modules/,
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
            test: /\.(png|jpg)$/,
            type: 'asset/resource',
        },
        ],
    },
    devServer: {
        port: 8080,
    },
    plugins: [
      //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
        filename: 'index.html', //Name of file in ./dist/
        template: "./src/index.html", //Name of template in ./src
        scriptLoading:'blocking', // Just use the blocking approach (no modern defer or module)
       }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    ],
};