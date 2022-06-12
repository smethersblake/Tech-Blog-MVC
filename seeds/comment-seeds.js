const { Comment } = require('../models')
const commentdata = [
    {
        comment_text: 'the tech out there is awsome',
        user_id: 2,
        post_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentdata)

module.exports = seedComments