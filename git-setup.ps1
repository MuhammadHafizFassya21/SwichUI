# Jalankan dari root folder proyek ini di terminal VS Code
# Pastikan Git sudah terpasang dan Anda sudah login ke GitHub

if (-not (Test-Path .git)) {
    git init
}

git add .

git commit -m "Initial commit" 2>$null

git branch -M main

git remote remove origin 2>$null

git remote add origin https://github.com/MuhammadHafizFassya21/SwichUI.git

git push -u origin main
