#!/bin/bash

# Fix all the specific div patterns that should be self-closing
files=(
  "src/components/PhilosophySection.tsx"
  "src/components/ClinicInterior.tsx"
  "src/components/MessageSection.tsx"
  "src/components/ContactSection.tsx"
  "src/components/InformationSection.tsx"
  "src/components/HeroSection.tsx"
)

for file in "${files[@]}"; do
  echo "Fixing $file..."
  
  # Replace all empty div elements with self-closing syntax
  sed -i 's/<div\([^>]*\)><\/div>/<div\1 \/>/g' "$file"
done

echo "All fixes applied!"
