const movies = [
  // 🎬 Action
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8, popularity: 95, cast: "Leonardo DiCaprio, Joseph Gordon-Levitt", image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg" },
  { id: 2, title: "The Dark Knight", genre: "Action", rating: 9.0, popularity: 100, cast: "Christian Bale, Heath Ledger", image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg" },
  { id: 3, title: "Avengers: Endgame", genre: "Action", rating: 8.4, popularity: 98, cast: "Robert Downey Jr., Chris Evans", image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg" },
  { id: 4, title: "Spider-Man: No Way Home", genre: "Action", rating: 8.3, popularity: 94, cast: "Tom Holland, Zendaya", image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg" },
  { id: 5, title: "Iron Man", genre: "Action", rating: 7.9, popularity: 90, cast: "Robert Downey Jr., Gwyneth Paltrow", image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" },
  { id: 21, title: "Die Hard", genre: "Action", rating: 8.2, popularity: 98, cast: "Bruce Willis", image: "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_.jpg" },
{ id: 22, title: "Mad Max: Fury Road", genre: "Action", rating: 8.1, popularity: 95, cast: "Tom Hardy, Charlize Theron", image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg" },
{ id: 23, title: "John Wick", genre: "Action", rating: 7.4, popularity: 92, cast: "Keanu Reeves", image: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg" },
{ id: 24, title: "Terminator 2: Judgment Day", genre: "Action", rating: 8.5, popularity: 96, cast: "Arnold Schwarzenegger, Linda Hamilton", image: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/01/IMG_3183.jpeg" },
{ id: 25, title: "The Matrix", genre: "Action", rating: 8.7, popularity: 97, cast: "Keanu Reeves, Laurence Fishburne", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Matrix.png/250px-The_Matrix.png" },
{ id: 26, title: "Raiders of the Lost Ark", genre: "Action", rating: 8.5, popularity: 94, cast: "Harrison Ford", image: "https://filmartgallery.com/cdn/shop/files/Raiders-of-the-Lost-Ark-Vintage-Movie-Poster-Original_e341141b.jpg?v=1751080044" },
{ id: 27, title: "Aliens", genre: "Action", rating: 8.3, popularity: 91, cast: "Sigourney Weaver", image: "https://m.media-amazon.com/images/I/91TYB8gep+L.jpg" },
{ id: 28, title: "Enter the Dragon", genre: "Action", rating: 7.7, popularity: 90, cast: "Bruce Lee", image: "https://m.media-amazon.com/images/M/MV5BZDAyYjAwNmMtMjM5OC00NTc5LThmNjAtOTUxODQxOWYwOTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
{ id: 29, title: "Police Story", genre: "Action", rating: 7.6, popularity: 88, cast: "Jackie Chan", image: "https://m.media-amazon.com/images/M/MV5BZTMxMWUxNjctOGNiOC00MzRkLWI1NjktZWUzOGJiZTM2ZDg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
{ id: 30, title: "Hard Boiled", genre: "Action", rating: 8.1, popularity: 87, cast: "Chow Yun-fat", image: "https://cdn.posteritati.com/posters/000/000/004/279/hard-boiled-md-web.jpg" },


  // 🎭 Drama
  { id: 6, title: "Joker", genre: "Drama", rating: 8.5, popularity: 92, cast: "Joaquin Phoenix", image: "https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg" },
  { id: 7, title: "Fight Club", genre: "Drama", rating: 8.8, popularity: 89, cast: "Brad Pitt, Edward Norton", image: "https://www.tallengestore.com/cdn/shop/products/Fight_Club_-_Brad_Pitt_-_Ed_Norton_-_Hollywood_Cult_Classic_English_Movie_Poster_dbc8d08e-f58f-4fc8-bccc-68e5f58a50e9.jpg?v=1591602949" },
  { id: 8, title: "The Godfather", genre: "Drama", rating: 9.2, popularity: 93, cast: "Marlon Brando, Al Pacino", image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg" },
  { id: 9, title: "Shutter Island", genre: "Drama", rating: 8.2, popularity: 85, cast: "Leonardo DiCaprio, Mark Ruffalo", image: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 10, title: "Pulp Fiction", genre: "Drama", rating: 8.9, popularity: 91, cast: "John Travolta, Uma Thurman, Samuel L. Jackson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujMpP607flBWx_5xRe_Ak-I-gOViO-HzoYQ&s" },
  { id: 31, title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, popularity: 98, cast: "Tim Robbins, Morgan Freeman", image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg" },
{ id: 32, title: "Schindler's List", genre: "Drama", rating: 8.9, popularity: 96, cast: "Liam Neeson, Ben Kingsley", image: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg" },
{ id: 33, title: "12 Angry Men", genre: "Drama", rating: 9.0, popularity: 94, cast: "Henry Fonda", image: "https://storage.googleapis.com/pod_public/1300/262454.jpg" },
{ id: 34, title: "There Will Be Blood", genre: "Drama", rating: 8.2, popularity: 92, cast: "Daniel Day-Lewis", image: "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_FMjpg_UX1000_.jpg" },
{ id: 35, title: "A Separation", genre: "Drama", rating: 8.3, popularity: 90, cast: "Leila Hatami", image: "https://m.media-amazon.com/images/M/MV5BMDM0ZWRmMzctM2M5ZS00ZjU0LWIxN2MtNWNlNGY1ZDhjMDVhXkEyXkFqcGc@._V1_.jpg" },
{ id: 36, title: "Citizen Kane", genre: "Drama", rating: 8.3, popularity: 88, cast: "Orson Welles", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/960px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg" },
{ id: 37, title: "Casablanca", genre: "Drama", rating: 8.5, popularity: 89, cast: "Humphrey Bogart, Ingrid Bergman", image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg" },
{ id: 38, title: "Uncut Gems", genre: "Drama", rating: 7.4, popularity: 87, cast: "Adam Sandler", image: "https://m.media-amazon.com/images/M/MV5BNmI0YjA5NjItYzExYi00NzkxLTkxNDctNGJjYTZhM2M0NDQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
{ id: 39, title: "Manchester by the Sea", genre: "Drama", rating: 7.8, popularity: 85, cast: "Casey Affleck", image: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_.jpg" },
{ id: 40, title: "Brokeback Mountain", genre: "Drama", rating: 7.7, popularity: 86, cast: "Heath Ledger, Jake Gyllenhaal", image: "https://m.media-amazon.com/images/M/MV5BMzM4OWFjMTMtZjNjOS00YmU3LTlhY2MtNjFiMTVkN2Y1OTZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },


  // 💕 Romance
  { id: 11, title: "Titanic", genre: "Romance", rating: 7.9, popularity: 96, cast: "Leonardo DiCaprio, Kate Winslet", image: "https://m.media-amazon.com/images/I/71ZJ8am0mKL._AC_SL1340_.jpg" },
  { id: 41, title: "La La Land", genre: "Romance", rating: 8.0, popularity: 92, cast: "Ryan Gosling, Emma Stone", image: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png" },
{ id: 42, title: "The Notebook", genre: "Romance", rating: 7.9, popularity: 90, cast: "Ryan Gosling, Rachel McAdams", image: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg" },
{ id: 43, title: "Pride & Prejudice", genre: "Romance", rating: 7.8, popularity: 87, cast: "Keira Knightley, Matthew Macfadyen", image: "https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg" },
{ id: 44, title: "Before Sunrise", genre: "Romance", rating: 8.1, popularity: 88, cast: "Ethan Hawke, Julie Delpy", image: "https://upload.wikimedia.org/wikipedia/en/d/da/Before_Sunrise_poster.jpg" },
{ id: 45, title: "500 Days of Summer", genre: "Romance", rating: 7.7, popularity: 85, cast: "Joseph Gordon-Levitt, Zooey Deschanel", image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Five_hundred_days_of_summer.jpg" },
{ id: 46, title: "Silver Linings Playbook", genre: "Romance", rating: 7.7, popularity: 86, cast: "Bradley Cooper, Jennifer Lawrence", image: "https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_.jpg" },
{ id: 47, title: "Romeo + Juliet", genre: "Romance", rating: 6.7, popularity: 80, cast: "Leonardo DiCaprio, Claire Danes", image: "https://m.media-amazon.com/images/M/MV5BZjBhYjkxN2EtNDc1Yy00NTViLTkxMjQtMDYxMzM0MzA3NGQ4XkEyXkFqcGc@._V1_.jpg" },
{ id: 48, title: "Call Me by Your Name", genre: "Romance", rating: 7.9, popularity: 84, cast: "Timothée Chalamet, Armie Hammer", image: "https://image.tmdb.org/t/p/original/gXiE0WveDnT0n5J4sW9TMxXF4oT.jpg" },
{ id: 49, title: "Eternal Sunshine of the Spotless Mind", genre: "Romance", rating: 8.3, popularity: 89, cast: "Jim Carrey, Kate Winslet", image: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg" },
{ id: 50, title: "A Walk to Remember", genre: "Romance", rating: 7.4, popularity: 83, cast: "Mandy Moore, Shane West", image: "https://m.media-amazon.com/images/M/MV5BYjkxZWE0YjMtYTk2OS00ZmFjLTk2YjEtY2M3MGY4MzE4MGNkXkEyXkFqcGc@._V1_.jpg" },


  // 🌌 Sci-Fi
  { id: 12, title: "Interstellar", genre: "Sci-Fi", rating: 8.6, popularity: 94, cast: "Matthew McConaughey, Anne Hathaway", image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg" },
  { id: 13, title: "Guardians of the Galaxy", genre: "Sci-Fi", rating: 8.0, popularity: 87, cast: "Chris Pratt, Zoe Saldana", image: "https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 51, title: "The Matrix Reloaded", genre: "Sci-Fi", rating: 7.2, popularity: 88, cast: "Keanu Reeves, Carrie-Anne Moss", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Poster_-_The_Matrix_Reloaded.jpg" },
{ id: 52, title: "Blade Runner 2049", genre: "Sci-Fi", rating: 8.0, popularity: 91, cast: "Ryan Gosling, Harrison Ford", image: "https://media.posterlounge.com/img/products/710000/706502/706502_poster.jpg" },
{ id: 53, title: "Arrival", genre: "Sci-Fi", rating: 7.9, popularity: 87, cast: "Amy Adams, Jeremy Renner", image: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg" },
{ id: 54, title: "The Martian", genre: "Sci-Fi", rating: 8.0, popularity: 90, cast: "Matt Damon", image: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg" },
{ id: 55, title: "Star Wars: A New Hope", genre: "Sci-Fi", rating: 8.6, popularity: 96, cast: "Mark Hamill, Harrison Ford", image: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg" },
{ id: 56, title: "Star Wars: The Empire Strikes Back", genre: "Sci-Fi", rating: 8.7, popularity: 97, cast: "Mark Hamill, Carrie Fisher", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg/250px-The_Empire_Strikes_Back_%281980_film%29.jpg" },
{ id: 57, title: "Dune (2021)", genre: "Sci-Fi", rating: 8.0, popularity: 94, cast: "Timothée Chalamet, Zendaya", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg" },
{ id: 58, title: "Ex Machina", genre: "Sci-Fi", rating: 7.7, popularity: 85, cast: "Alicia Vikander, Oscar Isaac", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Ex-machina-uk-poster.jpg" },
{ id: 59, title: "District 9", genre: "Sci-Fi", rating: 7.9, popularity: 86, cast: "Sharlto Copley", image: "https://upload.wikimedia.org/wikipedia/en/d/d7/District_nine_ver2.jpg" },
{ id: 60, title: "Edge of Tomorrow", genre: "Sci-Fi", rating: 7.9, popularity: 89, cast: "Tom Cruise, Emily Blunt", image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Edge_of_Tomorrow_Poster.jpg" },


  // 🎨 Animation
  { id: 14, title: "Frozen", genre: "Animation", rating: 7.5, popularity: 89, cast: "Kristen Bell, Idina Menzel", image: "https://m.media-amazon.com/images/I/71jwCBe30hL._AC_SL1000_.jpg" },
  { id: 15, title: "Moana", genre: "Animation", rating: 7.6, popularity: 85, cast: "Auli'i Cravalho, Dwayne Johnson", image: "https://m.media-amazon.com/images/I/81rjqvHFtkL.jpg" },
  { id: 16, title: "Finding Nemo", genre: "Animation", rating: 8.1, popularity: 90, cast: "Albert Brooks, Ellen DeGeneres", image: "https://i.pinimg.com/736x/77/21/be/7721be55883ada6ad5f01a459b40ec8f.jpg" },
  { id: 17, title: "Toy Story", genre: "Animation", rating: 8.3, popularity: 92, cast: "Tom Hanks, Tim Allen", image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg" },
  { id: 61, title: "Up", genre: "Animation", rating: 8.2, popularity: 93, cast: "Ed Asner, Christopher Plummer", image: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg" },
{ id: 62, title: "Inside Out", genre: "Animation", rating: 8.1, popularity: 91, cast: "Amy Poehler, Phyllis Smith", image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg" },
{ id: 63, title: "Zootopia", genre: "Animation", rating: 8.0, popularity: 89, cast: "Ginnifer Goodwin, Jason Bateman", image: "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg" },
{ id: 64, title: "Coco", genre: "Animation", rating: 8.4, popularity: 92, cast: "Anthony Gonzalez, Gael García Bernal", image: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg" },
{ id: 65, title: "Ratatouille", genre: "Animation", rating: 8.1, popularity: 90, cast: "Patton Oswalt, Ian Holm", image: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg" },
{ id: 66, title: "The Lion King", genre: "Animation", rating: 8.5, popularity: 96, cast: "Matthew Broderick, Jeremy Irons", image: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg" },
{ id: 67, title: "The Incredibles", genre: "Animation", rating: 8.0, popularity: 88, cast: "Craig T. Nelson, Holly Hunter", image: "https://lumiere-a.akamaihd.net/v1/images/p_theincredibles_19751_52f1f47a.jpeg" },
{ id: 68, title: "How to Train Your Dragon", genre: "Animation", rating: 8.1, popularity: 87, cast: "Jay Baruchel, Gerard Butler", image: "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg" },
{ id: 69, title: "Kung Fu Panda", genre: "Animation", rating: 7.6, popularity: 85, cast: "Jack Black, Dustin Hoffman", image: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg" },
{ id: 70, title: "Big Hero 6", genre: "Animation", rating: 7.8, popularity: 86, cast: "Scott Adsit, Ryan Potter", image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Big_Hero_6_%28film%29_poster.jpg" },


  // 🧙 Fantasy
  { id: 18, title: "Doctor Strange", genre: "Fantasy", rating: 7.5, popularity: 88, cast: "Benedict Cumberbatch, Rachel McAdams", image: "https://cdn.europosters.eu/image/750/33477.jpg" },
  { id: 19, title: "Avatar", genre: "Fantasy", rating: 7.8, popularity: 95, cast: "Sam Worthington, Zoe Saldana", image: "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg" },
  { id: 20, title: "Black Panther", genre: "Fantasy", rating: 7.3, popularity: 93, cast: "Chadwick Boseman, Michael B. Jordan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkAp-UQJV3AeqakST2qqQGTyIRJs98CHLwQ&s" },
  { id: 71, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", rating: 7.6, popularity: 95, cast: "Daniel Radcliffe, Emma Watson", image: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg" },
{ id: 72, title: "Harry Potter and the Prisoner of Azkaban", genre: "Fantasy", rating: 7.9, popularity: 93, cast: "Daniel Radcliffe, Rupert Grint", image: "https://static.posters.cz/image/1300/161981.jpg" },
{ id: 73, title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy", rating: 8.8, popularity: 97, cast: "Elijah Wood, Ian McKellen", image: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg" },
{ id: 74, title: "The Lord of the Rings: The Return of the King", genre: "Fantasy", rating: 9.0, popularity: 98, cast: "Elijah Wood, Viggo Mortensen", image: "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
{ id: 75, title: "The Hobbit: An Unexpected Journey", genre: "Fantasy", rating: 7.8, popularity: 89, cast: "Martin Freeman, Ian McKellen", image: "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg" },
{ id: 76, title: "Pan's Labyrinth", genre: "Fantasy", rating: 8.2, popularity: 90, cast: "Ivana Baquero, Sergi López", image: "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg" },
{ id: 77, title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", genre: "Fantasy", rating: 6.9, popularity: 85, cast: "Georgie Henley, William Moseley", image: "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg" },
{ id: 78, title: "Fantastic Beasts and Where to Find Them", genre: "Fantasy", rating: 7.3, popularity: 86, cast: "Eddie Redmayne", image: "https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_.jpg" },
{ id: 79, title: "Maleficent", genre: "Fantasy", rating: 7.0, popularity: 84, cast: "Angelina Jolie, Elle Fanning", image: "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_.jpg" },
{ id: 80, title: "The Shape of Water", genre: "Fantasy", rating: 7.3, popularity: 88, cast: "Sally Hawkins, Michael Shannon", image: "https://upload.wikimedia.org/wikipedia/en/3/37/The_Shape_of_Water_%28film%29.png" },

];

export default movies;
