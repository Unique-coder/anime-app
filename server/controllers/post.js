// For setting up all our routes endpoints. This way, we dont crowd out route/post file but import all the route endpoints in our controller/ post file to the routes folder

export const getPosts = (req, res) => {
  res.send("This Works");
};
