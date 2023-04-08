const mongoose = require('mongoose')

const messageModel = mosgoose.Schema({
    sender: {
        type: mongoose.schema.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
        trim: true,
    },
    chat: {
        type: mongoose.schema.Types.ObjectId,
        ref: "Chat",
    }
},
{
    timestamps : true
}
)

const message = mongoose.model("Mesaages", messageModel)

module.exports = message