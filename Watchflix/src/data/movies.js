const movies = [
  // 🎬 Action
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8, popularity: 95, cast: "Leonardo DiCaprio, Joseph Gordon-Levitt", image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg" },
  { id: 2, title: "The Dark Knight", genre: "Action", rating: 9.0, popularity: 100, cast: "Christian Bale, Heath Ledger", image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg" },
  { id: 3, title: "Avengers: Endgame", genre: "Action", rating: 8.4, popularity: 98, cast: "Robert Downey Jr., Chris Evans", image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg" },
  { id: 4, title: "Spider-Man: No Way Home", genre: "Action", rating: 8.3, popularity: 94, cast: "Tom Holland, Zendaya", image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg" },
  { id: 5, title: "Iron Man", genre: "Action", rating: 7.9, popularity: 90, cast: "Robert Downey Jr., Gwyneth Paltrow", image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" },

  // 🎭 Drama
  { id: 6, title: "Joker", genre: "Drama", rating: 8.5, popularity: 92, cast: "Joaquin Phoenix", image: "https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg" },
  { id: 7, title: "Fight Club", genre: "Drama", rating: 8.8, popularity: 89, cast: "Brad Pitt, Edward Norton", image: "https://www.tallengestore.com/cdn/shop/products/Fight_Club_-_Brad_Pitt_-_Ed_Norton_-_Hollywood_Cult_Classic_English_Movie_Poster_dbc8d08e-f58f-4fc8-bccc-68e5f58a50e9.jpg?v=1591602949" },
  { id: 8, title: "The Godfather", genre: "Drama", rating: 9.2, popularity: 93, cast: "Marlon Brando, Al Pacino", image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg" },
  { id: 9, title: "Shutter Island", genre: "Drama", rating: 8.2, popularity: 85, cast: "Leonardo DiCaprio, Mark Ruffalo", image: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 10, title: "Pulp Fiction", genre: "Drama", rating: 8.9, popularity: 91, cast: "John Travolta, Uma Thurman, Samuel L. Jackson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujMpP607flBWx_5xRe_Ak-I-gOViO-HzoYQ&s" },

  // 💕 Romance
  { id: 11, title: "Titanic", genre: "Romance", rating: 7.9, popularity: 96, cast: "Leonardo DiCaprio, Kate Winslet", image: "https://m.media-amazon.com/images/I/71ZJ8am0mKL._AC_SL1340_.jpg" },

  // 🌌 Sci-Fi
  { id: 12, title: "Interstellar", genre: "Sci-Fi", rating: 8.6, popularity: 94, cast: "Matthew McConaughey, Anne Hathaway", image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg" },
  { id: 13, title: "Guardians of the Galaxy", genre: "Sci-Fi", rating: 8.0, popularity: 87, cast: "Chris Pratt, Zoe Saldana", image: "https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

  // 🎨 Animation
  { id: 14, title: "Frozen", genre: "Animation", rating: 7.5, popularity: 89, cast: "Kristen Bell, Idina Menzel", image: "https://m.media-amazon.com/images/I/71jwCBe30hL._AC_SL1000_.jpg" },
  { id: 15, title: "Moana", genre: "Animation", rating: 7.6, popularity: 85, cast: "Auli'i Cravalho, Dwayne Johnson", image: "https://m.media-amazon.com/images/I/81rjqvHFtkL.jpg" },
  { id: 16, title: "Finding Nemo", genre: "Animation", rating: 8.1, popularity: 90, cast: "Albert Brooks, Ellen DeGeneres", image: "https://i.pinimg.com/736x/77/21/be/7721be55883ada6ad5f01a459b40ec8f.jpg" },
  { id: 17, title: "Toy Story", genre: "Animation", rating: 8.3, popularity: 92, cast: "Tom Hanks, Tim Allen", image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg" },

  // 🧙 Fantasy
  { id: 18, title: "Doctor Strange", genre: "Fantasy", rating: 7.5, popularity: 88, cast: "Benedict Cumberbatch, Rachel McAdams", image: "https://cdn.europosters.eu/image/750/33477.jpg" },
  { id: 19, title: "Avatar", genre: "Fantasy", rating: 7.8, popularity: 95, cast: "Sam Worthington, Zoe Saldana", image: "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg" },
  { id: 20, title: "Black Panther", genre: "Fantasy", rating: 7.3, popularity: 93, cast: "Chadwick Boseman, Michael B. Jordan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkAp-UQJV3AeqakST2qqQGTyIRJs98CHLwQ&s" },
];

export default movies;
