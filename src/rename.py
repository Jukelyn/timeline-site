# pylint: disable=C0114
import os
# from datetime import datetime

# datetime.datetime.date() is in YYYY-MM-DD format

MONTHS = {
    "jan": "-01-",
    "feb": "-02-",
    "mar": "-03-",
    "apr": "-04-",
    "may": "-05-",
    "jun": "-06-",
    "jul": "-07-",
    "aug": "-08-",
    "sep": "-09-",
    "oct": "-10-",
    "nov": "-11-",
    "dec": "-12-",
}


def replace_month_in_filename(directory):  # pylint: disable=C0116
    # Change from month to the month number
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg')):
            for month, month_num in MONTHS.items():
                if month in filename.lower():
                    new_name = filename.lower().replace(month, month_num)
                    new_path = os.path.join(directory, new_name)
                    old_path = os.path.join(directory, filename)
                    os.rename(old_path, new_path)
                    print(f"Renamed {filename} to {new_name}")
                    break


# replace_month_in_filename("./images")


def add_year_to_filename(directory):  # pylint: disable=C0116
    # If filename does not have "_2025", change to start with 2024
    # else if filename does have "_2025", change to start with 2025.
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            if "_2025" in filename:
                new_name = "2025" + filename
            else:
                new_name = "2024" + filename
            new_path = os.path.join(directory, new_name)
            os.rename(filepath, new_path)
            print(f"Renamed {filename} to {new_name}")


# add_year_to_filename("./images")

def rename_images_with_sequence(directory):  # pylint: disable=C0116
    # atp the images are named in the format of YYYY-MM-D or YYYY-MM-DD
    # Some of them have _01 or _1 if there are multiple images of the same day.
    date_groups = {}  # Dictionary to group files by date

    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            file_date = filename[:10]  # Extract the date part (YYYY-MM-DD)
            year, month, day = file_date.split('-')
            if "." in day:
                day = day.split('.')[0]
            file_date = f"{year}-{month}-{int(day):02d}"

            # Initialize counter for each date group
            if file_date not in date_groups:
                date_groups[file_date] = 0

            date_groups[file_date] += 1

            if date_groups[file_date] == 1:
                new_name = f"{file_date}{os.path.splitext(filename)[1]}"
            else:
                new_name = f"{file_date}_{date_groups[file_date]:02d}"
                new_name += f"{os.path.splitext(filename)[1]}"

            new_path = os.path.join(directory, new_name)

            os.rename(filepath, new_path)
            print(f"Renamed {filename} to {new_name}")


# rename_images_with_sequence("./images")


# def rename_images_with_sequence(directory):
#     date_groups = {}  # Dictionary to group files by date

#     # Sort files to ensure consistent processing
#     for filename in sorted(os.listdir(directory)):
#         print(f"Working on: {filename}...")
#         if filename.lower().endswith(('.jpg', '.jpeg')):
#             filepath = os.path.join(directory, filename)
#             file_date = get_file_date(filepath)

#             # Initialize counter for each date group
#             if file_date not in date_groups:
#                 date_groups[file_date] = 1

#             new_name = f"{file_date}_{date_groups[file_date]:02d}"
#             new_name += f"{os.path.splitext(filename)[1]}"
#             new_path = os.path.join(directory, new_name)

#             print(f"Renaming {filename}...")
#             os.rename(filepath, new_path)
#             print(f"Renamed {filename} to {new_name}")

#             date_groups[file_date] += 1


# rename_images_with_sequence("images")
