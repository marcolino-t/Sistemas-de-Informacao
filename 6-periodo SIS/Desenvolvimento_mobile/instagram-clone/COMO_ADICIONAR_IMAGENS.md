# Como Adicionar Suas Próprias Imagens

## 📁 Estrutura de Pastas para Imagens

Para adicionar suas próprias imagens, organize-as na pasta `assets/` da seguinte forma:

```
assets/
├── icons/
│   ├── instagram_logo.png # Logo do Instagram (120x30px)
│   ├── home.png          # Ícone de home (24x24px)
│   ├── search.png        # Ícone de busca (24x24px)
│   ├── reels.png         # Ícone de reels (24x24px)
│   ├── shop.png          # Ícone de loja (24x24px)
│   ├── profile.png       # Ícone de perfil (24x24px)
│   ├── like.png          # Ícone de curtir (24x24px)
│   ├── like_filled.png   # Ícone de curtido (24x24px)
│   ├── comment.png       # Ícone de comentar (24x24px)
│   ├── share.png         # Ícone de compartilhar (24x24px)
│   ├── bookmark.png      # Ícone de salvar (24x24px)
│   ├── heart.png         # Ícone de notificação (24x24px)
│   └── message.png       # Ícone de mensagem (24x24px)
├── avatars/
│   ├── user1.jpg         # Avatar do usuário 1 (32x32px)
│   ├── user2.jpg         # Avatar do usuário 2 (32x32px)
│   └── ...
└── posts/
    ├── post1.jpg         # Imagem do post 1 (400x300px)
    ├── post2.jpg         # Imagem do post 2 (400x300px)
    └── ...
```

## 🔧 Como Atualizar os Componentes

### 1. Logo do Instagram (titulo.js)

```javascript
<Image 
  source={require('../../assets/icons/instagram_logo.png')} 
  style={styles.logo}
  resizeMode="contain"
/>
```

### 2. Menu de Navegação (menu.js)

Substitua as referências de ícones:

```javascript
const menuItems = [
  { id: 'home', icon: require('../../assets/icons/home.png'), label: 'Home' },
  { id: 'search', icon: require('../../assets/icons/search.png'), label: 'Busca' },
  { id: 'reels', icon: require('../../assets/icons/reels.png'), label: 'Reels' },
  { id: 'shop', icon: require('../../assets/icons/shop.png'), label: 'Loja' },
  { id: 'profile', icon: require('../../assets/icons/profile.png'), label: 'Perfil' },
];
```

### 3. Header (titulo.js)

```javascript
<TouchableOpacity style={styles.iconButton}>
  <Image 
    source={require('../../assets/icons/heart.png')} 
    style={styles.icon}
    resizeMode="contain"
  />
</TouchableOpacity>

<TouchableOpacity style={styles.iconButton}>
  <Image 
    source={require('../../assets/icons/message.png')} 
    style={styles.icon}
    resizeMode="contain"
  />
</TouchableOpacity>
```

### 4. Ações dos Posts (foto.js)

```javascript
<TouchableOpacity onPress={handleLike}>
  <Image 
    source={liked ? require('../../assets/icons/like_filled.png') : require('../../assets/icons/like.png')} 
    style={styles.actionIcon}
    resizeMode="contain"
  />
</TouchableOpacity>

<TouchableOpacity>
  <Image 
    source={require('../../assets/icons/comment.png')} 
    style={styles.actionIcon}
    resizeMode="contain"
  />
</TouchableOpacity>

<TouchableOpacity>
  <Image 
    source={require('../../assets/icons/share.png')} 
    style={styles.actionIcon}
    resizeMode="contain"
  />
</TouchableOpacity>

<TouchableOpacity>
  <Image 
    source={require('../../assets/icons/bookmark.png')} 
    style={styles.actionIcon}
    resizeMode="contain"
  />
</TouchableOpacity>
```

### 5. Avatars e Imagens de Posts (feed.js)

```javascript
const posts = [
  {
    id: 1,
    username: 'usuario1',
    userAvatar: require('../../assets/avatars/user1.jpg'),
    image: require('../../assets/posts/post1.jpg'),
    likes: 42,
    caption: 'Que dia lindo! ☀️ #natureza #fotografia',
    comments: 5,
    time: '2h',
  },
  // ... outros posts
];
```

## 📏 Tamanhos Recomendados

- **Logo Instagram**: 120x30px (PNG com fundo transparente)
- **Ícones**: 24x24px (PNG com fundo transparente)
- **Avatars**: 32x32px (JPG/PNG)
- **Imagens de Posts**: 400x300px (JPG/PNG)
- **Stories**: 60x60px (JPG/PNG)

## 🎨 Dicas de Design

1. **Ícones**: Use ícones em preto (#000) para melhor contraste
2. **Avatars**: Imagens quadradas funcionam melhor
3. **Posts**: Mantenha proporção 4:3 para melhor visualização
4. **Stories**: Imagens circulares com bordas coloridas

## ⚡ Otimização

- Comprima as imagens antes de adicionar ao projeto
- Use formatos apropriados (PNG para ícones, JPG para fotos)
- Mantenha os arquivos pequenos para melhor performance

## 🔄 Atualização Automática

Após adicionar as imagens, o app irá automaticamente:
- Redimensionar as imagens para os tamanhos corretos
- Aplicar as cores de tint apropriadas
- Manter a consistência visual
