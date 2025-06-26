package config

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

// Configurações do banco de dados com valores padrão para projeto acadêmico
const (
	DB_HOST     = "127.0.0.1"
	DB_USER     = "root"
	DB_PASSWORD = "root"
	DB_NAME     = "lista_compras_db"
	DB_PORT     = "3306"
)

func Connect() (*sql.DB, error) {
	// Permitir sobrescrever configurações via variáveis de ambiente (para produção)
	host := getEnv("DB_HOST", DB_HOST)
	user := getEnv("DB_USER", DB_USER)
	password := getEnv("DB_PASSWORD", DB_PASSWORD)
	dbName := getEnv("DB_NAME", DB_NAME)
	port := getEnv("DB_PORT", DB_PORT)

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", user, password, host, port, dbName)

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Printf("Erro ao abrir conexão com banco: %v", err)
		return nil, err
	}

	// Testar conexão
	err = db.Ping()
	if err != nil {
		log.Printf("Erro ao conectar com banco: %v", err)
		return nil, err
	}

	log.Println("Conexão com BD estabelecida com sucesso")
	return db, nil
}

// Função auxiliar para obter variáveis de ambiente com valor padrão
func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}
