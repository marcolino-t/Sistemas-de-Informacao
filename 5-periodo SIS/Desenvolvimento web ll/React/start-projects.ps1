<#
Script: start-projects.ps1

Descrição:
  Este script automatiza o processo de inicialização do backend (Go) e do frontend (React) do projeto Lista de Compras, abrindo cada serviço em uma nova janela do PowerShell.

Pré-requisitos:
  - PowerShell instalado (recomendado: versão 5 ou superior)
  - Go instalado e configurado no PATH (para rodar o backend)
  - Node.js e npm instalados (para rodar o frontend)
  - As pastas 'backend-api' e 'lista-de-compras' devem estar presentes na raiz do projeto

Como usar:
  1. Abra o PowerShell na pasta raiz do projeto (onde está este script).
  2. Execute o comando:
     ./start-projects.ps1
  3. O script irá:
     - Verificar se o backend (porta 8080) e o frontend (porta 5173) já estão rodando.
     - Se não estiverem, abrirá novas janelas do PowerShell para cada serviço.
     - Exibir os endereços de acesso ao frontend e backend.

Como parar os servidores:
  - Basta fechar as janelas do PowerShell abertas pelo script.

Observações:
  - Se as portas 8080 (backend) ou 5173 (frontend) já estiverem em uso, o script apenas avisará e não tentará iniciar o serviço correspondente.
  - Caso precise rodar o script novamente, certifique-se de que as portas estejam liberadas ou que os serviços anteriores tenham sido encerrados.
#>

# Script para iniciar backend e frontend juntos
Write-Host "[INFO] Iniciando Lista de Compras - Backend e Frontend" -ForegroundColor Green
Write-Host ""

# Função para verificar se uma porta está em uso
function Test-Port {
    param($port)
    try {
        $connection = New-Object System.Net.Sockets.TcpClient
        $connection.Connect("localhost", $port)
        $connection.Close()
        return $true
    }
    catch {
        return $false
    }
}

# Verificar se o backend já está rodando
if (Test-Port 8080) {
    Write-Host "[ATENCAO] Backend ja esta rodando na porta 8080" -ForegroundColor Yellow
} else {
    Write-Host "[INFO] Iniciando Backend (Go) na porta 8080..." -ForegroundColor Cyan
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend-api; go run ."
    Start-Sleep -Seconds 3
}

# Verificar se o frontend já está rodando
if (Test-Port 5173) {
    Write-Host "[ATENCAO] Frontend ja esta rodando na porta 5173" -ForegroundColor Yellow
} else {
    Write-Host "[INFO] Iniciando Frontend (React) na porta 5173..." -ForegroundColor Cyan
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd lista-de-compras; npm run dev"
    Start-Sleep -Seconds 3
}

Write-Host ""
Write-Host "[OK] Projetos iniciados!" -ForegroundColor Green
Write-Host "[INFO] Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "[INFO] Backend: http://localhost:8080" -ForegroundColor White
Write-Host ""
Write-Host "Para parar os servidores, feche as janelas do PowerShell" -ForegroundColor Gray