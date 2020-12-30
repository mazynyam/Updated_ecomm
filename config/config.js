const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "gdjh47rniof87gfjdnbgjbvh36fjbew4r7fnmbHI8rj0hygf",
  // mongoUri: process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/kiriikou-db',
  mongoUri:'mongodb+srv://Phinehas:Phinehas86@cluster0.1gctm.mongodb.net/kiriikou-db?retryWrites=true&w=majority',
  stripe_connect_test_client_id: '',
  stripe_test_secret_key: '',
  stripe_test_api_key: ''
}

export default config
