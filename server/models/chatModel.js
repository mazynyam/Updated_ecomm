import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ChatSchema = mongoose.Schema({
    message:{
        type:String
    },
    sender:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    type:{
        type: String
    }
}, {timestamps: true})

export default mongoose.model('Chat', ChatSchema)