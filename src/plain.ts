// const resolvers = {
//   // registering a mutation
//   Mutation: {
//     // add new blog mutation to create new blog
//     addNewBlog(_, { content, author }) {
//       const blog = {
//         id: blogs.length + 1,
//         content,
//         author,
//       };
//       // storing blog in the local blogs array
//       blogs.push(blog);

//       // once a blog is being created, we need to push the event so that frontend can catch it
//       publishNewBlogAdded(content, author, blog.id);
//       return blog;
//     },
//   },
//   // registering Qyery
//   Query: {
//     getBlogs() {
//       // return all blogs
//       return blogs;
//     },
//   },
//   // setting up subscription
//   Subscription: {
//     // newBlog subscription
//     newBlog: {
//       subscribe: () => pubSub.asyncIterator([blogs_created]),
//     },
//   },
// };


// const publishNewBlogAdded = (content, author, id) => {
//   pubSub.publish(blogs_created, {
//     newBlog: { content, author, id },
//   });
// };
