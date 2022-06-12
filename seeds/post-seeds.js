const { Post } = require('../models')
const postdata = [
    {
        title: 'New tech',
        content: 'the new electric cars are gettin smarter',
        user_id: '1'
    }

]

const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts