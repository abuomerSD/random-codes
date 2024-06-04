using GameStore.Api.EndPoints;
using GameStore.Api.Respositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IGameRepository, InMemGameRepository>();

var app = builder.Build();

app.MapGamesEndpoints();

app.Run();