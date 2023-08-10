const countComments = () => {
    const commentItems = document.querySelectorAll('.comment-item');
    const totalCommentsCount = commentItems.length;

    const commentCountElement = document.querySelector('.comment-count');
    if (commentCountElement) {
        commentCountElement.textContent = `Total Comments: ${totalCommentsCount}`;
    }
};

export default countComments;