package main

import (
	"apigolang/config"
	"apigolang/routers"
	"fmt"
	"log"
	"net/http"
	"os"
)

func testDatabase() {
	fmt.Println("=== Teste de Conexão com Banco de Dados ===")

	// Testar conexão
	db, err := config.Connect()
	if err != nil {
		log.Fatalf("❌ Erro na conexão: %v", err)
	}
	defer db.Close()

	fmt.Println("✅ Conexão estabelecida com sucesso!")

	// Testar se o banco existe
	var dbName string
	err = db.QueryRow("SELECT DATABASE()").Scan(&dbName)
	if err != nil {
		log.Fatalf("❌ Erro ao verificar banco: %v", err)
	}
	fmt.Printf("📁 Banco atual: %s\n", dbName)

	// Verificar se a tabela existe
	var tableExists int
	err = db.QueryRow("SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = ? AND table_name = 'lista_compras_db'", dbName).Scan(&tableExists)
	if err != nil {
		log.Fatalf("❌ Erro ao verificar tabela: %v", err)
	}

	if tableExists > 0 {
		fmt.Println("✅ Tabela 'lista_compras_db' encontrada!")

		// Contar registros
		var count int
		err = db.QueryRow("SELECT COUNT(*) FROM lista_compras_db").Scan(&count)
		if err != nil {
			log.Printf("⚠️ Erro ao contar registros: %v", err)
		} else {
			fmt.Printf("📊 Total de registros: %d\n", count)
		}
	} else {
		fmt.Println("⚠️ Tabela 'lista_compras_db' não encontrada!")
		fmt.Println("💡 Você precisa criar a tabela primeiro.")
	}

	fmt.Println("=== Teste concluído ===")
}

func main() {
	// Verificar se é para testar o banco
	if len(os.Args) > 1 && os.Args[1] == "test-db" {
		testDatabase()
		return
	}

	handler := routers.SetupRouter()
	log.Println("Iniciando servidor em 8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
