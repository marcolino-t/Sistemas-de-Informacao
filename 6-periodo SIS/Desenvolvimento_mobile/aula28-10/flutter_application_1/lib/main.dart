import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    // Titulo do app (sem acentos para evitar problemas de encoding no console)
    title: 'Navegacao Basica',
    theme: ThemeData(
      primarySwatch: Colors.blue,
    ),
    // Primeira tela exibida ao abrir o app
    home: const LoginPage(),
  ));
}

// ---------------------------------------------
// Tela de Login
// Permite digitar email e senha. Se email == 'admin@gmail.com'
// e senha == '123', navega para a pagina de Menu.
// ---------------------------------------------
class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void dispose() {
    // Libera os recursos dos controllers ao sair desta tela
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  // Valida credenciais e, se corretas, empilha a tela de Menu (Navigator.push)
  void _login() {
    if (_formKey.currentState!.validate()) {
      final email = _emailController.text.trim();
      final senha = _passwordController.text;

      if (email == 'admin@gmail.com' && senha == '123') {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (_) => const MenuPage()),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Email ou senha invalidos')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Campo de email
              TextFormField(
                controller: _emailController,
                decoration: const InputDecoration(
                  labelText: 'Email',
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Informe o email';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 12),

              // Campo de senha
              TextFormField(
                controller: _passwordController,
                decoration: const InputDecoration(
                  labelText: 'Senha',
                  border: OutlineInputBorder(),
                ),
                obscureText: true,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Informe a senha';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),

              // Botao de entrar
              ElevatedButton(
                onPressed: _login,
                child: const Text('Entrar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------
// Tela de Menu
// Exibe 3 botoes que redirecionam para paginas distintas
// usando Navigator.push + MaterialPageRoute.
// ---------------------------------------------
class MenuPage extends StatelessWidget {
  const MenuPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Menu')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Botao 1: abre a pagina "Quem sou eu"
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const QuemSouEuPage()),
                );
              },
              child: const Text('Quem sou eu'),
            ),

            const SizedBox(height: 12),

            // Botao 2: abre a pagina "Qual meu curso"
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const MeuCursoPage()),
                );
              },
              child: const Text('Qual meu curso'),
            ),

            const SizedBox(height: 12),

            // Botao 3: abre a pagina "Qual minha faculdade"
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const MinhaFaculdadePage()),
                );
              },
              child: const Text('Qual minha faculdade'),
            ),
          ],
        ),
      ),
    );
  }
}

// ---------------------------------------------
// Pagina: QuemSouEuPage
// Mostra informacoes sobre voce (personalize o texto abaixo).
// ---------------------------------------------
class QuemSouEuPage extends StatelessWidget {
  const QuemSouEuPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // O AppBar mostra automaticamente o botao de voltar
        // quando a pagina foi aberta via Navigator.push.
        title: const Text('Quem sou eu'),
      ),
      body: const Center(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Text(
            'Meu nome e Thiago.\n'
            'Matador de egua prenha.',
            textAlign: TextAlign.center,
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------
// Pagina: MeuCursoPage
// Mostra informacoes sobre o seu curso atual.
// ---------------------------------------------
class MeuCursoPage extends StatelessWidget {
  const MeuCursoPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Meu curso')),
      body: const Center(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Text(
            'Estou cursando Sistemas de Informacao.\n'
            'Na sala só tem animais.',
            textAlign: TextAlign.center,
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------
// Pagina: MinhaFaculdadePage
// Mostra informacoes sobre a sua instituicao de ensino.
// ---------------------------------------------
class MinhaFaculdadePage extends StatelessWidget {
  const MinhaFaculdadePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Minha faculdade')),
      body: const Center(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Text(
            'Minha faculdade e Libertas Faculdade Integradas.\n'
            ,
            textAlign: TextAlign.center,
          ),
        ),
      ),
    );
  }
}

