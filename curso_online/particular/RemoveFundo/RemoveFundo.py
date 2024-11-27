from rembg import remove
from PIL import Image
import os

# Caminhos para a imagem de entrada e para a pasta de saída
input_image_path = "RemoveFundo\hidrosensor.jpeg"
output_directory = "ImgSemFundo"
output_image_name = "sensorsemfundo.png"

# Certifique-se de que a pasta de saída existe, se não, crie-a
os.makedirs(output_directory, exist_ok=True)

# Caminho completo do arquivo de saída
output_image_path = os.path.join(output_directory, output_image_name)

# Carrega a imagem
img = Image.open(input_image_path)

# Remove o fundo
img_without_back = remove(img)

# Salva a imagem resultante na pasta especificada
img_without_back.save(output_image_path)

print(f"Imagem salva em: {output_image_path}")
