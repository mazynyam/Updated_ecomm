const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || 'hgudj834intu845y6Zkor3iujruh437y45nfu4h5u',
    emailSettings:{
        from: "noreply@kiriikou.com"
    },
    DB_URI: 'mongodb://localhost:27017/kiriikou-db',
    APP_NAME:'Kiriikou',
    SERVER_NAME:'KIRIIKOU-API',
    SERVER_VERSION:'1.0.0',
    BASE_URL:'http://localhost',
    APP_URL:'http://localhost:4000',
    SENDGRID_API_KEY:''
}

export default config