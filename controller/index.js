// User model
const User = require('./User');
// Post model
const Post = require('./Post');
// Comment model
const Comment = require('./Comment');

// User-Post association
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Post-User association
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Comment-User association
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Comment-Post association
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// User-Comment association
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Post-Comment association 
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comment };