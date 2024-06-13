using Microsoft.AspNetCore.Http.Extensions;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var key1 = app.Configuration.GetValue<string>("MyKey");

app.MapGet(
    "/",
    () =>
    {
        throw new Exception("test ex");
    }
);

// app.UseAuthentication();
// app.UseAuthorization();
// DefaultFilesOptions defaultFilesOptions = new DefaultFilesOptions();
// defaultFilesOptions.DefaultFileNames.Clear();
// defaultFilesOptions.DefaultFileNames.Add("foo.html");

// app.UseDefaultFiles(defaultFilesOptions);

// app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
