# RetroData: The Open Source Retro Game Database

## Local Development

### Initialization

```
git submodule init --recursive
cp .env.example .env
composer install
pnpm i
sail up -d
sail artisan migrate --seeding
sail artisan
```

### Start Server

```
sail up -d
sail start
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
