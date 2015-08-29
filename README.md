# Laravel Base (5.1)

## Included packages
- [laracasts/generators](https://github.com/laracasts/Laravel-5-Generators-Extended) *^1.1*
- [illuminate/html](https://github.com/illuminate/html) *5.0.**
- [barryvdh/laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper) *^2.1*
- [doctrine/dbal](https://github.com/doctrine/dbal) *^2.5*

## Installation
```bash
# Clone the repo
git clone https://github.com/bstien/laravel-base [project name]

# Pull inn composer-packages
composer install

# Change the app-key
php artisan key:generate

# Review packages.json and either remove or add node packages before you 
# run the following command.
npm install

# If you added new JS-libs or CSS-frameworks add them to gulpfile.js and 
# run the following command to verify that all is well.
gulp
```

## Database
Using MySQL with `utf8` as charset and `utf8_danish_ci` as collation. According to [MySQL docs](https://dev.mysql.com/doc/refman/5.0/en/charset-unicode-sets.html) `utf8_danish_ci` may be used for Norwegian.

I'm creating two separate users, each with different permissions:  
- Application/production  
	- `select`, `delete`, `update`, `insert`
- Migrations and maintenance
	- `select`, `delete`, `update`, `insert`, `create`, `alter`, `drop`, `index`  

```sql
-- Create database
CREATE DATABASE dbName DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_danish_ci;

-- User for production / application
-- Place username + password in DB_APPLICATION_USERNAME and DB_APPLICATION_PASSWORD
-- in file .env.
GRANT SELECT, DELETE, UPDATE, INSERT ON dbName.* TO 'appuser'@'localhost' \
IDENTIFIED BY 'somepass';

-- User for running migrations
-- Place username + password in DB_MIGRATION_USERNAME and DB_MIGRATION_PASSWORD
-- in file .env.
GRANT SELECT, DELETE, UPDATE, INSERT, CREATE, ALTER, DROP, INDEX \
ON dbName.* TO 'migrationuser'@'localhost' IDENTIFIED BY 'somepass';
```

After creation, remember to edit `.env` and set the config for both users, if needed.  
Default `DB_CONNECTION` is `application`, which means migrations may not be able to run. See section below for more info.

### Running migrations
If `DB_CONNECTION` is set to `application`, migrations may not be able to run, since we're using the unprivileged application-user. In these cases you can either change the value to `migration` or simply set the `--database` parameter when running migrations so we're able to use the privileged migration-user. See example under.  
```bash
php artisan migrate --database=migration
```

## Useful commands
**PS!** I've aliased the command `php artisan` into the simple `art`.  
Place this line in `~/.bashrc`:  
`alias art='php artisan'`

#### Migrations
```bash
# Rollback migration, migrate and seed DB.
# Remove --database if DB_CONNECTION is set to migration.
art migrate:refresh --database=migration && art db:seed 
```