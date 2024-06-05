using GameStore.Api.Dtos;
using GameStore.Api.Entities;
using GameStore.Api.Respositories;
// using Microsoft.AspNetCore.Builder;

namespace GameStore.Api.EndPoints;

public static class GamesEndPoint
{
    const string GetGameEntPointName = "GetGame";

    
    public static RouteGroupBuilder MapGamesEndpoints(this IEndpointRouteBuilder routes)
    {   

        var group = routes.MapGroup("/games")
                .WithParameterValidation();
    
        group.MapGet("/", (IGameRepository repository) => repository.GetALL().Select(game => game.AsDto()));

        group.MapGet("/{id}", (IGameRepository repository, int id) => 
        {
            Game? game = repository.Get(id);
            if (game is null){
                return Results.NotFound();
            }
            return Results.Ok(game.AsDto());
        }).WithName(GetGameEntPointName);

        group.MapPost("/", (IGameRepository repository, CreateGameDto gameDto)=> {
            Game game  = new(){
                Name = gameDto.Name,
                Genre = gameDto.Genre,
                Price = gameDto.Price,
                ReleaseDate = gameDto.ReleaseDate,
                ImageUri = gameDto.ImageUri
            };
            repository.Create(game);

            return Results.CreatedAtRoute(GetGameEntPointName, new {id = game.Id}, game);
        });

        group.MapPut("/{id}", (IGameRepository repository, int id, Game upddatedGame)=> {
            Game? existingGame = repository.Get(id);
            if(existingGame is null)
            {
                return Results.NotFound();
            }
            
            existingGame.Name = upddatedGame.Name;
            existingGame.Genre = upddatedGame.Genre;
            existingGame.Price = upddatedGame.Price;
            existingGame.ReleaseDate = upddatedGame.ReleaseDate;
            existingGame.ImageUri = upddatedGame.ImageUri;

            repository.Update(existingGame);

            return Results.NoContent();
        });

        group.MapDelete("/{id}", (IGameRepository repository, int id) => 
        {
            Game? game = repository.Get(id);
            if(game is not null)
            {
                repository.Delete(id);
            }
            return Results.NoContent();
        });
    return group;
    }

}
