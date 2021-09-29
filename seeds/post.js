const { Post } = require('../models');

const postData = [
    {
        title: '',
        post_comment: '',
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;