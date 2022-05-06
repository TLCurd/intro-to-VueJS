/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      movies: ["Pulp Fiction", "A River Runs Through It", "Drive", "The Neon Demon", "Interstellar"],
      movieTitle: ""
    };
  },
  methods: {
    addMovie: function() {
      console.log("adding movies...");
      console.log(this.movies.push.movieTitle);
      console.log(this.movieTitle = "");
    }
  }
});

