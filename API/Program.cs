using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
string policyName ="EnableCorsPolicy";
builder.Services.AddCors(op=>{
    op.AddPolicy(policyName,
    policy=>{
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");                            
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

Console.WriteLine("connection string:" + connectionString);

builder.Services.AddDbContext<StoreContext>(opt => {
    opt.UseSqlite(connectionString);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    Console.WriteLine("IsDevelopment:true");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//app.UseRouting();

app.UseCors(policyName);

app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    var context = scope.ServiceProvider.GetRequiredService<StoreContext>();    

    context.Database.Migrate();
    DbInitializer.Initialize(context);
}
catch (System.Exception ex)
{
    logger.LogError(ex,"Problem migrating data");
}

app.Run();
