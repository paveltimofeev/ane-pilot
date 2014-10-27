# Start database elasticsearch
Start-Process -FilePath ".\start_database.bat" 

# Start backend
Start-Process -FilePath ".\start_service.bat"

# Start frontend
Start-Process -FilePath ".\start_server.bat"


