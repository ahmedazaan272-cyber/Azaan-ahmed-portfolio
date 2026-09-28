from PIL import Image
from collections import Counter

img = Image.open(r"Screenshot 2026-09-25 235850.png").convert("RGBA")
print(img.mode, img.size)
pix = list(img.getdata())
c = Counter(pix)
print('unique', len(c))
print('top colors', c.most_common(12))
