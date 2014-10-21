# Start elasticsearch
Start-Process -FilePath ".\start_database.bat"

# Start node.js
Start-Process -FilePath ".\start_server.bat"


