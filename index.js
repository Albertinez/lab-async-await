const postList = document.getElementById("post-list");

/**
 * Display posts on the page
 * @param {Array} posts
 */
function displayPosts(posts) {
  posts.forEach((post) => {
    const li = document.createElement("li");

    const title = document.createElement("h1");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

/**
 * Fetch posts using async/await
 */
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the async function
fetchPosts();
