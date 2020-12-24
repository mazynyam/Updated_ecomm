const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || 'hgudj834intu845y6Zkor3iujruh437y45nfu4h5u',
    emailSettings:{
        from: "noreply@kiriikou.com"
    },
    DB_URI: 'mongodb+srv://Phinehas:Phinehas86@cluster0.1gctm.mongodb.net/kiriikou-ecommerce?retryWrites=true&w=majority',
    APP_NAME:'Kiriikou',
    SERVER_NAME:'KIRIIKOU-API',
    SERVER_VERSION:'1.0.0',
    BASE_URL:'http://localhost',
    APP_URL:'http://localhost:4000',
    SENDGRID_API_KEY:''
}

export default config
