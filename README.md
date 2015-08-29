## Laravel Base (5.1)


### Included packages
- [illuminate/html](https://github.com/illuminate/html) *5.0.**
- [barryvdh/laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper) *^2.1*
- [doctrine/dbal](https://github.com/doctrine/dbal) *^2.5*

### Installation
```bash
# Clone the repo
git clone https://github.com/bstien/laravel-base [project name]

# Change DB-settings in .env
vim .env

# Pull inn composer-packages
composer install

# Change the app-key
php artisan key:generate

# Install node-deps
npm install

# Test that our gulpfile is correct
gulp
```