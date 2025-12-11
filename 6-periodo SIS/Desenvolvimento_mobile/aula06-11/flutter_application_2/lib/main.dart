import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MaterialApp(home: ProdutoApp()));

class Produto {
  String? id;
  final String descricao;
  final String marca;
  final double preco;

  Produto({
    this.id,
    required this.descricao,
    required this.marca,
    required this.preco,
  });

  factory Produto.fromJson(Map<String, dynamic> json) {
    final precoJson = json['preco'];
    final precoConvertido = precoJson is num
        ? precoJson.toDouble()
        : double.tryParse('$precoJson') ?? 0;

    return Produto(
      id: json['_id'],
      descricao: json['descricao'] ?? '',
      marca: json['marca'] ?? '',
      preco: precoConvertido,
    );
  }

  Map<String, dynamic> toJson() => {
        'descricao': descricao,
        'marca': marca,
        'preco': preco,
      };
}

class ProdutoApp extends StatefulWidget {
  @override
  State<ProdutoApp> createState() => _ProdutoAppState();
}

class _ProdutoAppState extends State<ProdutoApp> {
  // Atualize com o endpoint gerado para voce em https://crudcrud.com
  final String baseUrl =
      'https://crudcrud.com/api/cb476ce9950049a2862dcd7a9c7bb9fe/produtos';

  List<Produto> produtos = [];
  final _formKey = GlobalKey<FormState>();
  final _descricaoController = TextEditingController();
  final _marcaController = TextEditingController();
  final _precoController = TextEditingController();
  String? editandoId;

  @override
  void initState() {
    super.initState();
    carregarProdutos();
  }

  Future<void> carregarProdutos() async {
    final response = await http.get(Uri.parse(baseUrl));
    if (response.statusCode == 200) {
      final List<dynamic> data = jsonDecode(response.body);
      setState(() {
        produtos = data.map((e) => Produto.fromJson(e)).toList();
      });
    }
  }

  Future<void> salvarProduto() async {
    if (_formKey.currentState!.validate()) {
      final preco =
          double.parse(_precoController.text.replaceAll(',', '.').trim());
      final produto = Produto(
        descricao: _descricaoController.text.trim(),
        marca: _marcaController.text.trim(),
        preco: preco,
      );

      if (editandoId == null) {
        await http.post(
          Uri.parse(baseUrl),
          headers: {'Content-Type': 'application/json'},
          body: jsonEncode(produto.toJson()),
        );
      } else {
        await http.put(
          Uri.parse('$baseUrl/$editandoId'),
          headers: {'Content-Type': 'application/json'},
          body: jsonEncode(produto.toJson()),
        );
        editandoId = null;
      }

      _limparFormulario();
      await carregarProdutos();
    }
  }

  Future<void> deletarProduto(String id) async {
    await http.delete(Uri.parse('$baseUrl/$id'));
    await carregarProdutos();
  }

  void editarProduto(Produto produto) {
    setState(() {
      editandoId = produto.id;
      _descricaoController.text = produto.descricao;
      _marcaController.text = produto.marca;
      _precoController.text = produto.preco.toStringAsFixed(2);
    });
  }

  void _limparFormulario() {
    _descricaoController.clear();
    _marcaController.clear();
    _precoController.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('CRUD de Produtos')),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
                    controller: _descricaoController,
                    decoration: InputDecoration(labelText: 'Descricao'),
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Informe a descricao';
                      }
                      return null;
                    },
                  ),
                  TextFormField(
                    controller: _marcaController,
                    decoration: InputDecoration(labelText: 'Marca'),
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Informe a marca';
                      }
                      return null;
                    },
                  ),
                  TextFormField(
                    controller: _precoController,
                    decoration: InputDecoration(labelText: 'Preco (R\$)'),
                    keyboardType:
                        TextInputType.numberWithOptions(decimal: true),
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Informe o preco';
                      }
                      final parsed =
                          double.tryParse(value.replaceAll(',', '.').trim());
                      if (parsed == null || parsed <= 0) {
                        return 'Preco invalido';
                      }
                      return null;
                    },
                  ),
                  SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: salvarProduto,
                    child: Text(editandoId == null ? 'Adicionar' : 'Salvar'),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),
            Expanded(
              child: produtos.isEmpty
                  ? Center(child: Text('Nenhum produto cadastrado.'))
                  : ListView.builder(
                      itemCount: produtos.length,
                      itemBuilder: (context, index) {
                        final produto = produtos[index];
                        return Card(
                          child: ListTile(
                            title: Text(produto.descricao),
                            subtitle: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Marca: ${produto.marca}'),
                                Text(
                                    'Preco: R\$ ${produto.preco.toStringAsFixed(2)}'),
                              ],
                            ),
                            trailing: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                IconButton(
                                  icon: Icon(Icons.edit, color: Colors.orange),
                                  onPressed: () => editarProduto(produto),
                                ),
                                IconButton(
                                  icon: Icon(Icons.delete, color: Colors.red),
                                  onPressed: () =>
                                      deletarProduto(produto.id!),
                                ),
                              ],
                            ),
                          ),
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
