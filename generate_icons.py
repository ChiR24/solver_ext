from PIL import Image, ImageDraw

def create_icon(size):
    # Create a new image with a blue background
    image = Image.new('RGB', (size, size), '#3498db')
    draw = ImageDraw.Draw(image)
    
    # Calculate padding (20% of size)
    padding = int(size * 0.2)
    
    # Draw a simplified brain icon (just a circle for simplicity)
    draw.ellipse(
        [padding, padding, size - padding, size - padding],
        fill='white'
    )
    
    # Save the image
    image.save(f'icons/icon{size}.png')

sizes = [16, 48, 128]

for size in sizes:
    create_icon(size) 