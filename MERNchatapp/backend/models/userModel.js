const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userModel = mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type:String, required: true, unique: true},
        password: {type:String, required: true},
        pic: {type:String, required: true, default: "https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=o4IRBYcPoOtSH7IVqPQpibAWbjt8W2Q3USXAmIbBNaE="}
    },
    {
        timestamps: true,
    },
)

userModel.pre('save', async function (next){
    if(!this.isModified) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password, salt)
})

userModel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userModel)

module.exports = User