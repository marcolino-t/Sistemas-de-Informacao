@echo off
echo 🚀 Iniciando Lista de Compras - Backend e Frontend
echo.

echo 🔧 Iniciando Backend (Go) na porta 8080...
start "Backend API" cmd /k "cd backend-api && go run ."

echo ⚛️ Iniciando Frontend (React) na porta 5173...
start "Frontend React" cmd /k "cd lista-de-compras && npm run dev"

echo.
echo ✅ Projetos iniciados!
echo 📱 Frontend: http://localhost:5173
echo 🔌 Backend: http://localhost:8080
echo.
echo 💡 Para parar os servidores, feche as janelas do CMD
pause 