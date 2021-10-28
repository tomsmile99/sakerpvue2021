module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/sakerp21_buildfontend': '/', // บน localhost
    //publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // บน server จริง
    configureWebpack: {
        devtool: 'source-map'
    }
}

//สมมุติเอาไปใส่ใน foloder demovuejs บน xampp จำลอง หากอยุ่บน server จริง จะเปลี่ยนเป็น /public อัตโนมัติ