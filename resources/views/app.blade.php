<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <!-- Scripts -->
    <script>
        window.appName = "<?= config('app.name') ?>";
        window.appUrl = "<?= config('app.url') ?>";
        window.user = <?= auth()->user() ? auth()->user()->toJson() : 'null' ?>;
    </script>
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/index.js') }}" defer></script>
</head>

<body>
    <div id="root"></div>
</body>

</html>
