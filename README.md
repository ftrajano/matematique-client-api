# Matematique Frontend

Frontend web para visualização de questões matemáticas. Esta aplicação consome a API do Matematique ([https://ftrajano84.pythonanywhere.com/api/v1/questoes/](https://ftrajano84.pythonanywhere.com/api/v1/questoes/)) e exibe as questões usando MathJax para renderização de fórmulas matemáticas em LaTeX.

## Funcionalidades

- Visualização de questões matemáticas
- Renderização de fórmulas LaTeX
- Interface responsiva usando Bootstrap
- Exibição categorizada por disciplinas e assuntos

## Tecnologias Utilizadas

- React.js
- Bootstrap para estilização
- Axios para requisições HTTP
- MathJax para renderização LaTeX

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/matematique-frontend.git
cd matematique-frontend
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
src/
  ├── components/          # Componentes React
  │   ├── MathJax.js      # Componente para renderização LaTeX
  │   └── QuestoesApp.js  # Componente principal da aplicação
  ├── styles/             # Arquivos CSS
  ├── App.js             
  └── index.js
```

## API

A aplicação consome a API do Matematique que fornece questões matemáticas em formato LaTeX. A API está hospedada em:
```
https://ftrajano84.pythonanywhere.com/api/v1/questoes/
```

## Desenvolvimento

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm start
```

## Contributing

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes

## Contato

Seu Nome - [@seutwitter](https://twitter.com/seutwitter)

Link do projeto: [https://github.com/seu-usuario/matematique-frontend](https://github.com/seu-usuario/matematique-frontend)