Com certeza! Aqui está o conteúdo do `README.md` em formato de texto simples, que você pode copiar e colar em um arquivo `.txt` e disponibilizar para download.

```
tiny - Conversor de Imagens para Linha de Comando

tiny é um script Python simples e poderoso para converter imagens entre diferentes formatos, ajustar a qualidade de compressão e redimensioná-las, tudo diretamente da linha de comando. Ideal para otimizar imagens para a web ou para uso geral.

Funcionalidades

*   Conversão de Formato: Converta imagens para WebP (padrão), PNG, JPEG, BMP, TIFF, GIF.
*   Ajuste de Qualidade: Controle a qualidade de compressão para formatos com perdas (WebP, JPEG) e o nível de compressão para PNG.
*   Redimensionamento: Redimensione imagens para uma dimensão máxima especificada, mantendo a proporção original.
*   Processamento em Lote: Converta todas as imagens em uma pasta ou uma imagem específica.
*   Saída Organizada: Salva as imagens convertidas em uma pasta dedicada (converted_images) por padrão, ou em um diretório de sua escolha.

Instalação

Para usar o tiny, siga os passos abaixo:

1. Pré-requisitos

Certifique-se de ter o Python 3 e o pip instalados.

Instale a biblioteca Pillow, que é a base para a manipulação de imagens:

pip install Pillow
# ou, se tiver várias versões do Python:
pip3 install Pillow

2. Baixe o Script

Crie um arquivo chamado tiny (sem extensão) em um local de sua preferência, por exemplo, ~/.local/bin/.

mkdir -p ~/.local/bin/
nano ~/.local/bin/tiny # ou use seu editor de texto favorito

Cole o conteúdo completo do script Python mais recente (o que inclui as opções -s para formato e -n para nome de imagem única) dentro deste arquivo. Certifique-se de que a primeira linha do arquivo seja:

#!/usr/bin/env python3

3. Torne o Script Executável

Dê permissão de execução ao arquivo tiny:

chmod +x ~/.local/bin/tiny

4. Adicione ao PATH (se necessário)

O diretório ~/.local/bin/ geralmente já está no PATH do seu sistema no Zorin OS (e na maioria das distribuições Linux modernas). Para verificar, abra um novo terminal e digite echo $PATH. Se ~/.local/bin não estiver listado, você precisará adicioná-lo.

Edite seu arquivo de configuração do shell (geralmente ~/.bashrc ou ~/.profile):

nano ~/.bashrc # ou ~/.profile

Adicione a seguinte linha no final do arquivo:

export PATH="$HOME/.local/bin:$PATH"

Salve e feche o arquivo. Em seguida, recarregue a configuração do shell:

source ~/.bashrc # ou source ~/.profile

Agora você pode usar o comando tiny de qualquer lugar no terminal.

Uso

A sintaxe básica do comando tiny é:

tiny <input_path> [opções]

Argumentos

*   <input_path>: Obrigatório. O caminho para a imagem individual ou para a pasta que contém as imagens a serem convertidas.

Opções

*   -o, --output <diretorio>:
    *   Define o diretório de saída para as imagens convertidas.
    *   Padrão: Se não especificado, as imagens serão salvas em uma subpasta chamada converted_images dentro do diretório de origem (ou do diretório da imagem, se for um arquivo único).
*   -q, --quality <1-100>:
    *   Define a qualidade de compressão para formatos com perdas (WebP, JPEG).
    *   Para PNG, isso se traduz em um nível de compressão (100% = menor compressão, maior qualidade; 1% = maior compressão, menor qualidade).
    *   Padrão: 70.
*   -s, --format <formato>:
    *   Define o formato de saída da imagem.
    *   Formatos suportados: webp (padrão), png, jpeg (ou jpg), bmp, tiff (ou tif), gif.
    *   Padrão: webp.
*   -n, --name <nome_da_imagem>:
    *   Usado quando <input_path> é uma pasta, mas você deseja converter apenas uma imagem específica dentro dela.
    *   Especifique o nome completo do arquivo da imagem (ex: minha_foto.jpg).
*   -z, --size <pixels>:
    *   Redimensiona a imagem para que sua maior dimensão (largura ou altura) não exceda o número de pixels especificado.
    *   A proporção da imagem é mantida.

Exemplos de Uso

1.  Converter uma única imagem para WebP com qualidade padrão (70%):
    tiny minha_imagem.png
    # Saída: ./converted_images/minha_imagem.webp

2.  Converter uma única imagem para WebP com qualidade 85%:
    tiny /caminho/para/minha_imagem.jpg -q 85
    # Saída: /caminho/para/converted_images/minha_imagem.webp

3.  Converter todas as imagens de uma pasta para WebP com qualidade 60%:
    tiny /caminho/para/minha_pasta_de_fotos -q 60
    # Saída: /caminho/para/minha_pasta_de_fotos/converted_images/*.webp

4.  Converter uma imagem específica (foto_do_gato.jpg) dentro de uma pasta para WebP com qualidade 75%:
    tiny /caminho/para/minha_pasta_de_fotos -n foto_do_gato.jpg -q 75
    # Saída: /caminho/para/minha_pasta_de_fotos/converted_images/foto_do_gato.webp

5.  Converter todas as imagens de uma pasta para PNG:
    tiny /caminho/para/minha_pasta_de_fotos -s png
    # Saída: /caminho/para/minha_pasta_de_fotos/converted_images/*.png

6.  Converter todas as imagens de uma pasta para JPEG, redimensionar para no máximo 1024px e salvar em um diretório específico:
    tiny /caminho/para/minha_pasta_de_fotos -s jpeg -z 1024 -o /caminho/para/saida/imagens_otimizadas
    # Saída: /caminho/para/saida/imagens_otimizadas/*.jpeg (redimensionadas)

7.  Converter uma imagem para WebP, redimensionar para no máximo 800px e salvar na pasta atual:
    tiny minha_imagem_grande.jpg -z 800 -o .
    # Saída: ./converted_images/minha_imagem_grande.webp (redimensionada)

Contribuição

Sinta-se à vontade para sugerir melhorias ou reportar problemas.

Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
```