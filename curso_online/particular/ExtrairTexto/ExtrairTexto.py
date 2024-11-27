from PIL import Image
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def extract_text_from_image(image_path):
    # Abre a imagem usando Pillow
    image = Image.open(image_path)

    # Usa o pytesseract para extrair o texto da imagem
    text = pytesseract.image_to_string(image)

    return text

if __name__ == "__main__":
    image_path = input("caminho da imagem:")
    text = extract_text_from_image(image_path)
    print("Texto extraído da imagem:")
    print(text)
