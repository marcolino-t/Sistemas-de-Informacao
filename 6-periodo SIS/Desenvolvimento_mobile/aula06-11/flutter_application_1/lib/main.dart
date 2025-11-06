import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future<List<String>> fetchPokemonNames() async {
  final uri = Uri.parse('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
  final res = await http.get(uri);
  if (res.statusCode != 200) {
    throw Exception('Falha ao carregar (HTTP ${res.statusCode})');
  }
  final data = jsonDecode(res.body) as Map<String, dynamic>;
  final List<dynamic> results = data['results'] ?? [];
  return results
      .map((e) => (e as Map<String, dynamic>)['name'] as String)
      .toList();
}

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pokémon',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.red),
        useMaterial3: true,
      ),
      home: const PokemonListPage(),
    );
  }
}

class PokemonListPage extends StatelessWidget {
  const PokemonListPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Pokémon')),
      body: FutureBuilder<List<String>>(
        future: fetchPokemonNames(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Erro: ${snapshot.error}'));
          }
          final names = snapshot.data ?? const <String>[];
          if (names.isEmpty) {
            return const Center(child: Text('Nenhum Pokémon encontrado'));
          }
          return ListView.separated(
            itemCount: names.length,
            separatorBuilder: (_, __) => const Divider(height: 1),
            itemBuilder: (context, i) {
              final name = names[i];
              final title = name.isNotEmpty
                  ? name[0].toUpperCase() + name.substring(1)
                  : name;
              return ListTile(title: Text(title));
            },
          );
        },
      ),
    );
  }
}

