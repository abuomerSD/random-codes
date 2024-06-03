using GameStore.Api.Entities;
// using Microsoft.AspNetCore.Builder;

namespace GameStore.Api.EndPoints;

public static class GamesEndPoint
{
    const string GetGameEntPointName = "GetGame";
    static List<Game> games = new() {
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

    
    public static RouteGroupBuilder MapGamesEndpoints(this IEndpointRouteBuilder routes)
    {   
        var group = routes.MapGroup("/games")
                .WithParameterValidation();
    
        group.MapGet("/", () => games);

        group.MapGet("/{id}", (int id) => 
        {
            Game? game = games.Find(game => game.Id == id);
            if (game is null){
                return Results.NotFound();
            }
            return Results.Ok(game);
        }).WithName(GetGameEntPointName);

        group.MapPost("/", (Game game)=> {
            game.Id = games.Max(game => game.Id) + 1;
            games.Add(game);

            return Results.CreatedAtRoute(GetGameEntPointName, new {id = game.Id}, game);
        });

        group.MapPut("/{id}", (int id, Game upddatedGame)=> {
            Game? existingGame = games.Find(game => game.Id == id);
            if(existingGame is null)
            {
                return Results.NotFound();
            }
            
            existingGame.Name = upddatedGame.Name;
            existingGame.Genre = upddatedGame.Genre;
            existingGame.Price = upddatedGame.Price;
            existingGame.ReleaseDate = upddatedGame.ReleaseDate;
            existingGame.ImageUri = upddatedGame.ImageUri;

            return Results.NoContent();
        });

        group.MapDelete("/{id}", (int id) => 
        {
            Game? game = games.Find(game => game.Id == id);
            if(game is not null)
            {
                games.Remove(game);
            }
            return Results.NoContent();
        });
    return group;
    }

}
