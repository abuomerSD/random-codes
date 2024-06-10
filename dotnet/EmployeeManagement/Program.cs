using Microsoft.AspNetCore.Http.Extensions;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var key1 = app.Configuration.GetValue<string>("MyKey");

app.MapGet("/", () => key1);

// app.UseAuthentication();
// app.UseAuthorization();

app.Use(
    async (context, next) =>
    {
        Console.WriteLine("middleware1");
        await next.Invoke();
    }
);

app.Use(
    async (context, next) =>
    {
        Console.WriteLine("middleware2");
        await context.Response.WriteAsync("middleware2");
        await next.Invoke();
    }
);

app.Run();
