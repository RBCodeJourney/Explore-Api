function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = `
        <h4>Post ID: ${comment.postId}</h4>
        <p>ID: ${comment.id}</p>
        <p>Name: ${comment.name}</p>
        <p>Email: ${comment.email}</p>
        <p>Body: ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv)
    }
}

loadComments();