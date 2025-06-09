package main

import "fmt"

func main() {
	preco := 10.0
	var quantidade int 
	quantidade = 3

	total := preco * float64(quantidade) 

	if quantidade == 5 {
		total = total - (total * 10 / 100)
	}

	fmt.Println("O total é: ", total)
}
