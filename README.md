# Tia Fabi - Estética Peludinha
## Site Estático HTML5

Um site completamente estático, sem dependências, pronto para ser aberto no navegador ou hospedado em qualquer servidor web.

---

## 📋 Conteúdo

```
tia-fabi-static/
├── index.html              # Página principal (HTML5 puro)
├── css/
│   └── styles.css          # Estilos consolidados
├── images/
│   ├── logo.png            # Logo do negócio
│   └── hero-banner.png     # Banner da seção hero
├── README.md               # Este arquivo
└── .gitignore              # Arquivos a ignorar no Git
```

---

## 🚀 Como Usar

### Opção 1: Abrir Localmente (Mais Simples)
1. Extraia o arquivo ZIP em uma pasta no seu computador
2. Abra o arquivo `index.html` no seu navegador (duplo clique)
3. Pronto! O site está funcionando

### Opção 2: Servidor Local (Recomendado)
Se você tem Python instalado:
```bash
# Python 3
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

Se você tem Node.js instalado:
```bash
# Instalar http-server globalmente (uma vez)
npm install -g http-server

# Rodar servidor
http-server

# Depois acesse: http://localhost:8080
```

### Opção 3: Hospedar Online

#### GitHub Pages (Grátis)
1. Crie um repositório no GitHub chamado `tia-fabi-site`
2. Faça upload dos arquivos
3. Vá em Settings → Pages → Source → Main branch
4. Seu site estará em: `https://seu-usuario.github.io/tia-fabi-site`

#### Cloudflare Pages (Grátis)
1. Conecte seu repositório GitHub
2. Cloudflare detectará automaticamente
3. Deploy automático a cada push

#### Netlify (Grátis)
1. Acesse netlify.com
2. Faça drag-and-drop da pasta `tia-fabi-static`
3. Seu site estará online em segundos

---

## 🎨 Customização

### Editar Conteúdo
Abra `index.html` em um editor de texto (VS Code, Notepad++, etc) e edite:
- Textos
- Links de contato
- Horários
- Endereço

### Editar Estilos
Abra `css/styles.css` para modificar:
- Cores (variáveis CSS no topo)
- Fontes
- Tamanhos
- Espaçamentos

### Adicionar Imagens
1. Coloque as imagens na pasta `images/`
2. Adicione no HTML: `<img src="images/sua-imagem.png" alt="Descrição">`

---

## 📱 Responsividade

O site é **100% responsivo** e funciona perfeitamente em:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

---

## 🔍 SEO

O site inclui:
- ✅ Meta tags para buscadores
- ✅ Descrição e keywords
- ✅ Estrutura semântica HTML5
- ✅ Links otimizados

---

## 🎯 Funcionalidades

### Formulário de Contato
- Envia mensagens direto para WhatsApp
- Não requer servidor backend
- Funciona 100% no navegador do cliente

### Links Rápidos
- Navegação suave (scroll automático)
- Menu responsivo
- Links de telefone e WhatsApp

### Animações
- Fade-in ao carregar
- Slide-in nos cards
- Hover effects nos botões

---

## 📄 Estrutura HTML

O HTML é **100% semântico** e segue boas práticas:
- Uso de `<header>`, `<nav>`, `<section>`, `<footer>`
- Atributos alt em imagens
- Formulários acessíveis
- Meta tags completas

---

## 🔐 Segurança

- ✅ Sem dependências externas perigosas
- ✅ Sem scripts maliciosos
- ✅ Sem cookies desnecessários
- ✅ Sem rastreamento invasivo

---

## ⚡ Performance

- ✅ Carregamento instantâneo
- ✅ Sem build necessário
- ✅ Tamanho reduzido (~3MB com imagens)
- ✅ Otimizado para mobile

---

## 📝 Edição Rápida

### Mudar Cores
Abra `css/styles.css` e edite as variáveis CSS:
```css
:root {
  --primary-pink: #FF1493;      /* Cor rosa principal */
  --burnt-red: #990000;          /* Vermelho queimado */
  --blue-primary: #4169E1;       /* Azul */
  --gold: #FFB347;               /* Ouro */
}
```

### Mudar Fontes
As fontes são importadas do Google Fonts. Para mudar:
```html
<!-- No index.html, altere a linha: -->
<link href="https://fonts.googleapis.com/css2?family=NOVA-FONTE:wght@400;600;700&display=swap" rel="stylesheet">
```

### Mudar Textos
Abra `index.html` e edite diretamente o conteúdo entre as tags.

---

## 🐛 Troubleshooting

**Problema:** Imagens não carregam
- **Solução:** Verifique se a pasta `images/` está no mesmo diretório que `index.html`

**Problema:** Estilos não aparecem
- **Solução:** Verifique se `css/styles.css` está no caminho correto

**Problema:** WhatsApp não abre
- **Solução:** Verifique se o número de telefone está correto em `index.html`

---

## 📞 Contato

Para dúvidas ou sugestões sobre este site, entre em contato:
- **WhatsApp:** (18) 99758-1200
- **Endereço:** Rua Sebastião Leite do Canto, Assis - SP

---

## 📄 Licença

Este site é propriedade de Tia Fabi - Estética Peludinha.

---

**Desenvolvido com ❤️ para seu pet**
