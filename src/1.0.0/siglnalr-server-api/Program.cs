using siglnalr_server_api.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSignalR();

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });

    /*
    // adding a custom policy

    options.AddPolicy(name: "AllowedSpecificOrigins",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000");
        });
    */
});

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseCors();

/*
// using a custom policy

app.UseCors("AllowedSpecificOrigins");
*/

app.UseAuthorization();

app.MapControllers();

app.MapHub<ChatHub>("/chat");

app.Run();
