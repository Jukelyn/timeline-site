# pylint: disable=C0114
import sys
import os
from libthumbor import CryptoURL
from dotenv import load_dotenv


def get_image_filenames() -> list[str]:
    """Gets a list of image filenames in the ../images directory without the
    .jpg extension

    Returns:
        list[str]: List of image filenames without .jpg extension
    """
    images_dir = os.path.join(os.path.dirname(__file__), '../images')
    filenames = []

    for file in os.listdir(images_dir):
        if file.endswith('.jpg'):
            filenames.append(os.path.splitext(file)[0])

    return filenames


images = get_image_filenames()
# print(len(filenames))
print("Available images:")
for i in range(0, len(images), 10):
    print(" ".join(images[i:i + 10]))
print()

load_dotenv()
key = os.getenv("security_key")
crypto = CryptoURL(key=key)


def get_url(image_path: str, width: int, filter_list: list[str]) -> str:
    """Creates a URL for given image, width, and filters.

    Args:
        image_path (str): filename of image
        width (int): width of resultant image
        filters (list[str]): list of filters

    Returns:
        str: Hashed URL
    """
    encrypted_url = crypto.generate(
        width=width,
        height=0,
        smart=True,
        filters=filter_list,
        image_url=image_path
    )

    return encrypted_url


# def which_file() -> str:
#     """Gets the file name to be used

#     Returns:
#         str: File name with .jpg extension
#     """
#     return f'{input("Enter filename (no extension): ")}.jpg'


# filename = which_file()


# def get_filters() -> list[str]:
#     """Gets the filters to be used

#     Returns:
#         list[str]: Filter list
#     """
#     filters_str = input("Enter filters with spaces between them: ")

#     return filters_str.split()


# filters = get_filters()

def make_json(image_src: str, img: str, img_sm: str,  # pylint: disable=C0116
              img_md: str, img_lg: str) -> str:
    info_json = ""

    print(f"\nLinks for {image_src}.jpg:")
    # print(f'\t\t"imageSource": "https://cdn.jukelyn.com{img}",')
    # print(f'\t\t"imageSourceSmall": "https://cdn.jukelyn.com{img_small}",')
    # print(f'\t\t"imageSourceMedium": "https://cdn.jukelyn.com{img_medium}",')
    # print(f'\t\t"imageSourceLarge": "https://cdn.jukelyn.com{img_large}"')
    # print("-" * 50)

    info_json += f'\t\t"imageSource": "https://cdn.jukelyn.com{img}",\n'
    info_json += '\t\t"imageSourceSmall":'
    info_json += f' "https://cdn.jukelyn.com{img_sm}",\n'
    info_json += '\t\t"imageSourceMedium":'
    info_json += f'"https://cdn.jukelyn.com{img_md}",\n'
    info_json += '\t\t"imageSourceLarge":'
    info_json += f'"https://cdn.jukelyn.com{img_lg}"\n'
    print(info_json)

    return info_json


# Open a file to log output
with open("image_links.log", "w", encoding="utf-8") as log_file:
    # Redirect stdout to both the console and the file
    class Tee:  # pylint:disable=C0115
        def __init__(self, *files):
            self.files = files

        def write(self, message):  # pylint:disable=C0116
            for f in self.files:
                f.write(message)

        def flush(self):  # pylint:disable=C0116
            for f in self.files:
                f.flush()

    sys.stdout = Tee(sys.stdout, log_file)

    for image in images:
        filters = input(
            f"Enter any filters for {image} with spaces between them: ")
        filters = filters.split()
        filters.append("format(webp)")

        img_fullsize = get_url(f"{image}.jpg", 0, filters)
        img_400 = get_url(f"{image}.jpg", 400, filters)
        img_800 = get_url(f"{image}.jpg", 800, filters)
        img_1200 = get_url(f"{image}.jpg", 1200, filters)

        make_json(image, img_fullsize, img_400, img_800, img_1200)

# Reset stdout
sys.stdout = sys.__stdout__
