using GameStore.Api.Entities;

const string GetGameEntPointName = "GetGame";
List<Game> games = new() {
    new Game {
        Id = 1,
        Name = "Street Fighter II",
        Genre = "Fighting",
        Price = 19.99M,
        ReleaseDate = new DateTime(1991, 2, 1),
        ImageUri = "https://placehold.co/100"
    },
    new Game {
        Id = 2,
        Name = "Final Fantasy 14",
        Genre = "RolePlaying",
        Price = 59.99M,
        ReleaseDate = new DateTime(2010, 9 , 30),
        ImageUri = "https://placehold.co/100",
    },
    new Game {
        Id = 3,
        Name = "Fifa 23",
        Genre = "Sports",
        Price = 69.99M,
        ReleaseDate = new DateTime(2012, 9 , 27),
        ImageUri = "https://placehold.co/100",
    }
};

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/games", () => games);

app.MapGet("/games/{id}", (int id) => 
{
    Game? game = games.Find(game => game.Id == id);
    if (game is null){
        return Results.NotFound();
    }
    return Results.Ok(game);
}).WithName(GetGameEntPointName);

app.MapPost("/games", (Game game)=> {
    game.Id = games.Max(game => game.Id) + 1;
    games.Add(game);

    return Results.CreatedAtRoute(GetGameEntPointName, new {id = game.Id}, game);
});

app.Run();
