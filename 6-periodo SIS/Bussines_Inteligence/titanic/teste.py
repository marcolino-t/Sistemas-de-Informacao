#!/usr/bin/env python3
"""
Script de teste para verificar se a API do Titanic está funcionando corretamente
"""

import requests
import time
import webbrowser
import subprocess
import sys
import os

def testar_api():
    """Testa se a API está respondendo corretamente"""
    try:
        print("🔍 Testando conexão com a API...")
        response = requests.get("http://localhost:8000/", timeout=5)
        
        if response.status_code == 200:
            dados = response.json()
            print("✅ API funcionando corretamente!")
            print(f"📊 Dados recebidos: {dados}")
            return True
        else:
            print(f"❌ API retornou status {response.status_code}")
            return False
            
    except requests.exceptions.ConnectionError:
        print("❌ Não foi possível conectar com a API")
        print("💡 Certifique-se de que a API está rodando: python api.py")
        return False
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")
        return False

def iniciar_api():
    """Inicia a API em background"""
    print("🚀 Iniciando API...")
    try:
        # Inicia a API em background
        process = subprocess.Popen([sys.executable, "api.py"], 
                                 stdout=subprocess.PIPE, 
                                 stderr=subprocess.PIPE)
        time.sleep(3)  # Aguarda a API inicializar
        return process
    except Exception as e:
        print(f"❌ Erro ao iniciar API: {e}")
        return None

def main():
    print("🚢 Teste do Projeto Titanic")
    print("=" * 40)
    
    # Verifica se a API já está rodando
    if testar_api():
        print("✅ API já está rodando!")
    else:
        print("🔄 Iniciando API...")
        process = iniciar_api()
        if process:
            # Testa novamente após iniciar
            if testar_api():
                print("✅ API iniciada com sucesso!")
            else:
                print("❌ Falha ao iniciar API")
                return
        else:
            print("❌ Não foi possível iniciar a API")
            return
    
    # Abre o navegador
    print("🌐 Abrindo interface web...")
    try:
        # Caminho absoluto para o arquivo HTML
        html_path = os.path.abspath("index.html")
        webbrowser.open(f"file://{html_path}")
        print("✅ Interface aberta no navegador!")
        print("\n💡 Dicas:")
        print("- Se houver erros, abra o console do navegador (F12)")
        print("- Verifique se não há bloqueios de CORS")
        print("- A API deve estar rodando na porta 8000")
    except Exception as e:
        print(f"❌ Erro ao abrir navegador: {e}")

if __name__ == "__main__":
    main()
