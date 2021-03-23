const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const adminSchema = mongoose.Schema({
	adminname: {
		type: String, 
		required: true
	},
	mail: {
		type: String,
		unique: true, 
		required: true 
	},
	password: {
		type: String,
		required: true
	}
},{
	timestamps: true
})

//BEFORE SAVING THE USER, HASH THE PASSWORD
adminSchema.pre('save',async function(next){
    //IF THIS MIDDLEWEAR IS REACHED FOR UPDATE AND PASSWORD IS NOT MODIFIED, CONTINUE
    if(!this.isModified('password')){
        next()
    }
    //ELSE HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})

//LOCAL METHOD TO CHECK WHETHER THE ENTERED PASSWORD AND THE HASHED PASSWORD STORED IN DATABASE ARE SAME 
adminSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model('Admin',adminSchema);