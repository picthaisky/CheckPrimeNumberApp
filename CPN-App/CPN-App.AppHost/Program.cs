var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.CPN_App_Server>("cpn-app-server");

builder.Build().Run();
