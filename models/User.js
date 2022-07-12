// Define Mongoose
const { Schema, model, Types } = require('mongoose');

//validatemail funnction
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            //set the match property to an array with the regex to validate against and validation error message.
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            }
        ],
    },
    {
        //indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// retrieves the length of the user's friends array field on query
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Initialize the User model using userSchema
const User = model('user', userSchema);
module.exports = User;

