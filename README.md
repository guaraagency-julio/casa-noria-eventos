# Casa Nória — Site demonstrativo de espaço de eventos

Projeto conceitual autoral para o portfólio da **Guará Agency**. Desenvolvido com HTML, CSS e JavaScript sem framework, compatível com hospedagem estática no GitHub Pages.

## Prévia local

Abra `index.html` ou, preferencialmente, execute `python -m http.server 8080` na pasta do projeto e acesse `http://localhost:8080`.

## Páginas

- `index.html` — homepage completa com hero, arquitetura, eventos, galeria, diferenciais, FAQ e mapa.
- `espaco.html` — ambientes, estrutura, mezanino e diagramas ilustrativos.
- `eventos.html` — seis categorias de eventos.
- `galeria.html` — fotos com filtros, lightbox, navegação por teclado.
- `contato.html` — formulário com validação local, botões sociais simulados e Google Maps.

## Publicação no GitHub Pages

A workflow `.github/workflows/pages.yml` automatiza o deploy do ramo `main` para Pages. Antes do primeiro deploy, crie um repositório público, publique os arquivos e configure em **Settings → Pages → Build and deployment → Source: GitHub Actions**. Com as permissões da GitHub App e do repositório apropriadas, o workflow executa o deploy em cada push. No repositório é necessário habilitar Actions/Pages se desativado. Não há dependência de Cloudflare nem do domínio da Guará.

## Projeto fictício, limitações e cuidados

**Casa Nória não é um estabelecimento real.** Todos os horários, dados comerciais, capacidade de até 180 pessoas, configurações e itens operacionais são ilustrativos. O endereço real **Rua Guia Lopes, 4201, Canudos, Novo Hamburgo/RS** corresponde à Prefeitura Municipal de Novo Hamburgo, utilizada apenas como exemplo de mapa; não representa um imóvel da Casa Nória. Nunca apresente a prefeitura como sede da marca.

- Botões de WhatsApp, Instagram e Facebook exibem aviso de demonstração; não usam perfis de terceiros.
- O formulário faz validação local e não envia nem armazena dados.
- As fotos pertencem a **diferentes ambientes reais** e são **referências visuais**, não fotos de um único salão ou da Casa Nória.
- O projeto inclui `noindex,nofollow` e `robots.txt` para evitar indexação de negócios fictícios. Retire isso ao transformar o site em um projeto de cliente real, após validar endereço, dados e consentimentos.
- Antes de usar comercialmente, confirme capacidade (AVCB/segurança), acessibilidade, alvarás, fornecedor, climatização, política de eventos, contratos, preço e disponibilidade.
- Requer internet para carregar fontes, imagens do Unsplash e mapa do Google. Para uso em produção de cliente real, recomenda-se substituir por fotos autorizadas do imóvel e hospedá-las localmente.

## Banco de imagens — créditos e licenças

Fotografias com autorização de uso gratuito para projetos comerciais sob [Licença Unsplash](https://unsplash.com/license), conforme página individual. Atribuição é opcional, mas os fotógrafos são reconhecidos abaixo.

- **hero** — Matt Benson: https://unsplash.com/photos/elegant-banquet-hall-set-for-an-event-with-round-tables-cQxEJoQZ_-E
- **hall** — Filip Rankovic Grobgaard: https://unsplash.com/photos/elegant-event-space-set-with-round-tables-for-dining-EJQnHC6GEe8
- **warm** — Jonathan Borba: https://unsplash.com/photos/beautiful-indoor-event-venue-with-wooden-beams-and-floral-centerpieces-nm1c8QZTZr4
- **balloons** — Jose Marroquin: https://unsplash.com/photos/a-decorated-event-space-with-tables-and-balloons-Cfz5r15fKdU
- **gala** — Filip Rankovic Grobgaard: https://unsplash.com/photos/people-seated-at-a-formal-dinner-event-with-elegant-lighting-loRBLg9hyaU
- **chandelier** — ISKRA Photography: https://unsplash.com/photos/a-banquet-hall-with-chandeliers-and-tables-iXTkKQyVqbM
- **details** — Jennifer Kalenberg: https://unsplash.com/photos/a-decorated-table-setting-with-floral-centerpiece-for-an-event-9fopoHO4MUk
- **linen** — Andreea Avramescu: https://unsplash.com/photos/bohemian-wedding-reception-with-draped-fabric-and-tables-set-tables-hD7yVUIgoio
- **flowers** — Finn: https://unsplash.com/photos/a-banquet-hall-with-tables-and-chairs-and-flowers-hanging-from-the-ceiling-Lh08SRZiJFU
- **kids** — sadiq abdulmalik: https://unsplash.com/photos/family-celebrating-a-childs-birthday-with-balloons-and-balloons-rxBAxFpjotM
- **corporate** — Andy Wang: https://unsplash.com/photos/gala-event-with-a-stage-and-seated-guests-p2FsFMxEWfM

## Referências de linguagem visual

- [Montelago — event venue landing page](https://dribbble.com/shots/26761176-Montelago-Event-Venue-Landing-Page) — composição editorial e navegação orientada a conversão.
- [Event planning & venue websites 2026](https://colorlib.com/wp/event-planner-websites/) — estudo comparativo de galerias, consulta e transparência dos espaços.
- [Atrium — venue website concept](https://hatchable.com/sites/atrium) — linguagem arquitetônica e espaços fotografados com amplitude.

O projeto Casa Nória tem identidade, código, textos, composição e arquitetura de informação próprios.
