# Conversor de Imagens em Python

Este projeto é um **conversor de imagens via linha de comando**, escrito em Python, que permite converter imagens para diferentes formatos (padrão WebP), ajustar a qualidade da compressão e realizar redimensionamento opcional mantendo a proporção da imagem.

## Funcionalidades

* Conversão de imagens para múltiplos formatos (`webp`, `png`, `jpeg`, etc.).
* Controle de qualidade de compressão.
* Redimensionamento opcional com limite de dimensão máxima.
* Suporte à conversão de uma única imagem ou todas as imagens dentro de uma pasta.
* Tratamento automático de canais de cor conforme o formato de saída.

## Requisitos

* Python 3.x
* Biblioteca Pillow (PIL)

### Instalação das dependências

```bash
pip install pillow
```

## Como Usar

### Sintaxe básica

```bash
python3 convert.py <input_path> [opções]
```

### Argumento obrigatório

| Argumento    | Descrição                                                         |
| ------------ | ----------------------------------------------------------------- |
| `input_path` | Caminho para uma imagem específica ou uma pasta contendo imagens. |

### Opções disponíveis

| Opção             | Descrição                                                                                                                        | Exemplo               |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `-o`, `--output`  | Caminho da pasta de saída. Se omitido, será criada uma pasta `converted_images` dentro da pasta de entrada.                      | `-o ./saidas`         |
| `-q`, `--quality` | Qualidade da compressão (1 a 100). Padrão: 70.                                                                                   | `-q 85`               |
| `-s`, `--format`  | Formato de saída: `webp`, `png`, `jpeg`, `jpg`, `bmp`, `tiff`, `gif`. Padrão: `webp`.                                            | `-s png`              |
| `-n`, `--name`    | Nome de uma única imagem a ser convertida (usado apenas quando `input_path` for uma pasta).                                      | `-n minha_imagem.jpg` |
| `-z`, `--size`    | Redimensiona a imagem para que a maior dimensão (largura ou altura) não exceda o valor definido (em pixels). Mantém a proporção. | `-z 800`              |

## Exemplos de Uso

### Converter uma única imagem para WebP (padrão)

```bash
python3 convert.py ./imagens/foto.jpg
```

### Converter uma imagem para PNG com qualidade 90

```bash
python3 convert.py ./imagens/foto.jpg -s png -q 90
```

### Converter todas as imagens de uma pasta para JPEG com tamanho máximo de 1200px

```bash
python3 convert.py ./imagens/ -s jpeg -q 80 -z 1200
```

### Converter apenas uma imagem específica dentro de uma pasta

```bash
python3 convert.py ./imagens/ -n minha_imagem.png
```

### Salvar os arquivos convertidos em uma pasta específica

```bash
python3 convert.py ./imagens/foto.jpg -o ./output_images
```

## Formatos de Saída Suportados

* `WEBP`
* `PNG`
* `JPEG` / `JPG`
* `BMP`
* `TIFF` / `TIF`
* `GIF`

## Comportamentos Importantes

* Quando o **input** for um diretório, o script procura e converte **todas as imagens suportadas** dentro dele (a não ser que o argumento `--name` seja usado).
* Para formatos como **JPEG**, a imagem será convertida automaticamente para RGB caso contenha canal alfa.
* O parâmetro de qualidade é interpretado de forma específica para cada formato (exemplo: para PNG, é convertido para o nível de compressão).

## Estrutura do Projeto

```
.
├── convert.py        # Código principal
├── README.md         # Documentação (este arquivo)
└── requirements.txt  # (Opcional) Dependências do projeto
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.