import os
import django
import sys

# Set the settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

# Setup Django
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

# Get credentials from environment or use defaults
username = os.getenv("DJANGO_SUPERUSER_USERNAME")
email = os.getenv("DJANGO_SUPERUSER_EMAIL")
password = os.getenv("DJANGO_SUPERUSER_PASSWORD")

# Check for missing values
if not username or not email or not password:
    print("❌ Missing one or more required environment variables:")
    print("   DJANGO_SUPERUSER_USERNAME, DJANGO_SUPERUSER_EMAIL, DJANGO_SUPERUSER_PASSWORD")
    sys.exit(1)

def create_superuser():
    if User.objects.filter(username=username).exists():
        print(f"ℹ️ Superuser '{username}' already exists.")
    else:
        User.objects.create_superuser(username=username, email=email, password=password)
        print(f"✅ Superuser '{username}' created successfully.")

if __name__ == "__main__":
    try:
        create_superuser()
    except Exception as e:
        print(f"❌ Error creating superuser: {e}")
        sys.exit(1)
