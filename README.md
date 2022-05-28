# RetroData: The Open Source Retro Game Database

## Local Development

### Initialization

```
git submodule init --recursive
cp .env.example .env
composer install
npm i
sail up -d
sail artisan migrate --seeding
sail down
```

### Start Server

```
sail up -d
sail npm start
```

Visit http://localhost

### Stop Server

```
sail stop
```

### Reinstall Sail

```
php artisan sail:install
```

### Cleanup Docker

```
docker-compose down -v --rmi all --remove-orphans
```
